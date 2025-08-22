const { db } = require('../config/firebase');

class User {
  constructor(data) {
    this.uid = data.uid;
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.phone = data.phone || '';
    this.role = data.role || 'user';
    this.isActive = data.isActive !== undefined ? data.isActive : true;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  // Create a new user
  static async create(userData) {
    try {
      const user = new User(userData);
      const userRef = db.collection('users').doc(user.uid);
      await userRef.set(user.toObject());
      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  // Find user by UID
  static async findByUid(uid) {
    try {
      const userDoc = await db.collection('users').doc(uid).get();
      if (!userDoc.exists) {
        return null;
      }
      return new User(userDoc.data());
    } catch (error) {
      throw new Error(`Error finding user by UID: ${error.message}`);
    }
  }

  // Find user by email
  static async findByEmail(email) {
    try {
      const usersRef = db.collection('users');
      const snapshot = await usersRef.where('email', '==', email).get();
      
      if (snapshot.empty) {
        return null;
      }
      
      const userDoc = snapshot.docs[0];
      return new User(userDoc.data());
    } catch (error) {
      throw new Error(`Error finding user by email: ${error.message}`);
    }
  }

  // Update user
  static async update(uid, updateData) {
    try {
      const userRef = db.collection('users').doc(uid);
      const updatePayload = {
        ...updateData,
        updatedAt: new Date()
      };
      await userRef.update(updatePayload);
      return await User.findByUid(uid);
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  // Delete user (soft delete by setting isActive to false)
  static async delete(uid) {
    try {
      const userRef = db.collection('users').doc(uid);
      await userRef.update({
        isActive: false,
        updatedAt: new Date()
      });
      return true;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }

  // Get all users (admin function)
  static async getAll(limit = 50, offset = 0) {
    try {
      const usersRef = db.collection('users');
      let query = usersRef.orderBy('createdAt', 'desc');
      
      if (offset > 0) {
        const offsetDoc = await usersRef.orderBy('createdAt', 'desc').limit(offset).get();
        if (!offsetDoc.empty) {
          const lastDoc = offsetDoc.docs[offsetDoc.docs.length - 1];
          query = query.startAfter(lastDoc);
        }
      }
      
      const snapshot = await query.limit(limit).get();
      const users = [];
      
      snapshot.forEach(doc => {
        users.push(new User(doc.data()));
      });
      
      return users;
    } catch (error) {
      throw new Error(`Error getting all users: ${error.message}`);
    }
  }

  // Get users by role
  static async getByRole(role, limit = 50) {
    try {
      const usersRef = db.collection('users');
      const snapshot = await usersRef
        .where('role', '==', role)
        .where('isActive', '==', true)
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();
      
      const users = [];
      snapshot.forEach(doc => {
        users.push(new User(doc.data()));
      });
      
      return users;
    } catch (error) {
      throw new Error(`Error getting users by role: ${error.message}`);
    }
  }

  // Convert to plain object
  toObject() {
    return {
      uid: this.uid,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      role: this.role,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  // Convert to safe object (without sensitive data)
  toSafeObject() {
    return {
      uid: this.uid,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      role: this.role,
      createdAt: this.createdAt
    };
  }

  // Get full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  // Check if user is admin
  isAdmin() {
    return this.role === 'admin';
  }

  // Check if user is active
  isActiveUser() {
    return this.isActive === true;
  }
}

module.exports = User;

