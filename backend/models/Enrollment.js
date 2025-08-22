const { db } = require('../config/firebase');

class Enrollment {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.programId = data.programId;
    this.childName = data.childName;
    this.childAge = data.childAge;
    this.childDateOfBirth = data.childDateOfBirth;
    this.parentName = data.parentName;
    this.parentEmail = data.parentEmail;
    this.parentPhone = data.parentPhone;
    this.emergencyContact = data.emergencyContact || {};
    this.medicalInfo = data.medicalInfo || {};
    this.specialNeeds = data.specialNeeds || '';
    this.status = data.status || 'pending'; // pending, approved, rejected, active, completed, cancelled
    this.startDate = data.startDate;
    this.endDate = data.endDate || null;
    this.notes = data.notes || '';
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
    this.approvedAt = data.approvedAt || null;
    this.approvedBy = data.approvedBy || null;
  }

  // Create a new enrollment
  static async create(enrollmentData) {
    try {
      const enrollmentRef = db.collection('enrollments').doc();
      const enrollment = new Enrollment({
        ...enrollmentData,
        id: enrollmentRef.id
      });
      await enrollmentRef.set(enrollment.toObject());
      return enrollment;
    } catch (error) {
      throw new Error(`Error creating enrollment: ${error.message}`);
    }
  }

  // Find enrollment by ID
  static async findById(id) {
    try {
      const enrollmentDoc = await db.collection('enrollments').doc(id).get();
      if (!enrollmentDoc.exists) {
        return null;
      }
      return new Enrollment({ id, ...enrollmentDoc.data() });
    } catch (error) {
      throw new Error(`Error finding enrollment by ID: ${error.message}`);
    }
  }

  // Get enrollments by user ID
  static async getByUserId(userId, limit = 50) {
    try {
      const enrollmentsRef = db.collection('enrollments');
      const snapshot = await enrollmentsRef
        .where('userId', '==', userId)
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();
      
      const enrollments = [];
      snapshot.forEach(doc => {
        enrollments.push(new Enrollment({ id: doc.id, ...doc.data() }));
      });
      
      return enrollments;
    } catch (error) {
      throw new Error(`Error getting enrollments by user ID: ${error.message}`);
    }
  }

  // Get enrollments by program ID
  static async getByProgramId(programId, limit = 50) {
    try {
      const enrollmentsRef = db.collection('enrollments');
      const snapshot = await enrollmentsRef
        .where('programId', '==', programId)
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();
      
      const enrollments = [];
      snapshot.forEach(doc => {
        enrollments.push(new Enrollment({ id: doc.id, ...doc.data() }));
      });
      
      return enrollments;
    } catch (error) {
      throw new Error(`Error getting enrollments by program ID: ${error.message}`);
    }
  }

  // Get enrollments by status
  static async getByStatus(status, limit = 50) {
    try {
      const enrollmentsRef = db.collection('enrollments');
      const snapshot = await enrollmentsRef
        .where('status', '==', status)
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();
      
      const enrollments = [];
      snapshot.forEach(doc => {
        enrollments.push(new Enrollment({ id: doc.id, ...doc.data() }));
      });
      
      return enrollments;
    } catch (error) {
      throw new Error(`Error getting enrollments by status: ${error.message}`);
    }
  }

  // Get all enrollments with pagination
  static async getAll(limit = 50, offset = 0, status = null) {
    try {
      const enrollmentsRef = db.collection('enrollments');
      let query = enrollmentsRef.orderBy('createdAt', 'desc');
      
      if (status) {
        query = query.where('status', '==', status);
      }
      
      if (offset > 0) {
        const offsetDoc = await enrollmentsRef.orderBy('createdAt', 'desc').limit(offset).get();
        if (!offsetDoc.empty) {
          const lastDoc = offsetDoc.docs[offsetDoc.docs.length - 1];
          query = query.startAfter(lastDoc);
        }
      }
      
      const snapshot = await query.limit(limit).get();
      const enrollments = [];
      
      snapshot.forEach(doc => {
        enrollments.push(new Enrollment({ id: doc.id, ...doc.data() }));
      });
      
      return enrollments;
    } catch (error) {
      throw new Error(`Error getting all enrollments: ${error.message}`);
    }
  }

  // Update enrollment
  static async update(id, updateData) {
    try {
      const enrollmentRef = db.collection('enrollments').doc(id);
      const updatePayload = {
        ...updateData,
        updatedAt: new Date()
      };
      
      // If status is being updated to 'approved', set approvedAt
      if (updateData.status === 'approved') {
        updatePayload.approvedAt = new Date();
      }
      
      await enrollmentRef.update(updatePayload);
      return await Enrollment.findById(id);
    } catch (error) {
      throw new Error(`Error updating enrollment: ${error.message}`);
    }
  }

  // Approve enrollment
  static async approve(id, approvedBy) {
    try {
      const updateData = {
        status: 'approved',
        approvedAt: new Date(),
        approvedBy: approvedBy
      };
      return await Enrollment.update(id, updateData);
    } catch (error) {
      throw new Error(`Error approving enrollment: ${error.message}`);
    }
  }

  // Reject enrollment
  static async reject(id, notes = '') {
    try {
      const updateData = {
        status: 'rejected',
        notes: notes
      };
      return await Enrollment.update(id, updateData);
    } catch (error) {
      throw new Error(`Error rejecting enrollment: ${error.message}`);
    }
  }

  // Activate enrollment (start the program)
  static async activate(id) {
    try {
      const updateData = {
        status: 'active'
      };
      return await Enrollment.update(id, updateData);
    } catch (error) {
      throw new Error(`Error activating enrollment: ${error.message}`);
    }
  }

  // Complete enrollment
  static async complete(id) {
    try {
      const updateData = {
        status: 'completed',
        endDate: new Date()
      };
      return await Enrollment.update(id, updateData);
    } catch (error) {
      throw new Error(`Error completing enrollment: ${error.message}`);
    }
  }

  // Cancel enrollment
  static async cancel(id, notes = '') {
    try {
      const updateData = {
        status: 'cancelled',
        notes: notes,
        endDate: new Date()
      };
      return await Enrollment.update(id, updateData);
    } catch (error) {
      throw new Error(`Error cancelling enrollment: ${error.message}`);
    }
  }

  // Delete enrollment
  static async delete(id) {
    try {
      const enrollmentRef = db.collection('enrollments').doc(id);
      await enrollmentRef.delete();
      return true;
    } catch (error) {
      throw new Error(`Error deleting enrollment: ${error.message}`);
    }
  }

  // Get enrollment statistics
  static async getStats() {
    try {
      const enrollmentsRef = db.collection('enrollments');
      
      // Get total count
      const totalSnapshot = await enrollmentsRef.get();
      const total = totalSnapshot.size;
      
      // Get counts by status
      const pendingSnapshot = await enrollmentsRef.where('status', '==', 'pending').get();
      const approvedSnapshot = await enrollmentsRef.where('status', '==', 'approved').get();
      const activeSnapshot = await enrollmentsRef.where('status', '==', 'active').get();
      const completedSnapshot = await enrollmentsRef.where('status', '==', 'completed').get();
      const cancelledSnapshot = await enrollmentsRef.where('status', '==', 'cancelled').get();
      
      return {
        total,
        pending: pendingSnapshot.size,
        approved: approvedSnapshot.size,
        active: activeSnapshot.size,
        completed: completedSnapshot.size,
        cancelled: cancelledSnapshot.size
      };
    } catch (error) {
      throw new Error(`Error getting enrollment stats: ${error.message}`);
    }
  }

  // Convert to plain object
  toObject() {
    return {
      id: this.id,
      userId: this.userId,
      programId: this.programId,
      childName: this.childName,
      childAge: this.childAge,
      childDateOfBirth: this.childDateOfBirth,
      parentName: this.parentName,
      parentEmail: this.parentEmail,
      parentPhone: this.parentPhone,
      emergencyContact: this.emergencyContact,
      medicalInfo: this.medicalInfo,
      specialNeeds: this.specialNeeds,
      status: this.status,
      startDate: this.startDate,
      endDate: this.endDate,
      notes: this.notes,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      approvedAt: this.approvedAt,
      approvedBy: this.approvedBy
    };
  }

  // Check if enrollment is active
  isActive() {
    return this.status === 'active';
  }

  // Check if enrollment is pending
  isPending() {
    return this.status === 'pending';
  }

  // Check if enrollment is approved
  isApproved() {
    return this.status === 'approved';
  }

  // Check if enrollment can be cancelled
  canBeCancelled() {
    return ['pending', 'approved', 'active'].includes(this.status);
  }
}

module.exports = Enrollment;

