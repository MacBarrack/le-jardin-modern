const { User, Program, Contact, Enrollment } = require('../models');

class AdminController {
  // Get dashboard statistics (admin only)
  static async getDashboardStats(req, res) {
    try {
      // Get user statistics
      const allUsers = await User.getAll(1000);
      const userStats = {
        total: allUsers.length,
        active: allUsers.filter(user => user.isActiveUser()).length,
        inactive: allUsers.filter(user => !user.isActiveUser()).length,
        admins: allUsers.filter(user => user.isAdmin()).length,
        users: allUsers.filter(user => !user.isAdmin()).length
      };

      // Get program statistics
      const allPrograms = await Program.getAll(true);
      const programStats = {
        total: allPrograms.length,
        active: allPrograms.filter(program => program.isActive).length,
        inactive: allPrograms.filter(program => !program.isActive).length,
        totalCapacity: allPrograms.reduce((sum, program) => sum + program.capacity, 0),
        totalEnrollment: allPrograms.reduce((sum, program) => sum + program.currentEnrollment, 0),
        availableSpots: allPrograms.reduce((sum, program) => sum + program.getAvailableSpots(), 0)
      };

      // Get contact statistics
      const contactStats = await Contact.getStats();

      // Get enrollment statistics
      const enrollmentStats = await Enrollment.getStats();

      // Get recent activities
      const recentContacts = await Contact.getByStatus('new', 5);
      const recentEnrollments = await Enrollment.getByStatus('pending', 5);

      const dashboardData = {
        users: userStats,
        programs: programStats,
        contacts: contactStats,
        enrollments: enrollmentStats,
        recentActivities: {
          newContacts: recentContacts.map(contact => ({
            id: contact.id,
            name: contact.getFullName(),
            email: contact.email,
            subject: contact.subject,
            createdAt: contact.createdAt
          })),
          pendingEnrollments: recentEnrollments.map(enrollment => ({
            id: enrollment.id,
            childName: enrollment.childName,
            parentName: enrollment.parentName,
            programId: enrollment.programId,
            createdAt: enrollment.createdAt
          }))
        }
      };

      res.json({
        success: true,
        data: dashboardData
      });

    } catch (error) {
      console.error('Get dashboard stats error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching dashboard statistics',
        error: error.message
      });
    }
  }

  // Get system health (admin only)
  static async getSystemHealth(req, res) {
    try {
      const health = {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        services: {
          database: 'connected',
          firebase: 'connected',
          server: 'running'
        },
        version: process.env.npm_package_version || '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        uptime: process.uptime()
      };

      res.json({
        success: true,
        data: health
      });

    } catch (error) {
      console.error('Get system health error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching system health',
        error: error.message
      });
    }
  }

  // Get activity logs (admin only)
  static async getActivityLogs(req, res) {
    try {
      const { limit = 50, type } = req.query;

      // This is a simplified version - in a real app, you'd have a proper logging system
      const activities = [];

      // Get recent user registrations
      const recentUsers = await User.getAll(parseInt(limit) / 4);
      recentUsers.forEach(user => {
        activities.push({
          id: `user_${user.uid}`,
          type: 'user_registration',
          description: `New user registered: ${user.getFullName()}`,
          timestamp: user.createdAt,
          userId: user.uid,
          metadata: {
            email: user.email,
            role: user.role
          }
        });
      });

      // Get recent contacts
      const recentContacts = await Contact.getAll(parseInt(limit) / 4);
      recentContacts.forEach(contact => {
        activities.push({
          id: `contact_${contact.id}`,
          type: 'contact_submission',
          description: `New contact form submitted by ${contact.getFullName()}`,
          timestamp: contact.createdAt,
          contactId: contact.id,
          metadata: {
            email: contact.email,
            subject: contact.subject,
            status: contact.status
          }
        });
      });

      // Get recent enrollments
      const recentEnrollments = await Enrollment.getAll(parseInt(limit) / 4);
      recentEnrollments.forEach(enrollment => {
        activities.push({
          id: `enrollment_${enrollment.id}`,
          type: 'enrollment_submission',
          description: `New enrollment submitted for ${enrollment.childName}`,
          timestamp: enrollment.createdAt,
          enrollmentId: enrollment.id,
          metadata: {
            childName: enrollment.childName,
            parentName: enrollment.parentName,
            status: enrollment.status
          }
        });
      });

      // Sort by timestamp (most recent first)
      activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      // Filter by type if specified
      let filteredActivities = activities;
      if (type) {
        filteredActivities = activities.filter(activity => activity.type === type);
      }

      // Limit results
      filteredActivities = filteredActivities.slice(0, parseInt(limit));

      res.json({
        success: true,
        data: {
          activities: filteredActivities,
          count: filteredActivities.length,
          totalCount: activities.length
        }
      });

    } catch (error) {
      console.error('Get activity logs error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching activity logs',
        error: error.message
      });
    }
  }

  // Export data (admin only)
  static async exportData(req, res) {
    try {
      const { type, format = 'json' } = req.query;

      let data = {};

      switch (type) {
        case 'users':
          const users = await User.getAll(1000);
          data = {
            type: 'users',
            count: users.length,
            data: users.map(user => user.toSafeObject()),
            exportedAt: new Date().toISOString()
          };
          break;

        case 'programs':
          const programs = await Program.getAll(true);
          data = {
            type: 'programs',
            count: programs.length,
            data: programs.map(program => program.toObject()),
            exportedAt: new Date().toISOString()
          };
          break;

        case 'contacts':
          const contacts = await Contact.getAll(1000);
          data = {
            type: 'contacts',
            count: contacts.length,
            data: contacts.map(contact => contact.toObject()),
            exportedAt: new Date().toISOString()
          };
          break;

        case 'enrollments':
          const enrollments = await Enrollment.getAll(1000);
          data = {
            type: 'enrollments',
            count: enrollments.length,
            data: enrollments.map(enrollment => enrollment.toObject()),
            exportedAt: new Date().toISOString()
          };
          break;

        case 'all':
          const allUsers = await User.getAll(1000);
          const allPrograms = await Program.getAll(true);
          const allContacts = await Contact.getAll(1000);
          const allEnrollments = await Enrollment.getAll(1000);
          
          data = {
            type: 'complete_export',
            users: {
              count: allUsers.length,
              data: allUsers.map(user => user.toSafeObject())
            },
            programs: {
              count: allPrograms.length,
              data: allPrograms.map(program => program.toObject())
            },
            contacts: {
              count: allContacts.length,
              data: allContacts.map(contact => contact.toObject())
            },
            enrollments: {
              count: allEnrollments.length,
              data: allEnrollments.map(enrollment => enrollment.toObject())
            },
            exportedAt: new Date().toISOString()
          };
          break;

        default:
          return res.status(400).json({
            success: false,
            message: 'Invalid export type. Use: users, programs, contacts, enrollments, or all'
          });
      }

      if (format === 'json') {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', `attachment; filename="le-jardin-${type}-${Date.now()}.json"`);
        res.json(data);
      } else {
        return res.status(400).json({
          success: false,
          message: 'Only JSON format is currently supported'
        });
      }

    } catch (error) {
      console.error('Export data error:', error);
      res.status(500).json({
        success: false,
        message: 'Error exporting data',
        error: error.message
      });
    }
  }

  // System settings (admin only)
  static async getSystemSettings(req, res) {
    try {
      const settings = {
        general: {
          siteName: 'Le Jardin Eden',
          siteUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
          adminEmail: 'admin@lejardineden.com',
          timezone: 'UTC',
          language: 'en'
        },
        security: {
          jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
          rateLimitWindow: process.env.RATE_LIMIT_WINDOW_MS || '900000',
          rateLimitMax: process.env.RATE_LIMIT_MAX_REQUESTS || '100'
        },
        features: {
          userRegistration: true,
          contactForm: true,
          programEnrollment: true,
          emailNotifications: false
        }
      };

      res.json({
        success: true,
        data: settings
      });

    } catch (error) {
      console.error('Get system settings error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching system settings',
        error: error.message
      });
    }
  }

  // Backup database (admin only)
  static async backupDatabase(req, res) {
    try {
      // This is a simplified backup - in production, you'd use proper backup tools
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      
      const backup = {
        timestamp,
        version: '1.0.0',
        data: {
          users: await User.getAll(1000),
          programs: await Program.getAll(true),
          contacts: await Contact.getAll(1000),
          enrollments: await Enrollment.getAll(1000)
        }
      };

      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', `attachment; filename="le-jardin-backup-${timestamp}.json"`);
      res.json(backup);

    } catch (error) {
      console.error('Backup database error:', error);
      res.status(500).json({
        success: false,
        message: 'Error creating database backup',
        error: error.message
      });
    }
  }
}

module.exports = AdminController;

