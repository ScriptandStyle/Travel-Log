const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const logger = require('./config/logger');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const config = require('./config/config');
const swaggerDocs = require('./config/swagger');

// Load environment variables from .env file
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

// Verify environment variables
const requiredEnvVars = [
  'MONGODB_URI',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_CLIENT_EMAIL',
  'FIREBASE_PRIVATE_KEY'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  console.error('Missing required environment variables:', missingVars.join(', '));
  console.log('Please check your .env file and make sure all required variables are set');
  process.exit(1);
}

const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => logger.info('Connected to MongoDB'))
  .catch(err => logger.error('MongoDB connection error:', err));

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api/', limiter);

// CORS configuration
app.use(cors({
  origin: config.cors.origin !== '*' ? config.cors.origin.split(',') : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());
app.use(morgan('combined', { stream: logger.stream }));

// Routes
const authRoutes = require('./routes/auth');
const experienceRoutes = require('./routes/experience');
const bookingRoutes = require('./routes/booking');

app.use('/api/auth', authRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/bookings', bookingRoutes);

// Swagger Documentation
swaggerDocs(app);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Travel Log API' });
});

// Import and use error handling middleware
const { errorHandler, notFound } = require('./middleware/errorHandler');
const paginationMiddleware = require('./middleware/pagination');

// Apply pagination middleware
app.use(paginationMiddleware);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 