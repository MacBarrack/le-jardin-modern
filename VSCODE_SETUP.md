# 🔧 VS Code Setup Guide for Le Jardin Eden

This guide will help you set up the perfect development environment in VS Code for the Le Jardin Eden project.

## 📋 Required Extensions

Install these extensions for the best development experience:

### Essential Extensions

1. **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
   - Provides React code snippets and shortcuts
   - Type `rafce` for React Arrow Function Component Export

2. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
   - Automatic code formatting on save
   - Consistent code style across the project

3. **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
   - Automatically rename paired HTML/JSX tags
   - Essential for React development

4. **Bracket Pair Colorizer 2** (`coenraads.bracket-pair-colorizer-2`)
   - Color matching brackets for better code readability
   - Helps with nested JSX structures

5. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
   - Autocomplete for Tailwind CSS classes
   - Hover previews for CSS properties

### Recommended Extensions

6. **GitLens** (`eamodio.gitlens`)
   - Enhanced Git capabilities
   - Inline blame annotations and commit history

7. **Thunder Client** (`rangav.vscode-thunder-client`)
   - API testing directly in VS Code
   - Test backend endpoints without leaving the editor

8. **Auto Import - ES6, TS, JSX, TSX** (`steoates.autoimport`)
   - Automatically finds and adds imports
   - Saves time when working with components

9. **Indent Rainbow** (`oderwat.indent-rainbow`)
   - Colorizes indentation for better code structure visibility
   - Helpful for JSX nesting

10. **Material Icon Theme** (`pkief.material-icon-theme`)
    - Beautiful file icons for better project navigation
    - Easy to identify file types

## ⚙️ VS Code Settings

Create or update your VS Code settings for this project:

### Workspace Settings

Create `.vscode/settings.json` in the project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  "files.associations": {
    "*.jsx": "javascriptreact"
  },
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)",
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["classnames\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

### User Settings (Optional)

Add these to your global VS Code settings:

```json
{
  "editor.fontSize": 14,
  "editor.lineHeight": 1.5,
  "editor.fontFamily": "'Fira Code', 'Cascadia Code', Consolas, monospace",
  "editor.fontLigatures": true,
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme"
}
```

## 🚀 Launch Configuration

Create `.vscode/launch.json` for debugging:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    },
    {
      "name": "Launch Firefox",
      "request": "launch",
      "type": "firefox",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

## 📝 Tasks Configuration

Create `.vscode/tasks.json` for common tasks:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Frontend",
      "type": "shell",
      "command": "npm run dev",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "new"
      },
      "problemMatcher": []
    },
    {
      "label": "Start Backend",
      "type": "shell",
      "command": "npm start",
      "options": {
        "cwd": "${workspaceFolder}/backend"
      },
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "new"
      },
      "problemMatcher": []
    },
    {
      "label": "Build Production",
      "type": "shell",
      "command": "npm run build",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    }
  ]
}
```

## 🎨 Code Snippets

Create custom snippets in `.vscode/snippets.code-snippets`:

```json
{
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';",
      "import { motion } from 'framer-motion';",
      "",
      "const ${1:ComponentName} = () => {",
      "  return (",
      "    <motion.div",
      "      initial={{ opacity: 0 }}",
      "      animate={{ opacity: 1 }}",
      "      transition={{ duration: 0.3 }}",
      "    >",
      "      $0",
      "    </motion.div>",
      "  );",
      "};",
      "",
      "export default ${1:ComponentName};"
    ],
    "description": "React functional component with Framer Motion"
  },
  "Tailwind Card Component": {
    "prefix": "twcard",
    "body": [
      "<Card className=\"${1:card-hover}\">",
      "  <CardContent className=\"${2:p-6}\">",
      "    $0",
      "  </CardContent>",
      "</Card>"
    ],
    "description": "Tailwind CSS card component"
  }
}
```

## 🔧 Keyboard Shortcuts

Useful keyboard shortcuts for React development:

- **Ctrl+Shift+P** (Cmd+Shift+P on Mac): Command Palette
- **Ctrl+`** (Cmd+` on Mac): Toggle Terminal
- **Ctrl+Shift+`** (Cmd+Shift+` on Mac): New Terminal
- **Alt+Shift+F** (Option+Shift+F on Mac): Format Document
- **Ctrl+D** (Cmd+D on Mac): Select Next Occurrence
- **Ctrl+Shift+L** (Cmd+Shift+L on Mac): Select All Occurrences
- **F2**: Rename Symbol
- **Ctrl+Click** (Cmd+Click on Mac): Go to Definition

## 📁 Recommended Folder Structure in Explorer

Organize your VS Code explorer view:

```
📁 le-jardin-modern/
├── 📁 .vscode/              # VS Code configuration
├── 📁 src/
│   ├── 📁 components/       # React components
│   ├── 📁 pages/           # Page components
│   ├── 📁 contexts/        # React contexts
│   ├── 📁 assets/          # Images and static files
│   └── 📁 translations/    # Language files
├── 📁 backend/             # Backend server
├── 📁 public/              # Public assets
├── 📄 package.json         # Dependencies
├── 📄 README.md           # Project documentation
└── 📄 .gitignore          # Git ignore rules
```

## 🐛 Debugging Setup

### Frontend Debugging

1. Install the **Debugger for Chrome** extension
2. Set breakpoints in your React components
3. Press F5 to start debugging
4. VS Code will open Chrome and attach the debugger

### Backend Debugging

1. Add this to your `backend/package.json` scripts:
```json
{
  "scripts": {
    "debug": "node --inspect-brk src/server.js"
  }
}
```

2. Use the Node.js debugger configuration in launch.json
3. Set breakpoints in your Express routes
4. Press F5 to start debugging

## 🔍 IntelliSense Configuration

For better IntelliSense, create `jsconfig.json` in the project root:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "backend"
  ]
}
```

## 🎯 Productivity Tips

### 1. Multi-cursor Editing
- Hold **Alt** and click to place multiple cursors
- Use **Ctrl+Alt+Down** to add cursor below

### 2. Quick File Navigation
- **Ctrl+P** (Cmd+P): Quick Open files
- **Ctrl+Shift+E**: Focus on Explorer
- **Ctrl+Shift+F**: Global search

### 3. Code Folding
- **Ctrl+Shift+[**: Fold region
- **Ctrl+Shift+]**: Unfold region
- **Ctrl+K Ctrl+0**: Fold all

### 4. Split Editor
- **Ctrl+\\**: Split editor
- **Ctrl+1/2/3**: Focus editor group

### 5. Integrated Terminal
- **Ctrl+Shift+`**: New terminal
- **Ctrl+`**: Toggle terminal panel

## 🚀 Quick Start Commands

Once VS Code is set up, use these commands:

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development
npm run dev

# Start backend (in new terminal)
cd backend && npm start

# Build for production
npm run build

# Run linting
npm run lint
```

## 🔧 Troubleshooting

### Common Issues

1. **Extensions not working**: Reload VS Code window (Ctrl+Shift+P → "Reload Window")
2. **IntelliSense not working**: Check jsconfig.json and restart VS Code
3. **Prettier not formatting**: Check default formatter in settings
4. **Terminal not opening**: Check terminal shell settings

### Performance Tips

1. Exclude `node_modules` from file watcher
2. Disable unused extensions
3. Use workspace-specific settings
4. Close unused editor tabs

---

**Happy coding in VS Code! 🎉**

