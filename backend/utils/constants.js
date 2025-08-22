// User roles
const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin'
};

// User status
const USER_STATUS = {
  ACTIVE: true,
  INACTIVE: false
};

// Contact status
const CONTACT_STATUS = {
  NEW: 'new',
  READ: 'read',
  REPLIED: 'replied',
  CLOSED: 'closed'
};

// Contact priority
const CONTACT_PRIORITY = {
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high',
  URGENT: 'urgent'
};

// Enrollment status
const ENROLLMENT_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
};

// Program status
const PROGRAM_STATUS = {
  ACTIVE: true,
  INACTIVE: false
};

// Age ranges for programs
const AGE_RANGES = {
  INFANT: '0-12 months',
  TODDLER: '1-2 years',
  PRESCHOOL: '3-4 years',
  KINDERGARTEN: '5-6 years',
  SCHOOL_AGE: '6-12 years'
};

// Days of the week
const DAYS_OF_WEEK = {
  MONDAY: 'monday',
  TUESDAY: 'tuesday',
  WEDNESDAY: 'wednesday',
  THURSDAY: 'thursday',
  FRIDAY: 'friday',
  SATURDAY: 'saturday',
  SUNDAY: 'sunday'
};

// Time slots
const TIME_SLOTS = {
  MORNING: '8:00 AM - 12:00 PM',
  AFTERNOON: '12:00 PM - 4:00 PM',
  EVENING: '4:00 PM - 6:00 PM',
  FULL_DAY: '8:00 AM - 6:00 PM'
};

// HTTP status codes
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500
};

// Error codes
const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
  DUPLICATE_ERROR: 'DUPLICATE_ERROR',
  INTERNAL_ERROR: 'INTERNAL_ERROR'
};

// Success messages
const SUCCESS_MESSAGES = {
  USER_REGISTERED: 'User registered successfully',
  USER_LOGGED_IN: 'Login successful',
  USER_LOGGED_OUT: 'Logged out successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
  USER_UPDATED: 'User updated successfully',
  USER_DEACTIVATED: 'User deactivated successfully',
  
  PROGRAM_CREATED: 'Program created successfully',
  PROGRAM_UPDATED: 'Program updated successfully',
  PROGRAM_DELETED: 'Program deleted successfully',
  
  CONTACT_SUBMITTED: 'Contact form submitted successfully',
  CONTACT_UPDATED: 'Contact updated successfully',
  CONTACT_REPLIED: 'Reply sent successfully',
  CONTACT_CLOSED: 'Contact closed successfully',
  CONTACT_DELETED: 'Contact deleted successfully',
  
  ENROLLMENT_CREATED: 'Enrollment submitted successfully',
  ENROLLMENT_UPDATED: 'Enrollment updated successfully',
  ENROLLMENT_APPROVED: 'Enrollment approved successfully',
  ENROLLMENT_REJECTED: 'Enrollment rejected successfully',
  ENROLLMENT_ACTIVATED: 'Enrollment activated successfully',
  ENROLLMENT_CANCELLED: 'Enrollment cancelled successfully'
};

// Error messages
const ERROR_MESSAGES = {
  VALIDATION_FAILED: 'Validation errors',
  INVALID_CREDENTIALS: 'Invalid credentials',
  UNAUTHORIZED_ACCESS: 'Unauthorized access',
  ACCESS_DENIED: 'Access denied',
  ADMIN_ACCESS_REQUIRED: 'Admin access required',
  ACCOUNT_DEACTIVATED: 'Account is deactivated',
  
  USER_NOT_FOUND: 'User not found',
  USER_ALREADY_EXISTS: 'User already exists with this email',
  CANNOT_DEACTIVATE_ADMIN: 'Cannot deactivate admin users',
  
  PROGRAM_NOT_FOUND: 'Program not found',
  PROGRAM_NOT_AVAILABLE: 'Program is not available for enrollment',
  
  CONTACT_NOT_FOUND: 'Contact not found',
  
  ENROLLMENT_NOT_FOUND: 'Enrollment not found',
  ENROLLMENT_CANNOT_BE_CANCELLED: 'Enrollment cannot be cancelled in its current status',
  
  INVALID_TOKEN: 'Invalid token',
  TOKEN_EXPIRED: 'Token has expired',
  NO_TOKEN_PROVIDED: 'No token provided',
  
  INTERNAL_SERVER_ERROR: 'Internal server error',
  DATABASE_ERROR: 'Database error occurred',
  FIREBASE_ERROR: 'Firebase error occurred'
};

// Pagination defaults
const PAGINATION = {
  DEFAULT_LIMIT: 50,
  MAX_LIMIT: 100,
  DEFAULT_OFFSET: 0
};

// File upload limits
const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
};

// Rate limiting
const RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS: 100,
  MESSAGE: 'Too many requests from this IP, please try again later.'
};

// JWT configuration
const JWT_CONFIG = {
  DEFAULT_EXPIRES_IN: '7d',
  REFRESH_EXPIRES_IN: '30d'
};

// Email templates
const EMAIL_TEMPLATES = {
  WELCOME: 'welcome',
  PASSWORD_RESET: 'password_reset',
  ENROLLMENT_CONFIRMATION: 'enrollment_confirmation',
  ENROLLMENT_APPROVED: 'enrollment_approved',
  ENROLLMENT_REJECTED: 'enrollment_rejected',
  CONTACT_REPLY: 'contact_reply'
};

// Notification types
const NOTIFICATION_TYPES = {
  EMAIL: 'email',
  SMS: 'sms',
  PUSH: 'push',
  IN_APP: 'in_app'
};

// Admin permissions
const ADMIN_PERMISSIONS = {
  MANAGE_USERS: 'manage_users',
  MANAGE_PROGRAMS: 'manage_programs',
  MANAGE_ENROLLMENTS: 'manage_enrollments',
  MANAGE_CONTACTS: 'manage_contacts',
  VIEW_ANALYTICS: 'view_analytics',
  EXPORT_DATA: 'export_data',
  SYSTEM_SETTINGS: 'system_settings'
};

// System settings
const SYSTEM_SETTINGS = {
  SITE_NAME: 'Le Jardin Eden',
  DEFAULT_TIMEZONE: 'UTC',
  DEFAULT_LANGUAGE: 'en',
  SUPPORT_EMAIL: 'support@lejardineden.com',
  ADMIN_EMAIL: 'admin@lejardineden.com'
};

module.exports = {
  USER_ROLES,
  USER_STATUS,
  CONTACT_STATUS,
  CONTACT_PRIORITY,
  ENROLLMENT_STATUS,
  PROGRAM_STATUS,
  AGE_RANGES,
  DAYS_OF_WEEK,
  TIME_SLOTS,
  HTTP_STATUS,
  ERROR_CODES,
  SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  PAGINATION,
  FILE_UPLOAD,
  RATE_LIMIT,
  JWT_CONFIG,
  EMAIL_TEMPLATES,
  NOTIFICATION_TYPES,
  ADMIN_PERMISSIONS,
  SYSTEM_SETTINGS
};

