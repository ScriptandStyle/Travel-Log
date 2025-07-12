const { body, validationResult } = require('express-validator');

// Middleware to check validation results
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Validation rules for experience creation
const experienceValidationRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('description').notEmpty().withMessage('Description is required').isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
  body('image').optional().isURL().withMessage('Image must be a valid URL')
];

// Validation rules for booking creation
const bookingValidationRules = [
  body('destination').notEmpty().withMessage('Destination is required'),
  body('bookingDate').notEmpty().withMessage('Booking date is required').isISO8601().withMessage('Invalid date format'),
  body('numberOfPeople').notEmpty().withMessage('Number of people is required').isInt({ min: 1 }).withMessage('Number of people must be at least 1'),
  body('totalPrice').notEmpty().withMessage('Total price is required').isNumeric().withMessage('Total price must be a number'),
  body('contactInfo.name').notEmpty().withMessage('Contact name is required'),
  body('contactInfo.email').notEmpty().withMessage('Contact email is required').isEmail().withMessage('Invalid email format'),
  body('contactInfo.phone').notEmpty().withMessage('Contact phone is required')
];

// Validation rules for comments
const commentValidationRules = [
  body('text').notEmpty().withMessage('Comment text is required')
];

module.exports = {
  validateRequest,
  experienceValidationRules,
  bookingValidationRules,
  commentValidationRules
};
