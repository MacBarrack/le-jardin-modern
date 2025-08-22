# Le Jardin Eden - Development Guide

This guide will help you set up the development environment for the Le Jardin Eden childcare website with Node.js backend and Firebase integration.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm
- VS Code (recommended)
- Firebase account

### 1. Clone and Setup
```bash
# Navigate to project directory
cd le-jardin-modern

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### 2. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Firestore Database
4. Enable Authentication
5. Generate a service account key:
   - Go to Project Settings > Service Accounts
   - Click "Generate new private key"
   - Download the JSON file
6. Update `backend/.env` with your Firebase credentials

### 3. Environment Configuration
Copy the Firebase service account details to `backend/.env`:
```bash
cd backend
cp .env.example .env
# Edit .env with your Firebase credentials
```

### 4. VS Code Setup
Open the project in VS Code:
```bash
code .
```

Install recommended extensions when prompted, or manually install:
- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- Firebase Explorer
- Thunder Client (for API testing)

## 🛠️ Development Workflow

### Using VS Code Tasks
Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) and type "Tasks: Run Task":

- **Install Frontend Dependencies** - Install React app dependencies
- **Install Backend Dependencies** - Install Node.js server dependencies
- **Start Frontend Dev Server** - Launch React development server (port 5173)
- **Start Backend Dev Server** - Launch Node.js API server (port 5000)
- **Start Full Stack Development** - Launch both frontend and backend simultaneously
- **Build Frontend** - Create production build
- **Lint Frontend** - Run ESLint on frontend code

### Using VS Code Debugger
Press `F5` or go to Run and Debug panel:

- **Launch Frontend (Vite)** - Debug React app
- **Launch Backend (Node.js)** - Debug Node.js server
- **Debug Backend (Nodemon)** - Debug with auto-restart
- **Launch Full Stack** - Debug both frontend and backend

### Manual Commands

#### Frontend Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

#### Backend Development
```bash
cd backend

# Start development server with nodemon
npm run dev

# Start production server
npm start

# Check health
curl http://localhost:5000/health
```

## 📁 Project Structure

```
le-jardin-modern/
├── .vscode/                    # VS Code configuration
│   ├── settings.json          # Workspace settings
│   ├── launch.json            # Debug configurations
│   ├── tasks.json             # Build tasks
│   └── extensions.json        # Recommended extensions
├── backend/                   # Node.js backend
│   ├── src/
│   │   ├── server.js         # Main server file
│   │   └── routes/           # API routes
│   ├── config/
│   │   └── firebase.js       # Firebase configuration
│   ├── middleware/           # Express middleware
│   ├── package.json          # Backend dependencies
│   ├── .env                  # Environment variables
│   └── .gitignore           # Backend gitignore
├── src/                      # React frontend
│   ├── components/           # React components
│   ├── pages/               # Page components
│   ├── contexts/            # React contexts
│   └── hooks/               # Custom hooks
├── public/                   # Static assets
├── package.json             # Frontend dependencies
└── vite.config.js           # Vite configuration
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/logout` - Logout user

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get single program
- `POST /api/programs` - Create program (admin only)
- `PUT /api/programs/:id` - Update program (admin only)
- `DELETE /api/programs/:id` - Delete program (admin only)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin only)
- `GET /api/contact/:id` - Get single contact (admin only)
- `PUT /api/contact/:id/status` - Update contact status (admin only)

### Users (Admin only)
- `GET /api/users` - Get all users
- `GET /api/users/:uid` - Get single user
- `PUT /api/users/:uid/role` - Update user role
- `PUT /api/users/:uid/status` - Activate/deactivate user

### Admin
- `GET /api/admin/dashboard/stats` - Get dashboard statistics
- `GET /api/admin/system/info` - Get system information
- `GET /api/admin/logs/activity` - Get activity logs

## 🔐 Security Features

- JWT authentication
- Firebase Admin SDK integration
- Rate limiting
- CORS protection
- Helmet security headers
- Input validation with express-validator
- Role-based access control

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to:
- Vercel (recommended)
- Netlify
- Firebase Hosting
- Any static hosting service

### Backend Deployment
The backend can be deployed to:
- Railway
- Render
- Heroku
- DigitalOcean App Platform
- AWS/GCP/Azure

### Environment Variables for Production
Make sure to set these in your production environment:
- `NODE_ENV=production`
- `FRONTEND_URL=https://your-frontend-domain.com`
- All Firebase credentials
- Strong `JWT_SECRET`

## 🧪 Testing APIs

Use the Thunder Client extension in VS Code or any API testing tool:

1. Start the backend server
2. Test the health endpoint: `GET http://localhost:5000/health`
3. Test authentication endpoints
4. Test other API endpoints with proper authentication headers

## 🔍 Troubleshooting

### Common Issues

1. **Firebase connection errors**
   - Check your Firebase credentials in `.env`
   - Ensure Firestore is enabled in Firebase Console
   - Verify service account permissions

2. **CORS errors**
   - Check `FRONTEND_URL` in backend `.env`
   - Ensure frontend is running on the correct port

3. **Port conflicts**
   - Frontend runs on port 5173
   - Backend runs on port 5000
   - Change ports in configuration if needed

4. **Module not found errors**
   - Run `npm install` in both root and backend directories
   - Clear node_modules and reinstall if needed

### Debug Mode
Use VS Code debugger to set breakpoints and inspect variables in both frontend and backend code.

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

---

**Happy coding! 🎉**

