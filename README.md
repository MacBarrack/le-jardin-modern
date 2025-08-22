# Le Jardin Eden - Complete Childcare Management System

A modern, full-stack web application for childcare center management with complete backend implementation, user authentication, admin dashboard, and real-time data features.

## 🌟 Features

### Frontend Features
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with React, Tailwind CSS, and Framer Motion animations
- **Multi-language Support**: English and other languages supported
- **Client Registration**: Complete enrollment system for parents
- **Contact Forms**: Working contact form with validation
- **Program Information**: Detailed program descriptions and pricing
- **Privacy & Terms**: Complete legal pages included
- **Professional Styling**: Green theme with gradients and glass effects

### Backend Features (FULLY IMPLEMENTED)
- **Complete MVC Architecture**: Models, Controllers, Utils, and Routes all implemented
- **RESTful API**: Express.js backend with comprehensive endpoints
- **Authentication**: JWT-based authentication system with proper validation
- **Admin Dashboard**: Protected admin interface with role-based access
- **Database Integration**: Firebase Firestore integration with complete models
- **Real-time Data**: Live updates and data synchronization
- **Security**: Rate limiting, CORS, helmet security headers, input validation
- **Error Handling**: Comprehensive error handling and logging

### Admin Features (RESTRICTED TO LE JARDIN ONLY)
- **Secure Admin Access**: Only users with "lejardin", "le-jardin", or "le_jardin" in email can access admin features
- **Dashboard Analytics**: Real-time statistics and charts
- **User Management**: Complete user administration
- **Program Management**: Manage different childcare programs
- **Contact Management**: View and manage contact form submissions
- **Enrollment Management**: Handle program enrollments
- **System Health**: Monitor system status and performance

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Firebase account (for production database)

### Installation

1. **Extract the project files**
   ```bash
   unzip le-jardin-modern-READY-FOR-DEPLOYMENT.zip
   cd le-jardin-modern
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up Firebase (Required for production)**
   - Go to https://console.firebase.google.com/
   - Create a new project: "le-jardin-eden"
   - Enable Authentication (Email/Password)
   - Enable Firestore Database (start in test mode)
   - Generate service account key (Project Settings > Service Accounts)
   - Download the JSON credentials file

5. **Configure environment variables**
   
   **Backend (.env)**
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173

   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_secure
   JWT_EXPIRES_IN=7d

   # Firebase Configuration
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_PRIVATE_KEY_ID=your_private_key_id
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"
   FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your_project.iam.gserviceaccount.com
   FIREBASE_CLIENT_ID=your_client_id
   FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
   FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
   FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
   FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxxxx%40your_project.iam.gserviceaccount.com

   # Rate Limiting
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   ```

   **Frontend (.env)**
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### Development

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on http://localhost:5000

2. **Start the frontend development server**
   ```bash
   # In a new terminal, from project root
   npm run dev
   ```
   Frontend will run on http://localhost:5173

### Production Build

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   cd backend
   NODE_ENV=production npm start
   ```

## 🏗️ Complete Backend Architecture

### Models (Fully Implemented)
- **User Model**: Complete user management with authentication
- **Program Model**: Childcare program management
- **Contact Model**: Contact form submissions
- **Enrollment Model**: Program enrollment tracking

### Controllers (Fully Implemented)
- **AuthController**: Login, register, profile management
- **UserController**: User CRUD operations
- **ProgramController**: Program management
- **ContactController**: Contact form handling
- **EnrollmentController**: Enrollment management
- **AdminController**: Dashboard and system management

### Utils (Fully Implemented)
- **Validation**: Comprehensive input validation
- **Helpers**: Utility functions for common operations
- **Constants**: Application constants and configurations

### Routes (Fully Implemented)
- **Authentication Routes**: `/api/auth/*`
- **User Routes**: `/api/users/*`
- **Program Routes**: `/api/programs/*`
- **Contact Routes**: `/api/contact/*`
- **Enrollment Routes**: `/api/enrollments/*`
- **Admin Routes**: `/api/admin/*` (Protected)

## 🔐 Security Features (ENHANCED)

- **JWT Authentication**: Secure token-based authentication
- **Role-based Access**: Admin dashboard protected by role checks
- **Email Restriction**: Admin access limited to "le jardin" emails only
- **Rate Limiting**: API rate limiting to prevent abuse
- **CORS Protection**: Configured for secure cross-origin requests
- **Input Validation**: Comprehensive form validation and sanitization
- **Helmet Security**: Security headers for production
- **Token Verification**: Real-time token validation

## 📁 Complete Project Structure

```
le-jardin-modern/
├── src/                          # Frontend source code
│   ├── components/              # Reusable React components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Footer.jsx          # Footer with admin access
│   │   └── ProtectedRoute.jsx  # Route protection
│   ├── contexts/               # React contexts
│   │   ├── AuthContext.jsx     # Enhanced authentication context
│   │   └── LanguageContext.jsx # Multi-language support
│   ├── pages/                  # Page components
│   │   ├── Home.jsx           # Landing page
│   │   ├── Programs.jsx       # Programs information
│   │   ├── About.jsx          # About page
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Login.jsx          # User login with redirection
│   │   ├── Register.jsx       # User registration with validation
│   │   ├── AdminDashboard.jsx # Complete admin interface
│   │   ├── PrivacyPolicy.jsx  # Privacy policy
│   │   └── TermsOfService.jsx # Terms of service
│   └── App.jsx                # Main app component with routing
├── backend/                    # Complete Backend Implementation
│   ├── src/
│   │   ├── routes/            # API routes (ALL IMPLEMENTED)
│   │   │   ├── auth.js        # Authentication endpoints
│   │   │   ├── users.js       # User management
│   │   │   ├── programs.js    # Program data
│   │   │   ├── contact.js     # Contact form handling
│   │   │   ├── enrollments.js # Enrollment management
│   │   │   └── admin.js       # Admin endpoints
│   │   └── server.js          # Express server with all middleware
│   ├── models/                # Database Models (ALL IMPLEMENTED)
│   │   ├── User.js           # User model with methods
│   │   ├── Program.js        # Program model
│   │   ├── Contact.js        # Contact model
│   │   ├── Enrollment.js     # Enrollment model
│   │   └── index.js          # Model exports
│   ├── controllers/           # Business Logic (ALL IMPLEMENTED)
│   │   ├── AuthController.js  # Authentication logic
│   │   ├── UserController.js  # User management logic
│   │   ├── ProgramController.js # Program logic
│   │   ├── ContactController.js # Contact logic
│   │   ├── EnrollmentController.js # Enrollment logic
│   │   ├── AdminController.js # Admin logic
│   │   └── index.js          # Controller exports
│   ├── utils/                 # Utilities (ALL IMPLEMENTED)
│   │   ├── validation.js     # Input validation
│   │   ├── helpers.js        # Helper functions
│   │   ├── constants.js      # Application constants
│   │   └── index.js          # Utility exports
│   ├── middleware/            # Express middleware
│   │   ├── auth.js           # Enhanced authentication middleware
│   │   ├── errorHandler.js   # Error handling
│   │   └── notFound.js       # 404 handler
│   ├── config/
│   │   └── firebase.js       # Firebase configuration
│   └── .env.example          # Environment variables template
├── public/                    # Static assets
│   ├── favicon.ico           # Custom LJ favicon (green)
│   └── favicon.png           # PNG version
└── README.md                 # This file
```

## ✅ What's Fully Implemented

### Frontend ✅
- ✅ All pages load correctly with proper routing
- ✅ Navigation works perfectly with authentication state
- ✅ Contact form with backend integration
- ✅ Registration form with real backend validation
- ✅ Login form with proper dashboard redirection
- ✅ Admin dashboard with real data from backend
- ✅ Protected routes with role-based access
- ✅ Error handling and loading states
- ✅ Responsive design on all devices

### Backend ✅ (COMPLETE IMPLEMENTATION)
- ✅ Express server with all middleware configured
- ✅ Complete MVC architecture implemented
- ✅ All models with full CRUD operations
- ✅ All controllers with business logic
- ✅ All routes with proper validation
- ✅ Authentication system with JWT
- ✅ Admin restriction to "le jardin" emails only
- ✅ Firebase integration with error handling
- ✅ Input validation and sanitization
- ✅ Rate limiting and security headers
- ✅ Comprehensive error handling

### Admin Features ✅ (SECURE & COMPLETE)
- ✅ Dashboard with real-time statistics from backend
- ✅ User management with full CRUD operations
- ✅ Program management system
- ✅ Contact form management
- ✅ Enrollment tracking and management
- ✅ System health monitoring
- ✅ Secure access restricted to authorized emails only
- ✅ Real-time data updates
- ✅ Export and backup functionality

## 🔧 Admin Access Setup

**IMPORTANT**: Admin access is restricted to emails containing "lejardin", "le-jardin", or "le_jardin".

To create an admin user:
1. Register with email like: `admin@lejardin.com` or `manager@le-jardin.edu`
2. In Firebase Console, go to Firestore Database
3. Find the user document in the `users` collection
4. Update the `role` field to `"admin"`
5. User will be redirected to `/admin-dashboard` upon login

## 🌐 Deployment Ready

### Frontend Deployment
- Build command: `npm run build`
- Deploy `dist` folder to any static hosting service
- Configure environment variables in hosting dashboard

### Backend Deployment
- Fully production-ready Express server
- All dependencies included in package.json
- Environment variables properly configured
- Can be deployed to Heroku, Railway, DigitalOcean, etc.

### Full-Stack Deployment
- Backend serves frontend in production mode
- Single deployment for complete application
- All static files served from backend

## 🐛 Troubleshooting

### Common Issues

1. **Backend Connection**
   - Ensure backend is running on port 5000
   - Check CORS configuration
   - Verify API endpoints are accessible

2. **Authentication Issues**
   - Check JWT_SECRET is set and secure
   - Verify Firebase Auth is enabled
   - Ensure user roles are set correctly

3. **Admin Access Denied**
   - Verify email contains "lejardin", "le-jardin", or "le_jardin"
   - Check user role is set to "admin" in database
   - Clear browser cache and try again

## 📞 Support

For questions or issues:
- Email: lejardindedenigwe@gmail.com
- Phone: 636-895-3821
- Address: 544 Pugsley Ave, Bronx, NY

## 📄 License

This project is licensed under the MIT License.

---

**🎉 READY FOR DEPLOYMENT**: This is a complete, production-ready application with full backend implementation. All models, controllers, utils, and routes are implemented. The application includes proper authentication, admin restrictions, and real-time data management. Simply configure your environment variables and deploy!

