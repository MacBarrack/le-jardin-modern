const { body, param, query } = require('express-validator');

// User validation rules
const userValidation = {
  register: [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email address'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('firstName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('First name is required and must be less than 50 characters'),
    body('lastName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('Last name is required and must be less than 50 characters'),
    body('phone')
      .optional()
      .isMobilePhone()
      .withMessage('Please provide a valid phone number')
  ],

  login: [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email address'),
    body('password')
      .exists()
      .withMessage('Password is required')
  ],

  updateProfile: [
    body('firstName')
      .optional()
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('First name must be less than 50 characters'),
    body('lastName')
      .optional()
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('Last name must be less than 50 characters'),
    body('phone')
      .optional()
      .isMobilePhone()
      .withMessage('Please provide a valid phone number')
  ],

  updateUser: [
    param('id')
      .isLength({ min: 1 })
      .withMessage('User ID is required'),
    body('firstName')
      .optional()
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('First name must be less than 50 characters'),
    body('lastName')
      .optional()
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('Last name must be less than 50 characters'),
    body('phone')
      .optional()
      .isMobilePhone()
      .withMessage('Please provide a valid phone number'),
    body('role')
      .optional()
      .isIn(['user', 'admin'])
      .withMessage('Role must be either user or admin'),
    body('isActive')
      .optional()
      .isBoolean()
      .withMessage('isActive must be a boolean value')
  ]
};

// Program validation rules
const programValidation = {
  create: [
    body('title')
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage('Title is required and must be less than 100 characters'),
    body('description')
      .trim()
      .isLength({ min: 1, max: 1000 })
      .withMessage('Description is required and must be less than 1000 characters'),
    body('ageRange')
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('Age range is required'),
    body('capacity')
      .isInt({ min: 1 })
      .withMessage('Capacity must be a positive integer'),
    body('price')
      .isFloat({ min: 0 })
      .withMessage('Price must be a positive number'),
    body('features')
      .optional()
      .isArray()
      .withMessage('Features must be an array'),
    body('imageUrl')
      .optional()
      .isURL()
      .withMessage('Image URL must be a valid URL')
  ],

  update: [
    param('id')
      .isLength({ min: 1 })
      .withMessage('Program ID is required'),
    body('title')
      .optional()
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage('Title must be less than 100 characters'),
    body('description')
      .optional()
      .trim()
      .isLength({ min: 1, max: 1000 })
      .withMessage('Description must be less than 1000 characters'),
    body('ageRange')
      .optional()
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('Age range is required'),
    body('capacity')
      .optional()
      .isInt({ min: 1 })
      .withMessage('Capacity must be a positive integer'),
    body('price')
      .optional()
      .isFloat({ min: 0 })
      .withMessage('Price must be a positive number'),
    body('features')
      .optional()
      .isArray()
      .withMessage('Features must be an array'),
    body('imageUrl')
      .optional()
      .isURL()
      .withMessage('Image URL must be a valid URL'),
    body('isActive')
      .optional()
      .isBoolean()
      .withMessage('isActive must be a boolean value')
  ]
};

// Contact validation rules
const contactValidation = {
  submit: [
    body('firstName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('First name is required and must be less than 50 characters'),
    body('lastName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('Last name is required and must be less than 50 characters'),
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email address'),
    body('phone')
      .optional()
      .isMobilePhone()
      .withMessage('Please provide a valid phone number'),
    body('subject')
      .optional()
      .trim()
      .isLength({ max: 200 })
      .withMessage('Subject must be less than 200 characters'),
    body('message')
      .trim()
      .isLength({ min: 1, max: 2000 })
      .withMessage('Message is required and must be less than 2000 characters'),
    body('priority')
      .optional()
      .isIn(['low', 'normal', 'high', 'urgent'])
      .withMessage('Priority must be low, normal, high, or urgent')
  ],

  update: [
    param('id')
      .isLength({ min: 1 })
      .withMessage('Contact ID is required'),
    body('status')
      .optional()
      .isIn(['new', 'read', 'replied', 'closed'])
      .withMessage('Status must be new, read, replied, or closed'),
    body('priority')
      .optional()
      .isIn(['low', 'normal', 'high', 'urgent'])
      .withMessage('Priority must be low, normal, high, or urgent'),
    body('response')
      .optional()
      .trim()
      .isLength({ max: 2000 })
      .withMessage('Response must be less than 2000 characters')
  ],

  reply: [
    param('id')
      .isLength({ min: 1 })
      .withMessage('Contact ID is required'),
    body('response')
      .trim()
      .isLength({ min: 1, max: 2000 })
      .withMessage('Response is required and must be less than 2000 characters')
  ]
};

// Enrollment validation rules
const enrollmentValidation = {
  create: [
    body('programId')
      .isLength({ min: 1 })
      .withMessage('Program ID is required'),
    body('childName')
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage('Child name is required and must be less than 100 characters'),
    body('childAge')
      .isInt({ min: 0, max: 18 })
      .withMessage('Child age must be between 0 and 18'),
    body('childDateOfBirth')
      .isISO8601()
      .withMessage('Child date of birth must be a valid date'),
    body('parentName')
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage('Parent name is required and must be less than 100 characters'),
    body('parentEmail')
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid parent email address'),
    body('parentPhone')
      .isMobilePhone()
      .withMessage('Please provide a valid parent phone number'),
    body('startDate')
      .isISO8601()
      .withMessage('Start date must be a valid date'),
    body('specialNeeds')
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage('Special needs must be less than 1000 characters')
  ],

  update: [
    param('id')
      .isLength({ min: 1 })
      .withMessage('Enrollment ID is required'),
    body('childName')
      .optional()
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage('Child name must be less than 100 characters'),
    body('childAge')
      .optional()
      .isInt({ min: 0, max: 18 })
      .withMessage('Child age must be between 0 and 18'),
    body('parentName')
      .optional()
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage('Parent name must be less than 100 characters'),
    body('parentPhone')
      .optional()
      .isMobilePhone()
      .withMessage('Please provide a valid parent phone number'),
    body('specialNeeds')
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage('Special needs must be less than 1000 characters'),
    body('status')
      .optional()
      .isIn(['pending', 'approved', 'rejected', 'active', 'completed', 'cancelled'])
      .withMessage('Status must be pending, approved, rejected, active, completed, or cancelled'),
    body('notes')
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage('Notes must be less than 1000 characters')
  ]
};

// Common parameter validations
const paramValidation = {
  id: [
    param('id')
      .isLength({ min: 1 })
      .withMessage('ID parameter is required')
  ],

  status: [
    param('status')
      .isLength({ min: 1 })
      .withMessage('Status parameter is required')
  ],

  ageRange: [
    param('ageRange')
      .isLength({ min: 1 })
      .withMessage('Age range parameter is required')
  ]
};

// Query parameter validations
const queryValidation = {
  pagination: [
    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage('Limit must be between 1 and 100'),
    query('offset')
      .optional()
      .isInt({ min: 0 })
      .withMessage('Offset must be a non-negative integer')
  ]
};

module.exports = {
  userValidation,
  programValidation,
  contactValidation,
  enrollmentValidation,
  paramValidation,
  queryValidation
};

