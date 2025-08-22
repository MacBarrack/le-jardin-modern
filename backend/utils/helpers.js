const jwt = require('jsonwebtoken');

// Response helpers
const responseHelpers = {
  success: (res, data, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  },

  error: (res, message = 'An error occurred', statusCode = 500, errors = null) => {
    const response = {
      success: false,
      message
    };
    
    if (errors) {
      response.errors = errors;
    }
    
    return res.status(statusCode).json(response);
  },

  validationError: (res, errors) => {
    return res.status(400).json({
      success: false,
      message: 'Validation errors',
      errors
    });
  },

  notFound: (res, resource = 'Resource') => {
    return res.status(404).json({
      success: false,
      message: `${resource} not found`
    });
  },

  unauthorized: (res, message = 'Unauthorized access') => {
    return res.status(401).json({
      success: false,
      message
    });
  },

  forbidden: (res, message = 'Access forbidden') => {
    return res.status(403).json({
      success: false,
      message
    });
  }
};

// Date helpers
const dateHelpers = {
  formatDate: (date) => {
    if (!date) return null;
    return new Date(date).toISOString().split('T')[0];
  },

  formatDateTime: (date) => {
    if (!date) return null;
    return new Date(date).toISOString();
  },

  isValidDate: (dateString) => {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  },

  addDays: (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },

  subtractDays: (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  },

  isFutureDate: (date) => {
    return new Date(date) > new Date();
  },

  isPastDate: (date) => {
    return new Date(date) < new Date();
  },

  getAge: (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  }
};

// String helpers
const stringHelpers = {
  capitalize: (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  capitalizeWords: (str) => {
    if (!str) return '';
    return str.split(' ').map(word => stringHelpers.capitalize(word)).join(' ');
  },

  slugify: (str) => {
    if (!str) return '';
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  truncate: (str, length = 100, suffix = '...') => {
    if (!str || str.length <= length) return str;
    return str.substring(0, length) + suffix;
  },

  removeHtml: (str) => {
    if (!str) return '';
    return str.replace(/<[^>]*>/g, '');
  },

  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  generateRandomString: (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};

// Array helpers
const arrayHelpers = {
  unique: (arr) => {
    return [...new Set(arr)];
  },

  chunk: (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  },

  shuffle: (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  groupBy: (arr, key) => {
    return arr.reduce((groups, item) => {
      const group = item[key];
      groups[group] = groups[group] || [];
      groups[group].push(item);
      return groups;
    }, {});
  }
};

// Object helpers
const objectHelpers = {
  pick: (obj, keys) => {
    const picked = {};
    keys.forEach(key => {
      if (key in obj) {
        picked[key] = obj[key];
      }
    });
    return picked;
  },

  omit: (obj, keys) => {
    const omitted = { ...obj };
    keys.forEach(key => {
      delete omitted[key];
    });
    return omitted;
  },

  isEmpty: (obj) => {
    return Object.keys(obj).length === 0;
  },

  deepClone: (obj) => {
    return JSON.parse(JSON.stringify(obj));
  },

  flattenObject: (obj, prefix = '') => {
    const flattened = {};
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          Object.assign(flattened, objectHelpers.flattenObject(obj[key], newKey));
        } else {
          flattened[newKey] = obj[key];
        }
      }
    }
    
    return flattened;
  }
};

// JWT helpers
const jwtHelpers = {
  generateToken: (payload, expiresIn = '7d') => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
  },

  verifyToken: (token) => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error('Invalid token');
    }
  },

  decodeToken: (token) => {
    return jwt.decode(token);
  }
};

// Pagination helpers
const paginationHelpers = {
  getPaginationParams: (req) => {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;
    const page = Math.floor(offset / limit) + 1;
    
    return { limit, offset, page };
  },

  createPaginationResponse: (data, total, limit, offset) => {
    const page = Math.floor(offset / limit) + 1;
    const totalPages = Math.ceil(total / limit);
    const hasNext = page < totalPages;
    const hasPrev = page > 1;
    
    return {
      data,
      pagination: {
        total,
        count: data.length,
        page,
        totalPages,
        limit,
        offset,
        hasNext,
        hasPrev
      }
    };
  }
};

// File helpers
const fileHelpers = {
  getFileExtension: (filename) => {
    return filename.split('.').pop().toLowerCase();
  },

  isValidImageExtension: (filename) => {
    const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const extension = fileHelpers.getFileExtension(filename);
    return validExtensions.includes(extension);
  },

  formatFileSize: (bytes) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
};

// Validation helpers
const validationHelpers = {
  isValidPhone: (phone) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone);
  },

  isValidUrl: (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  sanitizeInput: (input) => {
    if (typeof input !== 'string') return input;
    return input.trim().replace(/[<>]/g, '');
  }
};

// Error helpers
const errorHelpers = {
  handleAsyncError: (fn) => {
    return (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  },

  createError: (message, statusCode = 500, code = null) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    if (code) error.code = code;
    return error;
  }
};

module.exports = {
  responseHelpers,
  dateHelpers,
  stringHelpers,
  arrayHelpers,
  objectHelpers,
  jwtHelpers,
  paginationHelpers,
  fileHelpers,
  validationHelpers,
  errorHelpers
};

