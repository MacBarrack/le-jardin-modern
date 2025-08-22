const { db } = require('../config/firebase');

class Contact {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.phone = data.phone || '';
    this.subject = data.subject || '';
    this.message = data.message;
    this.status = data.status || 'new'; // new, read, replied, closed
    this.priority = data.priority || 'normal'; // low, normal, high, urgent
    this.assignedTo = data.assignedTo || null;
    this.response = data.response || '';
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
    this.respondedAt = data.respondedAt || null;
  }

  // Create a new contact submission
  static async create(contactData) {
    try {
      const contactRef = db.collection('contacts').doc();
      const contact = new Contact({
        ...contactData,
        id: contactRef.id
      });
      await contactRef.set(contact.toObject());
      return contact;
    } catch (error) {
      throw new Error(`Error creating contact: ${error.message}`);
    }
  }

  // Find contact by ID
  static async findById(id) {
    try {
      const contactDoc = await db.collection('contacts').doc(id).get();
      if (!contactDoc.exists) {
        return null;
      }
      return new Contact({ id, ...contactDoc.data() });
    } catch (error) {
      throw new Error(`Error finding contact by ID: ${error.message}`);
    }
  }

  // Get all contacts with pagination
  static async getAll(limit = 50, offset = 0, status = null) {
    try {
      const contactsRef = db.collection('contacts');
      let query = contactsRef.orderBy('createdAt', 'desc');
      
      if (status) {
        query = query.where('status', '==', status);
      }
      
      if (offset > 0) {
        const offsetDoc = await contactsRef.orderBy('createdAt', 'desc').limit(offset).get();
        if (!offsetDoc.empty) {
          const lastDoc = offsetDoc.docs[offsetDoc.docs.length - 1];
          query = query.startAfter(lastDoc);
        }
      }
      
      const snapshot = await query.limit(limit).get();
      const contacts = [];
      
      snapshot.forEach(doc => {
        contacts.push(new Contact({ id: doc.id, ...doc.data() }));
      });
      
      return contacts;
    } catch (error) {
      throw new Error(`Error getting all contacts: ${error.message}`);
    }
  }

  // Get contacts by status
  static async getByStatus(status, limit = 50) {
    try {
      const contactsRef = db.collection('contacts');
      const snapshot = await contactsRef
        .where('status', '==', status)
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();
      
      const contacts = [];
      snapshot.forEach(doc => {
        contacts.push(new Contact({ id: doc.id, ...doc.data() }));
      });
      
      return contacts;
    } catch (error) {
      throw new Error(`Error getting contacts by status: ${error.message}`);
    }
  }

  // Get contacts by priority
  static async getByPriority(priority, limit = 50) {
    try {
      const contactsRef = db.collection('contacts');
      const snapshot = await contactsRef
        .where('priority', '==', priority)
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();
      
      const contacts = [];
      snapshot.forEach(doc => {
        contacts.push(new Contact({ id: doc.id, ...doc.data() }));
      });
      
      return contacts;
    } catch (error) {
      throw new Error(`Error getting contacts by priority: ${error.message}`);
    }
  }

  // Update contact
  static async update(id, updateData) {
    try {
      const contactRef = db.collection('contacts').doc(id);
      const updatePayload = {
        ...updateData,
        updatedAt: new Date()
      };
      
      // If status is being updated to 'replied', set respondedAt
      if (updateData.status === 'replied' && updateData.response) {
        updatePayload.respondedAt = new Date();
      }
      
      await contactRef.update(updatePayload);
      return await Contact.findById(id);
    } catch (error) {
      throw new Error(`Error updating contact: ${error.message}`);
    }
  }

  // Mark as read
  static async markAsRead(id, userId = null) {
    try {
      const updateData = { status: 'read' };
      if (userId) {
        updateData.assignedTo = userId;
      }
      return await Contact.update(id, updateData);
    } catch (error) {
      throw new Error(`Error marking contact as read: ${error.message}`);
    }
  }

  // Reply to contact
  static async reply(id, response, userId = null) {
    try {
      const updateData = {
        status: 'replied',
        response: response,
        respondedAt: new Date()
      };
      if (userId) {
        updateData.assignedTo = userId;
      }
      return await Contact.update(id, updateData);
    } catch (error) {
      throw new Error(`Error replying to contact: ${error.message}`);
    }
  }

  // Close contact
  static async close(id) {
    try {
      return await Contact.update(id, { status: 'closed' });
    } catch (error) {
      throw new Error(`Error closing contact: ${error.message}`);
    }
  }

  // Delete contact
  static async delete(id) {
    try {
      const contactRef = db.collection('contacts').doc(id);
      await contactRef.delete();
      return true;
    } catch (error) {
      throw new Error(`Error deleting contact: ${error.message}`);
    }
  }

  // Get contact statistics
  static async getStats() {
    try {
      const contactsRef = db.collection('contacts');
      
      // Get total count
      const totalSnapshot = await contactsRef.get();
      const total = totalSnapshot.size;
      
      // Get counts by status
      const newSnapshot = await contactsRef.where('status', '==', 'new').get();
      const readSnapshot = await contactsRef.where('status', '==', 'read').get();
      const repliedSnapshot = await contactsRef.where('status', '==', 'replied').get();
      const closedSnapshot = await contactsRef.where('status', '==', 'closed').get();
      
      return {
        total,
        new: newSnapshot.size,
        read: readSnapshot.size,
        replied: repliedSnapshot.size,
        closed: closedSnapshot.size
      };
    } catch (error) {
      throw new Error(`Error getting contact stats: ${error.message}`);
    }
  }

  // Convert to plain object
  toObject() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      subject: this.subject,
      message: this.message,
      status: this.status,
      priority: this.priority,
      assignedTo: this.assignedTo,
      response: this.response,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      respondedAt: this.respondedAt
    };
  }

  // Get full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  // Check if contact is new
  isNew() {
    return this.status === 'new';
  }

  // Check if contact has been responded to
  hasResponse() {
    return this.status === 'replied' && this.response && this.response.trim().length > 0;
  }
}

module.exports = Contact;

