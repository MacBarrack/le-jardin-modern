const { validationResult } = require('express-validator');
const { Enrollment, Program } = require('../models');

class EnrollmentController {
  // Create new enrollment (authenticated users)
  static async createEnrollment(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation errors',
          errors: errors.array()
        });
      }

      const {
        programId,
        childName,
        childAge,
        childDateOfBirth,
        parentName,
        parentEmail,
        parentPhone,
        emergencyContact,
        medicalInfo,
        specialNeeds,
        startDate
      } = req.body;

      // Check if program exists and is available
      const program = await Program.findById(programId);
      if (!program) {
        return res.status(404).json({
          success: false,
          message: 'Program not found'
        });
      }

      if (!program.isAvailable()) {
        return res.status(400).json({
          success: false,
          message: 'Program is not available for enrollment'
        });
      }

      const enrollmentData = {
        userId: req.user.uid,
        programId,
        childName,
        childAge: parseInt(childAge),
        childDateOfBirth: new Date(childDateOfBirth),
        parentName,
        parentEmail,
        parentPhone,
        emergencyContact: emergencyContact || {},
        medicalInfo: medicalInfo || {},
        specialNeeds: specialNeeds || '',
        startDate: new Date(startDate)
      };

      const enrollment = await Enrollment.create(enrollmentData);

      // Increment program enrollment count
      await program.enroll();

      res.status(201).json({
        success: true,
        message: 'Enrollment submitted successfully',
        data: {
          enrollment: enrollment.toObject()
        }
      });

    } catch (error) {
      console.error('Create enrollment error:', error);
      res.status(500).json({
        success: false,
        message: 'Error creating enrollment',
        error: error.message
      });
    }
  }

  // Get user's enrollments (authenticated users)
  static async getMyEnrollments(req, res) {
    try {
      const { limit = 50 } = req.query;
      
      const enrollments = await Enrollment.getByUserId(req.user.uid, parseInt(limit));

      res.json({
        success: true,
        data: {
          enrollments: enrollments.map(enrollment => enrollment.toObject()),
          count: enrollments.length
        }
      });

    } catch (error) {
      console.error('Get my enrollments error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching enrollments',
        error: error.message
      });
    }
  }

  // Get all enrollments (admin only)
  static async getAllEnrollments(req, res) {
    try {
      const { limit = 50, offset = 0, status } = req.query;
      
      const enrollments = await Enrollment.getAll(
        parseInt(limit),
        parseInt(offset),
        status || null
      );

      res.json({
        success: true,
        data: {
          enrollments: enrollments.map(enrollment => enrollment.toObject()),
          count: enrollments.length
        }
      });

    } catch (error) {
      console.error('Get all enrollments error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching enrollments',
        error: error.message
      });
    }
  }

  // Get enrollment by ID (admin or owner)
  static async getEnrollmentById(req, res) {
    try {
      const { id } = req.params;
      
      const enrollment = await Enrollment.findById(id);
      if (!enrollment) {
        return res.status(404).json({
          success: false,
          message: 'Enrollment not found'
        });
      }

      // Check if user owns this enrollment or is admin
      if (enrollment.userId !== req.user.uid && !req.user.isAdmin()) {
        return res.status(403).json({
          success: false,
          message: 'Access denied'
        });
      }

      res.json({
        success: true,
        data: {
          enrollment: enrollment.toObject()
        }
      });

    } catch (error) {
      console.error('Get enrollment by ID error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching enrollment',
        error: error.message
      });
    }
  }

  // Get enrollments by program (admin only)
  static async getEnrollmentsByProgram(req, res) {
    try {
      const { programId } = req.params;
      const { limit = 50 } = req.query;
      
      const enrollments = await Enrollment.getByProgramId(programId, parseInt(limit));

      res.json({
        success: true,
        data: {
          enrollments: enrollments.map(enrollment => enrollment.toObject()),
          count: enrollments.length
        }
      });

    } catch (error) {
      console.error('Get enrollments by program error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching enrollments by program',
        error: error.message
      });
    }
  }

  // Get enrollments by status (admin only)
  static async getEnrollmentsByStatus(req, res) {
    try {
      const { status } = req.params;
      const { limit = 50 } = req.query;
      
      const enrollments = await Enrollment.getByStatus(status, parseInt(limit));

      res.json({
        success: true,
        data: {
          enrollments: enrollments.map(enrollment => enrollment.toObject()),
          count: enrollments.length
        }
      });

    } catch (error) {
      console.error('Get enrollments by status error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching enrollments by status',
        error: error.message
      });
    }
  }

  // Update enrollment (admin or owner for limited fields)
  static async updateEnrollment(req, res) {
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
      const {
        childName,
        childAge,
        parentName,
        parentPhone,
        emergencyContact,
        medicalInfo,
        specialNeeds,
        status,
        notes
      } = req.body;

      // Check if enrollment exists
      const existingEnrollment = await Enrollment.findById(id);
      if (!existingEnrollment) {
        return res.status(404).json({
          success: false,
          message: 'Enrollment not found'
        });
      }

      // Check permissions
      const isOwner = existingEnrollment.userId === req.user.uid;
      const isAdmin = req.user.isAdmin();

      if (!isOwner && !isAdmin) {
        return res.status(403).json({
          success: false,
          message: 'Access denied'
        });
      }

      const updateData = {};

      // Fields that both owner and admin can update
      if (childName) updateData.childName = childName;
      if (childAge) updateData.childAge = parseInt(childAge);
      if (parentName) updateData.parentName = parentName;
      if (parentPhone) updateData.parentPhone = parentPhone;
      if (emergencyContact) updateData.emergencyContact = emergencyContact;
      if (medicalInfo) updateData.medicalInfo = medicalInfo;
      if (specialNeeds !== undefined) updateData.specialNeeds = specialNeeds;

      // Fields that only admin can update
      if (isAdmin) {
        if (status) updateData.status = status;
        if (notes !== undefined) updateData.notes = notes;
      }

      const updatedEnrollment = await Enrollment.update(id, updateData);

      res.json({
        success: true,
        message: 'Enrollment updated successfully',
        data: {
          enrollment: updatedEnrollment.toObject()
        }
      });

    } catch (error) {
      console.error('Update enrollment error:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating enrollment',
        error: error.message
      });
    }
  }

  // Approve enrollment (admin only)
  static async approveEnrollment(req, res) {
    try {
      const { id } = req.params;

      // Check if enrollment exists
      const existingEnrollment = await Enrollment.findById(id);
      if (!existingEnrollment) {
        return res.status(404).json({
          success: false,
          message: 'Enrollment not found'
        });
      }

      const updatedEnrollment = await Enrollment.approve(id, req.user.uid);

      res.json({
        success: true,
        message: 'Enrollment approved successfully',
        data: {
          enrollment: updatedEnrollment.toObject()
        }
      });

    } catch (error) {
      console.error('Approve enrollment error:', error);
      res.status(500).json({
        success: false,
        message: 'Error approving enrollment',
        error: error.message
      });
    }
  }

  // Reject enrollment (admin only)
  static async rejectEnrollment(req, res) {
    try {
      const { id } = req.params;
      const { notes } = req.body;

      // Check if enrollment exists
      const existingEnrollment = await Enrollment.findById(id);
      if (!existingEnrollment) {
        return res.status(404).json({
          success: false,
          message: 'Enrollment not found'
        });
      }

      // Decrement program enrollment count if it was previously approved/active
      if (['approved', 'active'].includes(existingEnrollment.status)) {
        const program = await Program.findById(existingEnrollment.programId);
        if (program) {
          await program.unenroll();
        }
      }

      const updatedEnrollment = await Enrollment.reject(id, notes || '');

      res.json({
        success: true,
        message: 'Enrollment rejected successfully',
        data: {
          enrollment: updatedEnrollment.toObject()
        }
      });

    } catch (error) {
      console.error('Reject enrollment error:', error);
      res.status(500).json({
        success: false,
        message: 'Error rejecting enrollment',
        error: error.message
      });
    }
  }

  // Activate enrollment (admin only)
  static async activateEnrollment(req, res) {
    try {
      const { id } = req.params;

      // Check if enrollment exists
      const existingEnrollment = await Enrollment.findById(id);
      if (!existingEnrollment) {
        return res.status(404).json({
          success: false,
          message: 'Enrollment not found'
        });
      }

      const updatedEnrollment = await Enrollment.activate(id);

      res.json({
        success: true,
        message: 'Enrollment activated successfully',
        data: {
          enrollment: updatedEnrollment.toObject()
        }
      });

    } catch (error) {
      console.error('Activate enrollment error:', error);
      res.status(500).json({
        success: false,
        message: 'Error activating enrollment',
        error: error.message
      });
    }
  }

  // Cancel enrollment (admin or owner)
  static async cancelEnrollment(req, res) {
    try {
      const { id } = req.params;
      const { notes } = req.body;

      // Check if enrollment exists
      const existingEnrollment = await Enrollment.findById(id);
      if (!existingEnrollment) {
        return res.status(404).json({
          success: false,
          message: 'Enrollment not found'
        });
      }

      // Check permissions
      const isOwner = existingEnrollment.userId === req.user.uid;
      const isAdmin = req.user.isAdmin();

      if (!isOwner && !isAdmin) {
        return res.status(403).json({
          success: false,
          message: 'Access denied'
        });
      }

      // Check if enrollment can be cancelled
      if (!existingEnrollment.canBeCancelled()) {
        return res.status(400).json({
          success: false,
          message: 'Enrollment cannot be cancelled in its current status'
        });
      }

      // Decrement program enrollment count if it was previously approved/active
      if (['approved', 'active'].includes(existingEnrollment.status)) {
        const program = await Program.findById(existingEnrollment.programId);
        if (program) {
          await program.unenroll();
        }
      }

      const updatedEnrollment = await Enrollment.cancel(id, notes || '');

      res.json({
        success: true,
        message: 'Enrollment cancelled successfully',
        data: {
          enrollment: updatedEnrollment.toObject()
        }
      });

    } catch (error) {
      console.error('Cancel enrollment error:', error);
      res.status(500).json({
        success: false,
        message: 'Error cancelling enrollment',
        error: error.message
      });
    }
  }

  // Get enrollment statistics (admin only)
  static async getEnrollmentStats(req, res) {
    try {
      const stats = await Enrollment.getStats();

      res.json({
        success: true,
        data: {
          stats
        }
      });

    } catch (error) {
      console.error('Get enrollment stats error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching enrollment statistics',
        error: error.message
      });
    }
  }
}

module.exports = EnrollmentController;

