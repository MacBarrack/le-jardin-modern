const express = require('express');
const { AdminController } = require('../../controllers');
const { verifyToken, requireAdmin } = require('../../middleware/auth');

const router = express.Router();

// All routes require admin access
router.use(verifyToken, requireAdmin);

// Dashboard and statistics
router.get('/dashboard', AdminController.getDashboardStats);
router.get('/health', AdminController.getSystemHealth);
router.get('/activities', AdminController.getActivityLogs);
router.get('/settings', AdminController.getSystemSettings);

// Data export and backup
router.get('/export', AdminController.exportData);
router.get('/backup', AdminController.backupDatabase);

module.exports = router;

