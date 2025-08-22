const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { auth } = require('../config/firebase.js');

// Verify JWT token
const verifyToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Get user from database to ensure they still exist and are active
    const user = await User.findByUid(decoded.uid);
    if (!user || !user.isActiveUser()) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token or user not found.'
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({
      success: false,
      message: 'Invalid token.'
    });
  }
};

// Verify Firebase ID token
const verifyFirebaseToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      });
    }

    // Verify Firebase ID token
    const decodedToken = await auth.verifyIdToken(token);
    
    // Get user from database
    const user = await User.findByUid(decodedToken.uid);
    if (!user || !user.isActiveUser()) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token or user not found.'
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    console.error('Firebase token verification error:', error);
    res.status(401).json({
      success: false,
      message: 'Invalid Firebase token.'
    });
  }
};

// Check if user is admin - RESTRICTED TO "LE JARDIN" ONLY
const requireAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.'
      });
    }

    // Check if user has admin role
    if (!req.user.isAdmin()) {
      return res.status(403).json({
        success: false,
        message: 'Admin access required.'
      });
    }

    // SECURITY: Only allow "le jardin" email to have admin access
    const adminEmail = req.user.email.toLowerCase();
    if (!adminEmail.includes('lejardin') && !adminEmail.includes('le-jardin') && !adminEmail.includes('le_jardin')) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized admin access.'
      });
    }

    next();
  } catch (error) {
    console.error('Admin permission check error:', error);
    res.status(500).json({
      success: false,
      message: 'Error checking admin permissions.'
    });
  }
};

// Optional authentication (doesn't fail if no token)
const optionalAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByUid(decoded.uid);
        if (user && user.isActiveUser()) {
          req.user = user;
        }
      } catch (error) {
        // Token is invalid, but we continue without user
        req.user = null;
      }
    }
    
    next();
  } catch (error) {
    next();
  }
};

module.exports = {
  verifyToken,
  verifyFirebaseToken,
  requireAdmin,
  optionalAuth
};

