# Le Jardin Eden - Deployment Guide

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git (optional)

### Installation Steps

1. **Extract the project**
   ```bash
   unzip le-jardin-modern-final.zip
   cd le-jardin-modern
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 **Project Structure**

```
le-jardin-modern/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx    # Card-style navigation
│   │   └── Footer.jsx    # Site footer
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Landing page
│   │   ├── Programs.jsx  # Interactive programs
│   │   ├── About.jsx     # Company information
│   │   ├── Contact.jsx   # Contact form & info
│   │   ├── Login.jsx     # Authentication
│   │   ├── Register.jsx  # User registration
│   │   └── AdminDashboard.jsx # Admin interface
│   ├── contexts/         # React contexts
│   │   └── LanguageContext.jsx # Multilingual support
│   ├── hooks/            # Custom hooks
│   │   └── useTranslation.js # Translation hook
│   ├── translations/     # Language files
│   │   └── translations.js # EN/ES/FR content
│   ├── App.jsx          # Main application
│   ├── App.css          # Global styles
│   └── main.jsx         # Entry point
├── package.json         # Dependencies
├── vite.config.js      # Build configuration
└── README.md           # Project documentation
```

## 🌟 **Features**

### ✨ **Modern Design**
- Card-style navbar with glass effects
- Smooth animations with Framer Motion
- Responsive design for all devices
- Professional green color scheme

### 🌍 **Multilingual Support**
- English, Spanish, French translations
- Persistent language preferences
- Easy language switching
- Mobile-friendly language selector

### 📊 **Admin Dashboard**
- Interactive charts with Recharts
- Student management interface
- Responsive data visualization
- Professional admin interface

### 📱 **Responsive Design**
- Mobile-first approach
- Touch-friendly interactions
- Optimized for all screen sizes
- Cross-browser compatibility

## 🛠️ **Development**

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Dependencies
- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **shadcn/ui** - UI components

## 🚀 **Production Deployment**

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The `dist/` folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

### Environment Variables
No environment variables required for basic functionality.

## 📞 **Contact Information**

The website includes updated contact details:
- **Address**: 544 Pugsley Ave, Bronx, NY
- **Email**: lejardindedenigwe@gmail.com
- **Phone**: 636-895-3821

## 👨‍💻 **Developer Credits**

- **Developed by**: macbarrack
- **Copyright**: © 2025 Le Jardin Eden
- **Framework**: React + Vite + Tailwind CSS

## 🔧 **Customization**

### Updating Content
- Edit translation files in `src/translations/translations.js`
- Modify page content in respective component files
- Update contact information in multiple components

### Styling Changes
- Global styles in `src/App.css`
- Component-specific styles using Tailwind classes
- Color scheme defined in CSS custom properties

### Adding New Languages
1. Add language to `src/contexts/LanguageContext.jsx`
2. Add translations to `src/translations/translations.js`
3. Update language switcher component

## 📋 **Support**

For technical support or questions:
- Check the README.md file
- Review component documentation
- Contact the developer: macbarrack

## 🎯 **Production Ready**

This project is fully production-ready with:
- ✅ Modern React architecture
- ✅ Responsive design
- ✅ Multilingual support
- ✅ Admin dashboard
- ✅ Professional styling
- ✅ Clean code structure
- ✅ Comprehensive documentation

