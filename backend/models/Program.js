const { db } = require('../config/firebase');

class Program {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.ageRange = data.ageRange;
    this.capacity = data.capacity || 0;
    this.currentEnrollment = data.currentEnrollment || 0;
    this.price = data.price || 0;
    this.schedule = data.schedule || {};
    this.features = data.features || [];
    this.imageUrl = data.imageUrl || '';
    this.isActive = data.isActive !== undefined ? data.isActive : true;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  // Create a new program
  static async create(programData) {
    try {
      const programRef = db.collection('programs').doc();
      const program = new Program({
        ...programData,
        id: programRef.id
      });
      await programRef.set(program.toObject());
      return program;
    } catch (error) {
      throw new Error(`Error creating program: ${error.message}`);
    }
  }

  // Find program by ID
  static async findById(id) {
    try {
      const programDoc = await db.collection('programs').doc(id).get();
      if (!programDoc.exists) {
        return null;
      }
      return new Program({ id, ...programDoc.data() });
    } catch (error) {
      throw new Error(`Error finding program by ID: ${error.message}`);
    }
  }

  // Get all active programs
  static async getAll(includeInactive = false) {
    try {
      const programsRef = db.collection('programs');
      let query = programsRef.orderBy('createdAt', 'desc');
      
      if (!includeInactive) {
        query = query.where('isActive', '==', true);
      }
      
      const snapshot = await query.get();
      const programs = [];
      
      snapshot.forEach(doc => {
        programs.push(new Program({ id: doc.id, ...doc.data() }));
      });
      
      return programs;
    } catch (error) {
      throw new Error(`Error getting all programs: ${error.message}`);
    }
  }

  // Get programs by age range
  static async getByAgeRange(ageRange) {
    try {
      const programsRef = db.collection('programs');
      const snapshot = await programsRef
        .where('ageRange', '==', ageRange)
        .where('isActive', '==', true)
        .orderBy('createdAt', 'desc')
        .get();
      
      const programs = [];
      snapshot.forEach(doc => {
        programs.push(new Program({ id: doc.id, ...doc.data() }));
      });
      
      return programs;
    } catch (error) {
      throw new Error(`Error getting programs by age range: ${error.message}`);
    }
  }

  // Update program
  static async update(id, updateData) {
    try {
      const programRef = db.collection('programs').doc(id);
      const updatePayload = {
        ...updateData,
        updatedAt: new Date()
      };
      await programRef.update(updatePayload);
      return await Program.findById(id);
    } catch (error) {
      throw new Error(`Error updating program: ${error.message}`);
    }
  }

  // Delete program (soft delete)
  static async delete(id) {
    try {
      const programRef = db.collection('programs').doc(id);
      await programRef.update({
        isActive: false,
        updatedAt: new Date()
      });
      return true;
    } catch (error) {
      throw new Error(`Error deleting program: ${error.message}`);
    }
  }

  // Check availability
  isAvailable() {
    return this.isActive && this.currentEnrollment < this.capacity;
  }

  // Get available spots
  getAvailableSpots() {
    return Math.max(0, this.capacity - this.currentEnrollment);
  }

  // Enroll a child (increment enrollment)
  async enroll() {
    try {
      if (!this.isAvailable()) {
        throw new Error('Program is not available for enrollment');
      }
      
      const newEnrollment = this.currentEnrollment + 1;
      await Program.update(this.id, { currentEnrollment: newEnrollment });
      this.currentEnrollment = newEnrollment;
      return true;
    } catch (error) {
      throw new Error(`Error enrolling in program: ${error.message}`);
    }
  }

  // Unenroll a child (decrement enrollment)
  async unenroll() {
    try {
      if (this.currentEnrollment <= 0) {
        throw new Error('No enrollments to remove');
      }
      
      const newEnrollment = this.currentEnrollment - 1;
      await Program.update(this.id, { currentEnrollment: newEnrollment });
      this.currentEnrollment = newEnrollment;
      return true;
    } catch (error) {
      throw new Error(`Error unenrolling from program: ${error.message}`);
    }
  }

  // Convert to plain object
  toObject() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      ageRange: this.ageRange,
      capacity: this.capacity,
      currentEnrollment: this.currentEnrollment,
      price: this.price,
      schedule: this.schedule,
      features: this.features,
      imageUrl: this.imageUrl,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  // Convert to public object (for frontend)
  toPublicObject() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      ageRange: this.ageRange,
      capacity: this.capacity,
      currentEnrollment: this.currentEnrollment,
      availableSpots: this.getAvailableSpots(),
      price: this.price,
      schedule: this.schedule,
      features: this.features,
      imageUrl: this.imageUrl,
      isAvailable: this.isAvailable()
    };
  }
}

module.exports = Program;

