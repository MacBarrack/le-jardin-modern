const express = require('express');
const { AuthController } = require('../../controllers');
const { userValidation } = require('../../utils/validation');
const { verifyToken } = require('../../middleware/auth');

const router = express.Router();

// Register new user
router.post('/register', userValidation.register, AuthController.register);

// Login user
router.post('/login', userValidation.login, AuthController.login);

// Get current user profile
router.get('/profile', verifyToken, AuthController.getProfile);

// Update user profile
router.put('/profile', verifyToken, userValidation.updateProfile, AuthController.updateProfile);

// Logout
router.post('/logout', verifyToken, AuthController.logout);

// Refresh token
router.post('/refresh', verifyToken, AuthController.refreshToken);

module.exports = router;

