const express = require('express');
const { UserController } = require('../../controllers');
const { userValidation, paramValidation, queryValidation } = require('../../utils/validation');
const { verifyToken, requireAdmin } = require('../../middleware/auth');

const router = express.Router();

// Get current user's profile
router.get('/me', verifyToken, UserController.getMyProfile);

// Update current user's profile
router.put('/me', verifyToken, userValidation.updateProfile, UserController.updateMyProfile);

// Admin routes
router.get('/', verifyToken, requireAdmin, queryValidation.pagination, UserController.getAllUsers);
router.get('/stats', verifyToken, requireAdmin, UserController.getUserStats);
router.get('/:id', verifyToken, requireAdmin, paramValidation.id, UserController.getUserById);
router.put('/:id', verifyToken, requireAdmin, userValidation.updateUser, UserController.updateUser);
router.delete('/:id', verifyToken, requireAdmin, paramValidation.id, UserController.deactivateUser);

module.exports = router;

