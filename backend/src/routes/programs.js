const express = require('express');
const { ProgramController } = require('../../controllers');
const { programValidation, paramValidation, queryValidation } = require('../../utils/validation');
const { verifyToken, requireAdmin } = require('../../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', ProgramController.getAllPrograms);
router.get('/:id', paramValidation.id, ProgramController.getProgramById);
router.get('/age-range/:ageRange', paramValidation.ageRange, ProgramController.getProgramsByAgeRange);

// Admin routes
router.post('/', verifyToken, requireAdmin, programValidation.create, ProgramController.createProgram);
router.put('/:id', verifyToken, requireAdmin, programValidation.update, ProgramController.updateProgram);
router.delete('/:id', verifyToken, requireAdmin, paramValidation.id, ProgramController.deleteProgram);
router.get('/:id/stats', verifyToken, requireAdmin, paramValidation.id, ProgramController.getProgramStats);
router.get('/admin/stats', verifyToken, requireAdmin, ProgramController.getAllProgramStats);

module.exports = router;

