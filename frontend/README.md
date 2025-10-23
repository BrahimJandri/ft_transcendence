# ft_transcendence - Modern SPA Architecture

A modern Single Page Application built with TypeScript, featuring client-side routing, authentication, and a classic Pong game.

## 🏗️ Architecture Overview

This project follows a **modern SPA architecture** with complete separation of concerns:

### Core Principles
- ✅ **TypeScript-based** - Type-safe development
- ✅ **No page reloads** - Client-side routing with History API
- ✅ **Module-based** - ES6 imports/exports
- ✅ **Component-driven** - Each page is a reusable function
- ✅ **Separation of concerns** - Pages (UI) separate from Logic (behavior)
- ✅ **Service layer** - Centralized API calls and business logic

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app.ts                    # Main application entry point
│   ├── router.ts                 # Client-side router with History API
│   ├── pages/                    # UI Components (return HTML strings)
│   │   ├── home.ts
│   │   ├── login.ts
│   │   ├── sign.ts
│   │   ├── dashboard.ts
│   │   ├── profile.ts
│   │   └── game.ts
│   ├── logic/                    # Page-specific behavior
│   │   ├── homeLogic.ts
│   │   ├── loginLogic.ts
│   │   ├── signLogic.ts
│   │   ├── dashboardLogic.ts
│   │   └── gameLogic.ts
│   ├── services/                 # API and business logic
│   │   ├── apiService.ts         # HTTP requests
│   │   └── authService.ts        # Authentication management
│   ├── utils/                    # Helper functions
│   │   ├── dom.ts                # DOM manipulation helpers
│   │   ├── storage.ts            # LocalStorage wrapper
│   │   ├── theme.ts              # Dark/Light mode toggle
│   │   └── validator.ts          # Form validation
│   ├── types/                    # TypeScript type definitions
│   │   └── index.ts
│   └── components/               # Shared components
│       └── navigation.ts         # Navigation bar
├── dist/                         # Compiled JavaScript output
├── images/                       # Static assets
├── index.html                    # SPA entry point
├── server.js                     # Node.js server with SPA routing
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## 🎯 Key Features

### 1. Client-Side Routing
- **No page reloads** - Smooth navigation using History API
- **Link interception** - Automatically handles `<a data-link>` clicks
- **Route events** - Dispatches `routeChanged` event for logic initialization
- **Protected routes** - Authentication guards for secure pages

### 2. Authentication System
- Token-based auth stored in localStorage
- Auto-redirect to login for protected routes
- Session persistence across refreshes
- Centralized auth service

### 3. Page Components (UI Layer)
Each page is a TypeScript function returning an HTML string:
```typescript
export function LoginPage(): string {
  return `<div>Login Form HTML</div>`;
}
```

### 4. Logic Handlers (Behavior Layer)
Separate files initialize event listeners and handle interactions:
```typescript
export function initLoginPage(): void {
  // Add event listeners
  // Handle form submissions
  // Call service layer
}
```

### 5. Service Layer
Centralized API calls and business logic:
```typescript
// API Service
ApiService.get('/users')
ApiService.post('/auth/login', credentials)

// Auth Service
AuthService.login(credentials)
AuthService.isAuthenticated()
AuthService.logout()
```

### 6. SPA Server
Node.js server with fallback routing:
- Serves static files with proper MIME types
- Returns `index.html` for unknown routes (client-side routing)
- Prevents 404 errors on page refresh

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- TypeScript (installed globally or via npm)

### Installation

1. **Clone the repository**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Build the project**
```bash
npm run build
```

This compiles TypeScript files from `src/` to `dist/`

### Development

**Watch mode** (auto-compile on file changes):
```bash
npm run watch
```

**Start the server** (in another terminal):
```bash
npm start
```

Visit: **http://localhost:3000**

## 📝 Development Workflow

### Adding a New Page

1. **Create page component** (`src/pages/newPage.ts`):
```typescript
import { Navigation } from '../components/navigation.js';

export function NewPage(): string {
  return `
    ${Navigation()}
    <div class="container">
      <h1>New Page</h1>
    </div>
  `;
}
```

2. **Create logic handler** (`src/logic/newPageLogic.ts`):
```typescript
export function initNewPage(): void {
  const button = document.getElementById('myButton');
  button?.addEventListener('click', () => {
    console.log('Button clicked!');
  });
}
```

3. **Register route** in `src/app.ts`:
```typescript
import { NewPage } from './pages/newPage.js';
import { initNewPage } from './logic/newPageLogic.js';

// Register route
router.addRoute('/new-page', NewPage);

// Add to initPageLogic switch
case '/new-page':
  initNewPage();
  break;
```

4. **Rebuild**:
```bash
npm run build
```

### Navigation Pattern

All internal links use:
```html
<a href="/path" data-link>Link Text</a>
```
- `href="/path"` - The route path
- `data-link` - Tells router to intercept
- No `onclick` handlers needed
- Router automatically prevents page reload

### Authentication Guards

Protected routes automatically redirect to login:
```typescript
router.addRoute('/dashboard', DashboardPage, true); // requiresAuth = true
```

## 🎨 Styling

- **Tailwind CSS** via CDN
- **Dark mode** support with class-based toggle
- **Theme persistence** in localStorage
- Custom color palette:
  - Primary: `#0da6f2`
  - Background Light: `#f5f7f8`
  - Background Dark: `#101d23`

Toggle theme:
```typescript
Theme.toggle();
```

## 🔒 State Management

- **localStorage** for persistence (auth tokens, theme, user data)
- **Component state** via closures in logic files
- **No global state library** - keeping it simple

## 📦 Build Output

TypeScript compiles to:
```
src/app.ts → dist/app.js
src/router.ts → dist/router.js
src/pages/*.ts → dist/pages/*.js
... and so on
```

Import statements use `.js` extensions (for browser compatibility):
```typescript
import { Router } from './router.js'; // ← .js extension required
```

## 🧪 API Integration

Backend API base URL: `http://localhost:4000/api`

### Making API Calls
```typescript
// GET request
const response = await ApiService.get('/users');

// POST request
const response = await ApiService.post('/auth/login', {
  username: 'user',
  password: 'pass'
});
```

## 🎮 Game Features

Classic Pong game with:
- Two-player local gameplay
- Keyboard controls (W/S and Arrow keys)
- Score tracking
- Pause/Resume functionality
- Win detection

## 📱 Responsive Design

- Mobile-first approach
- Tailwind responsive classes
- Works on all screen sizes

## 🔧 Configuration Files

### `tsconfig.json`
- Target: ES2020
- Module: ES2020
- Output: `dist/`
- Source: `src/`

### `package.json`
- Scripts: `build`, `watch`, `start`
- Type: `module` (ES modules)

### `server.js`
- Port: 3000 (configurable via PORT env var)
- SPA fallback routing
- Static file serving

## 🚦 Route Structure

| Route | Component | Auth Required | Description |
|-------|-----------|---------------|-------------|
| `/` | HomePage | No | Landing page |
| `/login` | LoginPage | No | User login |
| `/sign` | SignPage | No | User registration |
| `/dashboard` | DashboardPage | Yes | User dashboard |
| `/profile` | ProfilePage | Yes | User profile |
| `/game` | GamePage | Yes | Pong game |

## 🎯 Best Practices Applied

- ✅ **DRY Principle** - Reusable services and utilities
- ✅ **Single Responsibility** - Each file has one clear purpose
- ✅ **Consistent Naming** - `[Name]Page()` for components, `init[Name]Page()` for logic
- ✅ **Clear Import Paths** - Use `.js` extensions for ES modules
- ✅ **Event-Driven** - Router dispatches events, app listens
- ✅ **Authentication Guards** - Check auth before rendering protected content
- ✅ **Error Handling** - Try-catch blocks in async operations
- ✅ **User Feedback** - Loading states, success/error messages

## 📄 License

ISC

## 👤 Author

ft_transcendence team

---

**Happy Coding! 🚀**
