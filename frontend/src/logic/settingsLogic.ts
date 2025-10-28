/**
 * Settings Page Logic
 */

import { AuthService } from '../services/authService.js';
import { Theme } from '../utils/theme.js';

export function initSettingsPage(): void {
  console.log('Settings page initialized');

  // Load user settings
  loadUserSettings();
  
  // Initialize theme toggle buttons
  initThemeToggle();
  
  // Initialize form handlers
  initFormHandlers();
}

function loadUserSettings(): void {
  const user = AuthService.getUser();
  
  if (user) {
    // Update username field (read-only)
    const usernameInput = document.getElementById('settingsUsername') as HTMLInputElement;
    if (usernameInput && user.username) {
      usernameInput.value = user.username;
    }
    
    // Update email field with user's email
    const emailInput = document.getElementById('email') as HTMLInputElement;
    if (emailInput && user.email) {
      emailInput.value = user.email;
    }
  }
  
  // Load saved preferences from localStorage
  loadSavedPreferences();
}

function loadSavedPreferences(): void {
  // Load 2FA setting
  const twoFactorToggle = document.getElementById('2fa') as HTMLInputElement;
  const twoFactorEnabled = localStorage.getItem('twoFactorEnabled') === 'true';
  if (twoFactorToggle) {
    twoFactorToggle.checked = twoFactorEnabled;
  }
  
  // Load language setting
  const languageSelect = document.getElementById('language') as HTMLSelectElement;
  const savedLanguage = localStorage.getItem('language') || 'English';
  if (languageSelect) {
    languageSelect.value = savedLanguage;
  }
  
  // Load notification settings
  const gameInvitesToggle = document.getElementById('game-invites') as HTMLInputElement;
  const friendRequestsToggle = document.getElementById('friend-requests') as HTMLInputElement;
  const chatMessagesToggle = document.getElementById('chat-messages') as HTMLInputElement;
  
  if (gameInvitesToggle) {
    gameInvitesToggle.checked = localStorage.getItem('notif_gameInvites') !== 'false';
  }
  if (friendRequestsToggle) {
    friendRequestsToggle.checked = localStorage.getItem('notif_friendRequests') !== 'false';
  }
  if (chatMessagesToggle) {
    chatMessagesToggle.checked = localStorage.getItem('notif_chatMessages') === 'true';
  }
}

function initThemeToggle(): void {
  const lightModeBtn = document.getElementById('lightModeBtn');
  const darkModeBtn = document.getElementById('darkModeBtn');
  
  // Update active state based on current theme
  updateThemeButtons();
  
  if (lightModeBtn) {
    lightModeBtn.addEventListener('click', () => {
      Theme.setTheme('light');
      updateThemeButtons();
    });
  }
  
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
      Theme.setTheme('dark');
      updateThemeButtons();
    });
  }
}

function updateThemeButtons(): void {
  const lightModeBtn = document.getElementById('lightModeBtn');
  const darkModeBtn = document.getElementById('darkModeBtn');
  const currentTheme = Theme.getTheme();
  
  if (lightModeBtn && darkModeBtn) {
    if (currentTheme === 'dark') {
      lightModeBtn.classList.remove('bg-primary', 'text-white');
      darkModeBtn.classList.add('bg-primary', 'text-white');
    } else {
      darkModeBtn.classList.remove('bg-primary', 'text-white');
      lightModeBtn.classList.add('bg-primary', 'text-white');
    }
  }
}

function initFormHandlers(): void {
  // Email change handler
  const emailInput = document.getElementById('email') as HTMLInputElement;
  if (emailInput) {
    emailInput.addEventListener('change', async () => {
      const newEmail = emailInput.value;
      if (newEmail) {
        // TODO: Implement API call to update email
        console.log('Email changed to:', newEmail);
        showNotification('Email will be updated (API integration pending)', 'info');
      }
    });
  }
  
  // Change password button
  const changePasswordBtn = document.getElementById('changePasswordBtn');
  if (changePasswordBtn) {
    changePasswordBtn.addEventListener('click', () => {
      // TODO: Implement password change modal/flow
      showNotification('Password change feature coming soon!', 'info');
    });
  }
  
  // 2FA toggle
  const twoFactorToggle = document.getElementById('2fa') as HTMLInputElement;
  if (twoFactorToggle) {
    twoFactorToggle.addEventListener('change', () => {
      const isEnabled = twoFactorToggle.checked;
      localStorage.setItem('twoFactorEnabled', String(isEnabled));
      showNotification(`Two-factor authentication ${isEnabled ? 'enabled' : 'disabled'}`, 'success');
    });
  }
  
  // Language selector
  const languageSelect = document.getElementById('language') as HTMLSelectElement;
  if (languageSelect) {
    languageSelect.addEventListener('change', () => {
      const selectedLanguage = languageSelect.value;
      localStorage.setItem('language', selectedLanguage);
      showNotification(`Language changed to ${selectedLanguage}`, 'success');
    });
  }
  
  // Notification toggles
  const gameInvitesToggle = document.getElementById('game-invites') as HTMLInputElement;
  const friendRequestsToggle = document.getElementById('friend-requests') as HTMLInputElement;
  const chatMessagesToggle = document.getElementById('chat-messages') as HTMLInputElement;
  
  if (gameInvitesToggle) {
    gameInvitesToggle.addEventListener('change', () => {
      localStorage.setItem('notif_gameInvites', String(gameInvitesToggle.checked));
    });
  }
  
  if (friendRequestsToggle) {
    friendRequestsToggle.addEventListener('change', () => {
      localStorage.setItem('notif_friendRequests', String(friendRequestsToggle.checked));
    });
  }
  
  if (chatMessagesToggle) {
    chatMessagesToggle.addEventListener('change', () => {
      localStorage.setItem('notif_chatMessages', String(chatMessagesToggle.checked));
    });
  }
  
  // Request data button
  const requestDataBtn = document.getElementById('requestDataBtn');
  if (requestDataBtn) {
    requestDataBtn.addEventListener('click', () => {
      // TODO: Implement GDPR data request
      showNotification('Data request feature coming soon!', 'info');
    });
  }
  
  // Delete account button
  const deleteAccountBtn = document.getElementById('deleteAccountBtn');
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', () => {
      const confirmed = confirm('Are you sure you want to delete your account? This action cannot be undone.');
      if (confirmed) {
        // TODO: Implement account deletion
        showNotification('Account deletion feature coming soon!', 'info');
      }
    });
  }
}

function showNotification(message: string, type: 'success' | 'error' | 'info'): void {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white z-50 ${
    type === 'success' ? 'bg-green-500' : 
    type === 'error' ? 'bg-red-500' : 
    'bg-blue-500'
  }`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
