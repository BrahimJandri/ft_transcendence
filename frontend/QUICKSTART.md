# Quick Start Guide

## ✅ Your SPA is Ready!

Your project has been successfully restructured into a modern Single Page Application.

## 🚀 How to Run

### Option 1: Using Node.js Server (Recommended)

1. **Start the server:**
```bash
cd /home/bjandri/Desktop/ft_transcendence/frontend
node server.js
```

2. **Open your browser:**
```
http://localhost:3000
```

### Option 2: Using Any HTTP Server

You can use any static file server. The `server.js` includes SPA fallback routing.

```bash
# Python
python3 -m http.server 3000

# PHP
php -S localhost:3000

# VS Code Live Server
# Right-click index.html > Open with Live Server
```

## 📝 Development Workflow

### Making Changes

1. **Edit TypeScript files** in `src/` directory
2. **Compile TypeScript:**
```bash
cd /home/bjandri/Desktop/ft_transcendence/frontend
tsc
```

3. **Refresh browser** to see changes

### Watch Mode (Auto-compile)

Open a terminal and run:
```bash
cd /home/bjandri/Desktop/ft_transcendence/frontend
tsc --watch
```

This will automatically recompile whenever you save a `.ts` file.

## 🎯 What's Available

### Pages
- **Home** (`/`) - Landing page
- **Login** (`/login`) - User login
- **Sign Up** (`/sign`) - User registration
- **Dashboard** (`/dashboard`) - User dashboard (protected)
- **Profile** (`/profile`) - User profile (protected)
- **Game** (`/game`) - Pong game (protected)

### Features
- ✅ Client-side routing (no page reloads)
- ✅ Authentication system with protected routes
- ✅ Dark/Light theme toggle
- ✅ Form validation
- ✅ Pong game with working controls
- ✅ Responsive design with Tailwind CSS

## 🔧 Next Steps

### 1. Connect to Backend

Update the API base URL in `src/services/apiService.ts`:
```typescript
const API_BASE_URL = 'http://localhost:4000/api'; // Your backend URL
```

### 2. Add More Pages

Follow the pattern in `README.md` to add new pages.

### 3. Customize Styling

Edit Tailwind classes in page components or add custom CSS.

### 4. Add More Features

- Add more game modes
- Implement chat functionality
- Add tournament system
- Add friends list

## 🐛 Troubleshooting

### Route not working after refresh?
Make sure you're using the Node.js server (`server.js`) which handles SPA fallback routing.

### TypeScript compilation errors?
```bash
cd /home/bjandri/Desktop/ft_transcendence/frontend
tsc --noEmit  # Check for errors without compiling
```

### Can't find a module?
Make sure import paths use `.js` extension:
```typescript
import { Router } from './router.js'; // ✅ Correct
import { Router } from './router';    // ❌ Wrong
```

## 📚 Learn More

- Read `README.md` for full documentation
- Check `src/` directory for code examples
- Explore TypeScript files to understand the architecture

## 🎉 You're All Set!

Your modern SPA is ready to use. Start the server and begin building! 🚀
