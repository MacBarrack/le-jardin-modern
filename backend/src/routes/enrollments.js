const express = require('express');
const { EnrollmentController } = require('../../controllers');
const { enrollmentValidation, paramValidation, queryValidation } = require('../../utils/validation');
const { verifyToken, requireAdmin } = require('../../middleware/auth');

const router = express.Router();

// User routes (authenticated)
router.post('/', verifyToken, enrollmentValidation.create, EnrollmentController.createEnrollment);
router.get('/me', verifyToken, EnrollmentController.getMyEnrollments);
router.get('/:id', verifyToken, paramValidation.id, EnrollmentController.getEnrollmentById);
router.put('/:id', verifyToken, enrollmentValidation.update, EnrollmentController.updateEnrollment);
router.put('/:id/cancel', verifyToken, paramValidation.id, EnrollmentController.cancelEnrollment);

// Admin routes
router.get('/', verifyToken, requireAdmin, queryValidation.pagination, EnrollmentController.getAllEnrollments);
router.get('/stats', verifyToken, requireAdmin, EnrollmentController.getEnrollmentStats);
router.get('/program/:programId', verifyToken, requireAdmin, EnrollmentController.getEnrollmentsByProgram);
router.get('/status/:status', verifyToken, requireAdmin, paramValidation.status, EnrollmentController.getEnrollmentsByStatus);
router.put('/:id/approve', verifyToken, requireAdmin, paramValidation.id, EnrollmentController.approveEnrollment);
router.put('/:id/reject', verifyToken, requireAdmin, paramValidation.id, EnrollmentController.rejectEnrollment);
router.put('/:id/activate', verifyToken, requireAdmin, paramValidation.id, EnrollmentController.activateEnrollment);

module.exports = router;

