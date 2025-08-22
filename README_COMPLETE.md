# 🌟 Le Jardin Eden - Modern Childcare Website

A beautiful, modern, and fully responsive website for Le Jardin Eden childcare center, built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 Frontend Features
- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Multi-language Support**: English and French language options
- **Interactive UI**: Smooth transitions and hover effects
- **Program Showcase**: Detailed information about childcare programs
- **Contact Forms**: Easy-to-use contact and enrollment forms
- **Admin Dashboard**: Protected admin panel for management
- **SEO Optimized**: Proper meta tags and semantic HTML

### 🔧 Technical Features
- **React 19**: Latest React with modern hooks and features
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing with protected routes
- **Responsive Images**: Optimized images for all screen sizes
- **Modern JavaScript**: ES6+ features and clean code structure

### 🚀 Backend Features
- **Express.js Server**: RESTful API with modern Node.js
- **Firebase Integration**: Authentication and database
- **Contact Form Handling**: Email processing for inquiries
- **User Management**: Registration and login system
- **Admin APIs**: Protected endpoints for admin operations
- **Security Middleware**: Authentication and error handling

## 📱 Pages Overview

1. **Home Page**: Hero section, programs overview, testimonials, and call-to-action
2. **Programs Page**: Detailed information about all childcare programs
3. **About Page**: Company story, mission, and team information
4. **Contact Page**: Contact form, location, and business hours
5. **Login/Register**: User authentication pages
6. **Admin Dashboard**: Protected admin panel with analytics
7. **Privacy Policy**: Comprehensive privacy policy
8. **Terms of Service**: Terms and conditions

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Fast build tool and development server
- **Tailwind CSS 4.1.7** - Utility-first CSS framework
- **Framer Motion 12.15.0** - Animation library
- **React Router DOM 7.6.1** - Client-side routing
- **Lucide React** - Beautiful icon library
- **Radix UI** - Accessible UI components

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Firebase** - Authentication and database
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- VS Code (recommended)
- Git

### Installation

1. **Extract the project**:
   ```bash
   unzip le-jardin-modern.zip
   cd le-jardin-modern
   ```

2. **Install dependencies**:
   ```bash
   # Frontend dependencies
   npm install --legacy-peer-deps
   
   # Backend dependencies
   cd backend
   npm install
   cd ..
   ```

3. **Start development servers**:
   ```bash
   # Terminal 1: Frontend
   npm run dev
   
   # Terminal 2: Backend
   cd backend
   npm start
   ```

4. **Open in browser**:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001

## 📦 Project Structure

```
le-jardin-modern/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Shadcn/ui components
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Footer.jsx      # Footer component
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page
│   │   ├── Programs.jsx    # Programs page
│   │   ├── About.jsx       # About page
│   │   ├── Contact.jsx     # Contact page
│   │   └── ...
│   ├── contexts/           # React contexts
│   │   ├── AuthContext.jsx # Authentication context
│   │   └── LanguageContext.jsx # Language context
│   ├── assets/             # Images and static files
│   └── translations/       # Language files
├── backend/
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Express middleware
│   │   └── server.js       # Main server file
│   ├── config/             # Configuration files
│   └── package.json        # Backend dependencies
├── public/                 # Public static files
├── dist/                   # Production build output
└── package.json            # Frontend dependencies
```

## 🎯 Key Components

### Navigation
- Responsive navigation bar with mobile menu
- Language switcher (English/French)
- Authentication status display
- Smooth scroll to sections

### Forms
- Contact form with validation
- Enrollment form with child information
- Login/register forms with error handling
- Admin forms for content management

### Animations
- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects and micro-interactions
- Loading states and feedback

## 🔐 Authentication System

The project includes a complete authentication system:

- **User Registration**: Parents can create accounts
- **User Login**: Secure login with Firebase
- **Protected Routes**: Admin dashboard requires authentication
- **Role-based Access**: Different permissions for users and admins
- **Password Reset**: Email-based password recovery

## 📊 Admin Dashboard

The admin dashboard provides:

- **User Management**: View and manage registered users
- **Analytics**: Website traffic and engagement metrics
- **Content Management**: Update programs and information
- **Contact Inquiries**: View and respond to contact forms
- **Enrollment Management**: Process new enrollments

## 🌐 Deployment Options

### Vercel (Recommended for Frontend)
```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist folder to your web server
```

## 🔧 Configuration

### Environment Variables

**Frontend (.env)**:
```env
VITE_API_URL=http://localhost:3001
```

**Backend (.env)**:
```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_domain
FIREBASE_PROJECT_ID=your_project_id
PORT=3001
NODE_ENV=production
```

## 🎨 Customization

### Colors and Branding
- Update colors in `tailwind.config.js`
- Replace logo in `src/assets/`
- Modify brand colors in CSS variables

### Content
- Update text content in page components
- Modify translations in `src/translations/`
- Replace images in `src/assets/`

### Features
- Add new pages in `src/pages/`
- Create new components in `src/components/`
- Extend API routes in `backend/src/routes/`

## 📱 Mobile Responsiveness

The website is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with alt text
- Clean URLs with React Router
- Fast loading times with Vite

## 🧪 Testing

### Manual Testing Completed
- ✅ All pages load correctly
- ✅ Navigation works on all devices
- ✅ Forms submit successfully
- ✅ Animations work smoothly
- ✅ No console errors
- ✅ Responsive design verified

### Recommended Testing
- Unit tests with Jest and React Testing Library
- E2E tests with Cypress or Playwright
- Performance testing with Lighthouse
- Accessibility testing with axe-core

## 📞 Support & Maintenance

### Developer Contact
- **Name**: macbarrack
- **Email**: macbarrack@developer.com
- **GitHub**: https://github.com/macbarrack

### Maintenance Tasks
- Regular dependency updates
- Security patches
- Performance optimization
- Content updates
- Feature enhancements

## 📄 License

This project is proprietary software developed specifically for Le Jardin Eden childcare center. All rights reserved.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern childcare websites and educational platforms
- **Icons**: Lucide React icon library
- **UI Components**: Radix UI and Shadcn/ui
- **Animations**: Framer Motion community examples
- **Images**: Professional childcare photography

---

**Built with ❤️ for Le Jardin Eden by macbarrack**

