/**
 * Main Application Entry Point
 * Initializes router, registers routes, and manages page logic
 */

import { Router } from './router.js';
import { Theme } from './utils/theme.js';
import { AuthService } from './services/authService.js';

// Import page components
import { HomePage } from './pages/home.js';
import { LoginPage } from './pages/login.js';
import { SignPage } from './pages/sign.js';
import { DashboardPage } from './pages/dashboard.js';
import { ProfilePage } from './pages/profile.js';
import { SettingsPage } from './pages/settings.js';
import { GamePage } from './pages/game.js';
import { PlayPage } from './pages/play.js';
import { GameSetupPage } from './pages/gameSetup.js';
import { FriendsPage } from './pages/friends.js';
import { ChatPage } from './pages/chat.js';
import { StatsPage } from './pages/stats.js';
import { TournamentsPage } from './pages/tournaments.js';
import { FindMatchPage } from './pages/findMatch.js';

// Import logic handlers
import { initHomePage } from './logic/homeLogic.js';
import { initLoginPage } from './logic/loginLogic.js';
import { initSignPage } from './logic/signLogic.js';
import { initDashboardPage } from './logic/dashboardLogic.js';
import { initGamePage } from './logic/gameLogic.js';

// Initialize the application
function initApp(): void {
  // Initialize theme
  Theme.init();

  // Get the root element
  const app = document.getElementById('app');
  if (!app) {
    console.error('Root element #app not found');
    return;
  }

  // Create router instance
  const router = new Router('app');

  // Register public routes
  router.addRoute('/', HomePage);
  router.addRoute('/login', LoginPage);
  router.addRoute('/sign', SignPage);

  // Register protected routes
  router.addRoute('/dashboard', DashboardPage, true);
  router.addRoute('/profile', ProfilePage, true);
  router.addRoute('/settings', SettingsPage, true);
  router.addRoute('/game', GamePage, true);
  router.addRoute('/play', PlayPage, true);
  router.addRoute('/gameSetup', GameSetupPage, true);
  router.addRoute('/friends', FriendsPage, true);
  router.addRoute('/chat', ChatPage, true);
  router.addRoute('/stats', StatsPage, true);
  router.addRoute('/tournaments', TournamentsPage, true);
  router.addRoute('/findMatch', FindMatchPage, true);

  // Listen for route changes and initialize page-specific logic
  window.addEventListener('routeChanged', ((e: CustomEvent) => {
    const { path, requiresAuth } = e.detail;

    // Check authentication for protected routes
    if (requiresAuth && !AuthService.isAuthenticated()) {
      router.navigate('/login');
      return;
    }

    // Initialize page-specific logic based on current path
    initPageLogic(path);
  }) as EventListener);

  // Start the router
  router.start();
}

/**
 * Initialize page-specific logic based on the current route
 */
function initPageLogic(path: string): void {
  // Clean up any previous event listeners or timers if needed
  
  switch (path) {
    case '/':
      initHomePage();
      break;
    
    case '/login':
      // Redirect to dashboard if already authenticated
      if (AuthService.isAuthenticated()) {
        window.location.href = '/dashboard';
        return;
      }
      initLoginPage();
      break;
    
    case '/sign':
      // Redirect to dashboard if already authenticated
      if (AuthService.isAuthenticated()) {
        window.location.href = '/dashboard';
        return;
      }
      initSignPage();
      break;
    
    case '/dashboard':
      initDashboardPage();
      break;
    
    case '/profile':
      initDashboardPage(); // Reuse dashboard logic for now
      break;
    
    case '/game':
    case '/play':
      initGamePage();
      break;
    
    default:
      // Initialize basic functionality for other pages
      initBasicFeatures();
      break;
  }
}

/**
 * Initialize basic features available on all pages
 */
function initBasicFeatures(): void {
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      Theme.toggle();
    });
  }

  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      AuthService.logout();
    });
  }
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

