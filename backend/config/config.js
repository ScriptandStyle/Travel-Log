const path = require('path');
const dotenv = require('dotenv');

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' 
  ? '.env.production' 
  : process.env.NODE_ENV === 'test' 
    ? '.env.test' 
    : '.env.development';

// Try to load environment-specific file first, fall back to default .env
const envPath = path.resolve(__dirname, `../../${envFile}`);
const defaultEnvPath = path.resolve(__dirname, '../../.env');

// Load environment-specific file if it exists
let envLoaded = dotenv.config({ path: envPath });

// If environment-specific file doesn't exist or has errors, load default .env
if (envLoaded.error) {
  dotenv.config({ path: defaultEnvPath });
}

// Configuration object
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,
  mongoUri: process.env.MONGODB_URI,
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*'
  },
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',
  logLevel: process.env.LOG_LEVEL || 'info'
};

module.exports = config;
