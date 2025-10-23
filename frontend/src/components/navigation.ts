/**
 * Navigation Component - Shared navigation bar
 */

import { AuthService } from '../services/authService.js';

export function Navigation(): string {
  const isAuth = AuthService.isAuthenticated();
  const user = AuthService.getUser();

  if (isAuth && user) {
    // Authenticated navigation
    return `
      <nav class="bg-white dark:bg-gray-800 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <a href="/" data-link class="flex items-center">
                <img src="/images/logo.png" alt="Logo" class="h-8 w-8 mr-2" onerror="this.style.display='none'">
                <span class="text-xl font-bold text-indigo-600 dark:text-indigo-400">ft_transcendence</span>
              </a>
              <div class="hidden md:flex ml-10 space-x-4">
                <a href="/dashboard" data-link class="nav-link">Dashboard</a>
                <a href="/play" data-link class="nav-link">Play</a>
                <a href="/tournaments" data-link class="nav-link">Tournaments</a>
                <a href="/friends" data-link class="nav-link">Friends</a>
                <a href="/chat" data-link class="nav-link">Chat</a>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button id="themeToggle" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="w-5 h-5 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                </svg>
              </button>
              <a href="/profile" data-link class="flex items-center space-x-2 hover:opacity-80">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${user.username}</span>
                <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                  ${user.username.charAt(0).toUpperCase()}
                </div>
              </a>
              <button id="logoutBtn" class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    `;
  } else {
    // Public navigation
    return `
      <nav class="bg-white dark:bg-gray-800 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <a href="/" data-link class="flex items-center">
                <img src="/images/logo.png" alt="Logo" class="h-8 w-8 mr-2" onerror="this.style.display='none'">
                <span class="text-xl font-bold text-indigo-600 dark:text-indigo-400">ft_transcendence</span>
              </a>
            </div>
            <div class="flex items-center space-x-4">
              <button id="themeToggle" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="w-5 h-5 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                </svg>
              </button>
              <a href="/login" data-link class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600">
                Login
              </a>
              <a href="/sign" data-link class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}
