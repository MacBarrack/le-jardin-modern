const { validationResult } = require('express-validator');
const { Contact } = require('../models');

class ContactController {
  // Submit contact form (public)
  static async submitContact(req, res) {
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
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
        priority
      } = req.body;

      const contactData = {
        firstName,
        lastName,
        email,
        phone: phone || '',
        subject: subject || '',
        message,
        priority: priority || 'normal'
      };

      const contact = await Contact.create(contactData);

      res.status(201).json({
        success: true,
        message: 'Contact form submitted successfully',
        data: {
          contact: {
            id: contact.id,
            firstName: contact.firstName,
            lastName: contact.lastName,
            email: contact.email,
            subject: contact.subject,
            createdAt: contact.createdAt
          }
        }
      });

    } catch (error) {
      console.error('Submit contact error:', error);
      res.status(500).json({
        success: false,
        message: 'Error submitting contact form',
        error: error.message
      });
    }
  }

  // Get all contacts (admin only)
  static async getAllContacts(req, res) {
    try {
      const { limit = 50, offset = 0, status } = req.query;
      
      const contacts = await Contact.getAll(
        parseInt(limit),
        parseInt(offset),
        status || null
      );

      res.json({
        success: true,
        data: {
          contacts: contacts.map(contact => contact.toObject()),
          count: contacts.length
        }
      });

    } catch (error) {
      console.error('Get all contacts error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching contacts',
        error: error.message
      });
    }
  }

  // Get contact by ID (admin only)
  static async getContactById(req, res) {
    try {
      const { id } = req.params;
      
      const contact = await Contact.findById(id);
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      res.json({
        success: true,
        data: {
          contact: contact.toObject()
        }
      });

    } catch (error) {
      console.error('Get contact by ID error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching contact',
        error: error.message
      });
    }
  }

  // Get contacts by status (admin only)
  static async getContactsByStatus(req, res) {
    try {
      const { status } = req.params;
      const { limit = 50 } = req.query;
      
      const contacts = await Contact.getByStatus(status, parseInt(limit));

      res.json({
        success: true,
        data: {
          contacts: contacts.map(contact => contact.toObject()),
          count: contacts.length
        }
      });

    } catch (error) {
      console.error('Get contacts by status error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching contacts by status',
        error: error.message
      });
    }
  }

  // Get contacts by priority (admin only)
  static async getContactsByPriority(req, res) {
    try {
      const { priority } = req.params;
      const { limit = 50 } = req.query;
      
      const contacts = await Contact.getByPriority(priority, parseInt(limit));

      res.json({
        success: true,
        data: {
          contacts: contacts.map(contact => contact.toObject()),
          count: contacts.length
        }
      });

    } catch (error) {
      console.error('Get contacts by priority error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching contacts by priority',
        error: error.message
      });
    }
  }

  // Update contact (admin only)
  static async updateContact(req, res) {
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
      const { status, priority, assignedTo, response } = req.body;

      // Check if contact exists
      const existingContact = await Contact.findById(id);
      if (!existingContact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      const updateData = {};
      if (status) updateData.status = status;
      if (priority) updateData.priority = priority;
      if (assignedTo !== undefined) updateData.assignedTo = assignedTo;
      if (response !== undefined) updateData.response = response;

      const updatedContact = await Contact.update(id, updateData);

      res.json({
        success: true,
        message: 'Contact updated successfully',
        data: {
          contact: updatedContact.toObject()
        }
      });

    } catch (error) {
      console.error('Update contact error:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating contact',
        error: error.message
      });
    }
  }

  // Mark contact as read (admin only)
  static async markAsRead(req, res) {
    try {
      const { id } = req.params;

      // Check if contact exists
      const existingContact = await Contact.findById(id);
      if (!existingContact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      const updatedContact = await Contact.markAsRead(id, req.user.uid);

      res.json({
        success: true,
        message: 'Contact marked as read',
        data: {
          contact: updatedContact.toObject()
        }
      });

    } catch (error) {
      console.error('Mark as read error:', error);
      res.status(500).json({
        success: false,
        message: 'Error marking contact as read',
        error: error.message
      });
    }
  }

  // Reply to contact (admin only)
  static async replyToContact(req, res) {
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
      const { response } = req.body;

      // Check if contact exists
      const existingContact = await Contact.findById(id);
      if (!existingContact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      const updatedContact = await Contact.reply(id, response, req.user.uid);

      res.json({
        success: true,
        message: 'Reply sent successfully',
        data: {
          contact: updatedContact.toObject()
        }
      });

    } catch (error) {
      console.error('Reply to contact error:', error);
      res.status(500).json({
        success: false,
        message: 'Error replying to contact',
        error: error.message
      });
    }
  }

  // Close contact (admin only)
  static async closeContact(req, res) {
    try {
      const { id } = req.params;

      // Check if contact exists
      const existingContact = await Contact.findById(id);
      if (!existingContact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      const updatedContact = await Contact.close(id);

      res.json({
        success: true,
        message: 'Contact closed successfully',
        data: {
          contact: updatedContact.toObject()
        }
      });

    } catch (error) {
      console.error('Close contact error:', error);
      res.status(500).json({
        success: false,
        message: 'Error closing contact',
        error: error.message
      });
    }
  }

  // Delete contact (admin only)
  static async deleteContact(req, res) {
    try {
      const { id } = req.params;

      // Check if contact exists
      const existingContact = await Contact.findById(id);
      if (!existingContact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      await Contact.delete(id);

      res.json({
        success: true,
        message: 'Contact deleted successfully'
      });

    } catch (error) {
      console.error('Delete contact error:', error);
      res.status(500).json({
        success: false,
        message: 'Error deleting contact',
        error: error.message
      });
    }
  }

  // Get contact statistics (admin only)
  static async getContactStats(req, res) {
    try {
      const stats = await Contact.getStats();

      res.json({
        success: true,
        data: {
          stats
        }
      });

    } catch (error) {
      console.error('Get contact stats error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching contact statistics',
        error: error.message
      });
    }
  }
}

module.exports = ContactController;

