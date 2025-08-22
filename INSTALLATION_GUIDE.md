# Le Jardin Eden - Installation & Deployment Guide

## 🚀 Quick Start

This guide will help you set up the Le Jardin Eden childcare website project in VS Code and deploy it to Vercel.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **VS Code** - [Download here](https://code.visualstudio.com/)

## 🛠️ VS Code Extensions (Recommended)

Install these extensions in VS Code for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - Provides React code snippets
2. **Prettier - Code formatter** - Automatic code formatting
3. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
4. **Bracket Pair Colorizer** - Color matching brackets
5. **GitLens** - Enhanced Git capabilities
6. **Thunder Client** - API testing (for backend testing)
7. **Tailwind CSS IntelliSense** - Tailwind CSS autocomplete

## 📁 Project Setup

### Step 1: Extract and Open Project

1. Extract the `le-jardin-modern.zip` file to your desired location
2. Open VS Code
3. Go to `File > Open Folder` and select the extracted `le-jardin-modern` folder

### Step 2: Install Dependencies

Open the integrated terminal in VS Code (`Terminal > New Terminal`) and run:

```bash
# Install frontend dependencies
npm install --legacy-peer-deps

# Install backend dependencies
cd backend
npm install
cd ..
```

**Note:** We use `--legacy-peer-deps` to resolve React 19 compatibility issues with some UI components.

## 🔧 Environment Configuration

### Frontend Environment Variables

The frontend uses hardcoded values for development. For production, you may want to configure:

1. Create `.env` file in the root directory (optional):
```env
VITE_API_URL=http://localhost:3001
```

### Backend Environment Variables

The backend includes a `.env` file with Firebase configuration. Update it with your Firebase credentials:

```env
# Firebase Configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Server Configuration
PORT=3001
NODE_ENV=development
```

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start the frontend** (in the root directory):
```bash
npm run dev
```
The frontend will be available at `http://localhost:5173`

2. **Start the backend** (in a new terminal):
```bash
cd backend
npm start
```
The backend will be available at `http://localhost:3001`

### Production Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🌐 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy the project**:
```bash
vercel
```

Follow the prompts:
- Set up and deploy? `Y`
- Which scope? Select your account
- Link to existing project? `N`
- Project name: `le-jardin-eden` (or your preferred name)
- In which directory is your code located? `./`

4. **Deploy to production**:
```bash
vercel --prod
```

### Method 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your Git repository or upload the project folder
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install --legacy-peer-deps`

### Backend Deployment

For the backend, you can deploy to:

1. **Vercel** (for serverless functions)
2. **Railway** (for full Node.js apps)
3. **Heroku** (traditional hosting)
4. **DigitalOcean App Platform**

## 🔥 Firebase Setup (Optional)

If you want to use the authentication and database features:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication and Firestore Database
4. Get your configuration keys
5. Update the `.env` file in the backend folder

## 📱 Features Overview

### Frontend Features
- ✅ Responsive design (mobile-friendly)
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ Multi-language support (English/French)
- ✅ Contact forms
- ✅ Program showcase
- ✅ Admin dashboard (protected route)

### Backend Features
- ✅ Express.js server
- ✅ Firebase integration
- ✅ Authentication middleware
- ✅ Contact form handling
- ✅ User management
- ✅ Admin panel APIs

## 🐛 Troubleshooting

### Common Issues

1. **Dependency conflicts**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

2. **Build errors**:
   - Check that all imports are correct
   - Ensure all required dependencies are installed
   - Verify environment variables are set

3. **Framer Motion errors**:
   - All components using `motion` have the import: `import { motion } from 'framer-motion'`
   - Components using `AnimatePresence` have: `import { motion, AnimatePresence } from 'framer-motion'`

4. **Port conflicts**:
   - Frontend: Change port in `vite.config.js`
   - Backend: Change PORT in `.env` file

## 📞 Support

For technical support or questions:
- **Developer**: macbarrack
- **Email**: macbarrack@developer.com
- **GitHub**: https://github.com/macbarrack

## 📄 License

This project is proprietary software developed for Le Jardin Eden childcare center.

---

**Happy coding! 🎉**

