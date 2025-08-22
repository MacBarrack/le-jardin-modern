const express = require('express');
const { ContactController } = require('../../controllers');
const { contactValidation, paramValidation, queryValidation } = require('../../utils/validation');
const { verifyToken, requireAdmin } = require('../../middleware/auth');

const router = express.Router();

// Public routes
router.post('/', contactValidation.submit, ContactController.submitContact);

// Admin routes
router.get('/', verifyToken, requireAdmin, queryValidation.pagination, ContactController.getAllContacts);
router.get('/stats', verifyToken, requireAdmin, ContactController.getContactStats);
router.get('/status/:status', verifyToken, requireAdmin, paramValidation.status, ContactController.getContactsByStatus);
router.get('/priority/:priority', verifyToken, requireAdmin, ContactController.getContactsByPriority);
router.get('/:id', verifyToken, requireAdmin, paramValidation.id, ContactController.getContactById);
router.put('/:id', verifyToken, requireAdmin, contactValidation.update, ContactController.updateContact);
router.put('/:id/read', verifyToken, requireAdmin, paramValidation.id, ContactController.markAsRead);
router.post('/:id/reply', verifyToken, requireAdmin, contactValidation.reply, ContactController.replyToContact);
router.put('/:id/close', verifyToken, requireAdmin, paramValidation.id, ContactController.closeContact);
router.delete('/:id', verifyToken, requireAdmin, paramValidation.id, ContactController.deleteContact);

module.exports = router;
