/**
 * Profile Page Logic
 */

import { AuthService } from '../services/authService.js';
import { ApiService } from '../services/apiService.js';
import type { GameStats, Match } from '../types/index.js';

export function initProfilePage(): void {
  console.log('Profile page initialized');

  // Load user profile information
  loadUserProfile();
  
  // Load user stats
  loadProfileStats();
  
  // Load match history
  loadMatchHistory();

  // Initialize edit profile functionality
  initEditProfile();

  // Initialize status indicator
  initStatusIndicator();
}

function loadUserProfile(): void {
  const user = AuthService.getUser();
  
  if (user) {
    // Update profile username (large display)
    const profileUserNameElement = document.getElementById('profileUserName');
    if (profileUserNameElement) {
      profileUserNameElement.textContent = user.username;
    }

    // Update profile avatar (large display)
    const profileAvatarElement = document.getElementById('profileAvatar') as HTMLImageElement;
    if (profileAvatarElement) {
      if (user.avatar) {
        profileAvatarElement.src = user.avatar;
      }
      profileAvatarElement.alt = `${user.username}'s avatar`;
    }

    // Update profile email if element exists
    const profileEmailElement = document.getElementById('profileEmail');
    if (profileEmailElement && user.email) {
      profileEmailElement.textContent = user.email;
    }

    // Update member since date if available
    const memberSinceElement = document.getElementById('memberSince');
    if (memberSinceElement && user.createdAt) {
      const joinDate = new Date(user.createdAt);
      memberSinceElement.textContent = joinDate.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      });
    }
  }
}

async function loadProfileStats(): Promise<void> {
  try {
    const response = await ApiService.get<GameStats>('/stats/user');
    
    if (response.success && response.data) {
      const stats = response.data;
      
      // Update stats display in profile
      const winsElement = document.getElementById('profileWins');
      const lossesElement = document.getElementById('profileLosses');
      const matchesElement = document.getElementById('profileMatches');
      
      if (winsElement) winsElement.textContent = stats.wins.toString();
      if (lossesElement) lossesElement.textContent = stats.losses.toString();
      if (matchesElement) matchesElement.textContent = stats.gamesPlayed.toString();
    } else {
      // Show default values
      setDefaultProfileStats();
    }
  } catch (error) {
    console.error('Error loading profile stats:', error);
    setDefaultProfileStats();
  }
}

function setDefaultProfileStats(): void {
  const winsElement = document.getElementById('profileWins');
  const lossesElement = document.getElementById('profileLosses');
  const matchesElement = document.getElementById('profileMatches');
  
  if (winsElement) winsElement.textContent = '0';
  if (lossesElement) lossesElement.textContent = '0';
  if (matchesElement) matchesElement.textContent = '0';
}

async function loadMatchHistory(): Promise<void> {
  const matchHistoryTable = document.getElementById('matchHistoryTable');
  if (!matchHistoryTable) return;

  try {
    const response = await ApiService.get<Match[]>('/matches/recent');
    
    if (response.success && response.data && response.data.length > 0) {
      const matches = response.data.slice(0, 10); // Show 10 recent matches
      
      matchHistoryTable.innerHTML = matches.map(match => {
        const currentUser = AuthService.getUser();
        const isPlayer1 = currentUser && match.player1 === currentUser.username;
        const opponent = isPlayer1 ? match.player2 : match.player1;
        const userScore = isPlayer1 ? match.score1 : match.score2;
        const opponentScore = isPlayer1 ? match.score2 : match.score1;
        const isWin = match.winner === currentUser?.username;
        
        return `
          <tr class="border-b border-gray-200 dark:border-[#2c404a]">
            <td class="p-3 flex items-center gap-3">
              <img alt="Opponent Avatar" class="w-10 h-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
              <span>${opponent}</span>
            </td>
            <td class="p-3">
              <span class="font-semibold ${isWin ? 'text-green-500' : 'text-red-500'}">
                ${isWin ? 'Win' : 'Loss'}
              </span>
            </td>
            <td class="p-3">${userScore} - ${opponentScore}</td>
            <td class="p-3">${new Date(match.date).toLocaleDateString()}</td>
          </tr>
        `;
      }).join('');
    } else {
      // Show empty state
      matchHistoryTable.innerHTML = `
        <tr>
          <td colspan="4" class="p-8 text-center text-gray-500 dark:text-gray-400">
            No match history available. Start playing to build your history!
          </td>
        </tr>
      `;
    }
  } catch (error) {
    console.error('Error loading match history:', error);
    matchHistoryTable.innerHTML = `
      <tr>
        <td colspan="4" class="p-8 text-center text-gray-500 dark:text-gray-400">
          Unable to load match history.
        </td>
      </tr>
    `;
  }
}

/**
 * Initialize edit profile functionality
 */
function initEditProfile(): void {
  const editProfileBtn = document.getElementById('editProfileBtn');
  const editProfileModal = document.getElementById('editProfileModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelEditBtn = document.getElementById('cancelEditBtn');
  const editProfileForm = document.getElementById('editProfileForm') as HTMLFormElement;
  const uploadAvatarBtn = document.getElementById('uploadAvatarBtn');
  const avatarInput = document.getElementById('avatarInput') as HTMLInputElement;
  const previewAvatar = document.getElementById('previewAvatar') as HTMLImageElement;

  if (!editProfileBtn || !editProfileModal || !editProfileForm) return;

  // Open modal
  editProfileBtn.addEventListener('click', () => {
    const user = AuthService.getUser();
    if (user) {
      // Pre-fill form with current user data
      const editEmail = document.getElementById('editEmail') as HTMLInputElement;
      const editUsername = document.getElementById('editUsername') as HTMLInputElement;
      
      if (editEmail) editEmail.value = user.email || '';
      if (editUsername) editUsername.value = user.username || '';
      if (previewAvatar && user.avatar) previewAvatar.src = user.avatar;
    }
    
    editProfileModal.classList.remove('hidden');
  });

  // Close modal
  const closeModal = () => {
    editProfileModal.classList.add('hidden');
    editProfileForm.reset();
    hideMessages();
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (cancelEditBtn) cancelEditBtn.addEventListener('click', closeModal);

  // Click outside modal to close
  editProfileModal.addEventListener('click', (e) => {
    if (e.target === editProfileModal) {
      closeModal();
    }
  });

  // Handle avatar upload button click
  if (uploadAvatarBtn && avatarInput) {
    uploadAvatarBtn.addEventListener('click', () => {
      avatarInput.click();
    });

    // Preview avatar when file is selected
    avatarInput.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
          showError('Please select a valid image file');
          return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          showError('Image size must be less than 5MB');
          return;
        }

        // Preview the image
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result && previewAvatar) {
            previewAvatar.src = event.target.result as string;
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Handle form submission
  editProfileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideMessages();

    const editEmail = document.getElementById('editEmail') as HTMLInputElement;
    const currentPassword = document.getElementById('currentPassword') as HTMLInputElement;
    const newPassword = document.getElementById('newPassword') as HTMLInputElement;
    const confirmPassword = document.getElementById('confirmPassword') as HTMLInputElement;

    const user = AuthService.getUser();
    if (!user) {
      showError('User not found. Please login again.');
      return;
    }

    // Validate passwords if changing password
    if (newPassword.value) {
      if (!currentPassword.value) {
        showError('Please enter your current password');
        return;
      }

      if (newPassword.value.length < 6) {
        showError('New password must be at least 6 characters');
        return;
      }

      if (newPassword.value !== confirmPassword.value) {
        showError('New passwords do not match');
        return;
      }
    }

    // Validate email
    if (editEmail.value && !isValidEmail(editEmail.value)) {
      showError('Please enter a valid email address');
      return;
    }

    try {
      // Prepare update data
      const updates: any = {};
      let hasChanges = false;

      // Check if email changed
      if (editEmail.value && editEmail.value !== user.email) {
        updates.email = editEmail.value;
        hasChanges = true;
      }

      // Check if password is being changed
      if (newPassword.value) {
        updates.currentPassword = currentPassword.value;
        updates.newPassword = newPassword.value;
        hasChanges = true;
      }

      // Check if avatar changed
      if (avatarInput.files && avatarInput.files[0]) {
        // Convert image to base64
        const avatarBase64 = await fileToBase64(avatarInput.files[0]);
        updates.avatar = avatarBase64;
        hasChanges = true;
      }

      if (!hasChanges) {
        showError('No changes detected');
        return;
      }

      // Update user profile (for now, update localStorage)
      // In a real app, this would be an API call
      const updatedUser = { ...user, ...updates };
      
      // Validate current password if changing password
      if (updates.newPassword) {
        // In real app, verify with backend
        // For demo, just update the user object
        delete updatedUser.currentPassword;
        updatedUser.password = updates.newPassword;
        delete updatedUser.newPassword;
      }

      // Save updated user
      AuthService.setUser(updatedUser);

      // Update all avatar and email elements on the page
      if (updates.avatar) {
        updateAllAvatars(updates.avatar);
      }

      if (updates.email) {
        const emails = document.querySelectorAll('#userEmail, #profileEmail, .user-email');
        emails.forEach(emailEl => {
          if (emailEl) {
            emailEl.textContent = updates.email;
          }
        });
      }

      showSuccess('Profile updated successfully!');
      
      // Close modal after 1.5 seconds
      setTimeout(() => {
        closeModal();
      }, 1500);

    } catch (error) {
      console.error('Error updating profile:', error);
      showError('Failed to update profile. Please try again.');
    }
  });
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Convert file to base64
 */
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Show error message
 */
function showError(message: string): void {
  const errorEl = document.getElementById('editProfileError');
  const successEl = document.getElementById('editProfileSuccess');
  
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
  }
  if (successEl) {
    successEl.classList.add('hidden');
  }
}

/**
 * Show success message
 */
function showSuccess(message: string): void {
  const errorEl = document.getElementById('editProfileError');
  const successEl = document.getElementById('editProfileSuccess');
  
  if (successEl) {
    successEl.textContent = message;
    successEl.classList.remove('hidden');
  }
  if (errorEl) {
    errorEl.classList.add('hidden');
  }
}

/**
 * Hide all messages
 */
function hideMessages(): void {
  const errorEl = document.getElementById('editProfileError');
  const successEl = document.getElementById('editProfileSuccess');
  
  if (errorEl) errorEl.classList.add('hidden');
  if (successEl) successEl.classList.add('hidden');
}

/**
 * Update all avatar instances across the application
 */
function updateAllAvatars(avatarUrl: string): void {
  // Update all avatar elements on the page
  const avatars = document.querySelectorAll('#userAvatar, #profileAvatar, .user-avatar, .chat-user-avatar');
  avatars.forEach(avatar => {
    if (avatar instanceof HTMLImageElement) {
      avatar.src = avatarUrl;
    }
  });

  // Also update any inline style background images
  const bgAvatars = document.querySelectorAll('[data-user-avatar-bg]');
  bgAvatars.forEach(el => {
    if (el instanceof HTMLElement) {
      el.style.backgroundImage = `url('${avatarUrl}')`;
    }
  });

  // Trigger a custom event so chat and other components can update
  window.dispatchEvent(new CustomEvent('userAvatarUpdated', { 
    detail: { avatarUrl } 
  }));
}

/**
 * Initialize status indicator functionality
 */
function initStatusIndicator(): void {
  const statusIndicator = document.getElementById('statusIndicator');
  const statusText = document.querySelector('.text-green-500.mt-1') as HTMLElement;

  if (!statusIndicator) return;

  // Available statuses
  const statuses = [
    { name: 'Online', color: 'bg-green-500', textColor: 'text-green-500' },
    { name: 'Away', color: 'bg-yellow-500', textColor: 'text-yellow-500' },
    { name: 'Do Not Disturb', color: 'bg-red-500', textColor: 'text-red-500' },
    { name: 'Offline', color: 'bg-gray-500', textColor: 'text-gray-500' }
  ];

  let currentStatusIndex = 0;

  // Handle status indicator click
  statusIndicator.addEventListener('click', () => {
    // Cycle to next status
    currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
    const newStatus = statuses[currentStatusIndex];

    // Remove all color classes
    statusIndicator.classList.remove('bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-gray-500');
    
    // Add new color class
    statusIndicator.classList.add(newStatus.color);

    // Update status text
    if (statusText) {
      statusText.classList.remove('text-green-500', 'text-yellow-500', 'text-red-500', 'text-gray-500');
      statusText.classList.add(newStatus.textColor);
      statusText.textContent = newStatus.name;
    }

    // Update tooltip
    statusIndicator.title = `Status: ${newStatus.name}. Click to change`;

    // Save status to user profile (optional)
    const user = AuthService.getUser();
    if (user) {
      user.status = newStatus.name;
      AuthService.setUser(user);
    }

    // Show a brief notification
    showStatusNotification(newStatus.name);
  });
}

/**
 * Show a brief status change notification
 */
function showStatusNotification(status: string): void {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'fixed bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300';
  notification.textContent = `Status changed to ${status}`;
  
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateY(0)';
  }, 10);

  // Remove after 2 seconds
  setTimeout(() => {
    notification.style.transform = 'translateY(100px)';
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}
