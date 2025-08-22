const { validationResult } = require('express-validator');
const { User } = require('../models');

class UserController {
  // Get all users (admin only)
  static async getAllUsers(req, res) {
    try {
      const { limit = 50, offset = 0, role } = req.query;
      
      let users;
      if (role) {
        users = await User.getByRole(role, parseInt(limit));
      } else {
        users = await User.getAll(parseInt(limit), parseInt(offset));
      }

      const safeUsers = users.map(user => user.toSafeObject());

      res.json({
        success: true,
        data: {
          users: safeUsers,
          count: safeUsers.length
        }
      });

    } catch (error) {
      console.error('Get all users error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching users',
        error: error.message
      });
    }
  }

  // Get user by ID (admin only)
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      
      const user = await User.findByUid(id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      res.json({
        success: true,
        data: {
          user: user.toSafeObject()
        }
      });

    } catch (error) {
      console.error('Get user by ID error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching user',
        error: error.message
      });
    }
  }

  // Update user (admin only)
  static async updateUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation errors',
          errors: errors.array()
        });
      }

      const { id } = req.params;
      const { firstName, lastName, phone, role, isActive } = req.body;

      // Check if user exists
      const existingUser = await User.findByUid(id);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      // Prevent changing admin role unless current user is admin
      if (role && role !== existingUser.role && !req.user.isAdmin()) {
        return res.status(403).json({
          success: false,
          message: 'Insufficient permissions to change user role'
        });
      }

      const updateData = {};
      if (firstName) updateData.firstName = firstName;
      if (lastName) updateData.lastName = lastName;
      if (phone !== undefined) updateData.phone = phone;
      if (role) updateData.role = role;
      if (isActive !== undefined) updateData.isActive = isActive;

      const updatedUser = await User.update(id, updateData);

      res.json({
        success: true,
        message: 'User updated successfully',
        data: {
          user: updatedUser.toSafeObject()
        }
      });

    } catch (error) {
      console.error('Update user error:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating user',
        error: error.message
      });
    }
  }

  // Deactivate user (admin only)
  static async deactivateUser(req, res) {
    try {
      const { id } = req.params;

      // Check if user exists
      const existingUser = await User.findByUid(id);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      // Prevent deactivating admin users
      if (existingUser.isAdmin()) {
        return res.status(403).json({
          success: false,
          message: 'Cannot deactivate admin users'
        });
      }

      await User.delete(id);

      res.json({
        success: true,
        message: 'User deactivated successfully'
      });

    } catch (error) {
      console.error('Deactivate user error:', error);
      res.status(500).json({
        success: false,
        message: 'Error deactivating user',
        error: error.message
      });
    }
  }

  // Get current user's own profile
  static async getMyProfile(req, res) {
    try {
      const user = await User.findByUid(req.user.uid);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      res.json({
        success: true,
        data: {
          user: user.toSafeObject()
        }
      });

    } catch (error) {
      console.error('Get my profile error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching profile',
        error: error.message
      });
    }
  }

  // Update current user's own profile
  static async updateMyProfile(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation errors',
          errors: errors.array()
        });
      }

      const { firstName, lastName, phone } = req.body;
      const updateData = {};

      if (firstName) updateData.firstName = firstName;
      if (lastName) updateData.lastName = lastName;
      if (phone !== undefined) updateData.phone = phone;

      const updatedUser = await User.update(req.user.uid, updateData);

      res.json({
        success: true,
        message: 'Profile updated successfully',
        data: {
          user: updatedUser.toSafeObject()
        }
      });

    } catch (error) {
      console.error('Update my profile error:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating profile',
        error: error.message
      });
    }
  }

  // Get user statistics (admin only)
  static async getUserStats(req, res) {
    try {
      const totalUsers = await User.getAll(1000); // Get a large number to count
      const adminUsers = await User.getByRole('admin');
      const regularUsers = await User.getByRole('user');

      const stats = {
        total: totalUsers.length,
        admins: adminUsers.length,
        users: regularUsers.length,
        active: totalUsers.filter(user => user.isActiveUser()).length,
        inactive: totalUsers.filter(user => !user.isActiveUser()).length
      };

      res.json({
        success: true,
        data: {
          stats
        }
      });

    } catch (error) {
      console.error('Get user stats error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching user statistics',
        error: error.message
      });
    }
  }
}

module.exports = UserController;

