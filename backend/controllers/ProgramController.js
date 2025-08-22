const { validationResult } = require('express-validator');
const { Program } = require('../models');

class ProgramController {
  // Get all programs (public)
  static async getAllPrograms(req, res) {
    try {
      const { includeInactive = false } = req.query;
      
      const programs = await Program.getAll(includeInactive === 'true');
      const publicPrograms = programs.map(program => program.toPublicObject());

      res.json({
        success: true,
        data: {
          programs: publicPrograms,
          count: publicPrograms.length
        }
      });

    } catch (error) {
      console.error('Get all programs error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching programs',
        error: error.message
      });
    }
  }

  // Get program by ID (public)
  static async getProgramById(req, res) {
    try {
      const { id } = req.params;
      
      const program = await Program.findById(id);
      if (!program) {
        return res.status(404).json({
          success: false,
          message: 'Program not found'
        });
      }

      res.json({
        success: true,
        data: {
          program: program.toPublicObject()
        }
      });

    } catch (error) {
      console.error('Get program by ID error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching program',
        error: error.message
      });
    }
  }

  // Get programs by age range (public)
  static async getProgramsByAgeRange(req, res) {
    try {
      const { ageRange } = req.params;
      
      const programs = await Program.getByAgeRange(ageRange);
      const publicPrograms = programs.map(program => program.toPublicObject());

      res.json({
        success: true,
        data: {
          programs: publicPrograms,
          count: publicPrograms.length
        }
      });

    } catch (error) {
      console.error('Get programs by age range error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching programs by age range',
        error: error.message
      });
    }
  }

  // Create new program (admin only)
  static async createProgram(req, res) {
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
        title,
        description,
        ageRange,
        capacity,
        price,
        schedule,
        features,
        imageUrl
      } = req.body;

      const programData = {
        title,
        description,
        ageRange,
        capacity: parseInt(capacity) || 0,
        price: parseFloat(price) || 0,
        schedule: schedule || {},
        features: features || [],
        imageUrl: imageUrl || ''
      };

      const program = await Program.create(programData);

      res.status(201).json({
        success: true,
        message: 'Program created successfully',
        data: {
          program: program.toPublicObject()
        }
      });

    } catch (error) {
      console.error('Create program error:', error);
      res.status(500).json({
        success: false,
        message: 'Error creating program',
        error: error.message
      });
    }
  }

  // Update program (admin only)
  static async updateProgram(req, res) {
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
        title,
        description,
        ageRange,
        capacity,
        price,
        schedule,
        features,
        imageUrl,
        isActive
      } = req.body;

      // Check if program exists
      const existingProgram = await Program.findById(id);
      if (!existingProgram) {
        return res.status(404).json({
          success: false,
          message: 'Program not found'
        });
      }

      const updateData = {};
      if (title) updateData.title = title;
      if (description) updateData.description = description;
      if (ageRange) updateData.ageRange = ageRange;
      if (capacity !== undefined) updateData.capacity = parseInt(capacity);
      if (price !== undefined) updateData.price = parseFloat(price);
      if (schedule) updateData.schedule = schedule;
      if (features) updateData.features = features;
      if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
      if (isActive !== undefined) updateData.isActive = isActive;

      const updatedProgram = await Program.update(id, updateData);

      res.json({
        success: true,
        message: 'Program updated successfully',
        data: {
          program: updatedProgram.toPublicObject()
        }
      });

    } catch (error) {
      console.error('Update program error:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating program',
        error: error.message
      });
    }
  }

  // Delete program (admin only)
  static async deleteProgram(req, res) {
    try {
      const { id } = req.params;

      // Check if program exists
      const existingProgram = await Program.findById(id);
      if (!existingProgram) {
        return res.status(404).json({
          success: false,
          message: 'Program not found'
        });
      }

      await Program.delete(id);

      res.json({
        success: true,
        message: 'Program deleted successfully'
      });

    } catch (error) {
      console.error('Delete program error:', error);
      res.status(500).json({
        success: false,
        message: 'Error deleting program',
        error: error.message
      });
    }
  }

  // Get program enrollment stats (admin only)
  static async getProgramStats(req, res) {
    try {
      const { id } = req.params;

      const program = await Program.findById(id);
      if (!program) {
        return res.status(404).json({
          success: false,
          message: 'Program not found'
        });
      }

      const stats = {
        id: program.id,
        title: program.title,
        capacity: program.capacity,
        currentEnrollment: program.currentEnrollment,
        availableSpots: program.getAvailableSpots(),
        isAvailable: program.isAvailable(),
        enrollmentRate: program.capacity > 0 ? (program.currentEnrollment / program.capacity * 100).toFixed(2) : 0
      };

      res.json({
        success: true,
        data: {
          stats
        }
      });

    } catch (error) {
      console.error('Get program stats error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching program statistics',
        error: error.message
      });
    }
  }

  // Get all program statistics (admin only)
  static async getAllProgramStats(req, res) {
    try {
      const programs = await Program.getAll(true); // Include inactive programs
      
      const stats = programs.map(program => ({
        id: program.id,
        title: program.title,
        capacity: program.capacity,
        currentEnrollment: program.currentEnrollment,
        availableSpots: program.getAvailableSpots(),
        isAvailable: program.isAvailable(),
        isActive: program.isActive,
        enrollmentRate: program.capacity > 0 ? (program.currentEnrollment / program.capacity * 100).toFixed(2) : 0
      }));

      const summary = {
        totalPrograms: programs.length,
        activePrograms: programs.filter(p => p.isActive).length,
        totalCapacity: programs.reduce((sum, p) => sum + p.capacity, 0),
        totalEnrollment: programs.reduce((sum, p) => sum + p.currentEnrollment, 0),
        totalAvailableSpots: programs.reduce((sum, p) => sum + p.getAvailableSpots(), 0)
      };

      res.json({
        success: true,
        data: {
          summary,
          programs: stats
        }
      });

    } catch (error) {
      console.error('Get all program stats error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching program statistics',
        error: error.message
      });
    }
  }
}

module.exports = ProgramController;

