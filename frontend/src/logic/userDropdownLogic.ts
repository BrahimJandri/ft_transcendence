/**
 * User Dropdown Logic - Handle user menu interactions
 */

import { AuthService } from '../services/authService.js';

export function initUserDropdown(): void {
  const userMenuBtn = document.getElementById('userMenuBtn');
  const userDropdown = document.getElementById('userDropdown');
  const userMenuIcon = document.getElementById('userMenuIcon');
  const dropdownLogoutBtn = document.getElementById('dropdownLogoutBtn');

  if (!userMenuBtn || !userDropdown) return;

  let isOpen = false;

  // Toggle dropdown
  userMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen = !isOpen;
    
    if (isOpen) {
      userDropdown.classList.remove('hidden');
      if (userMenuIcon) {
        userMenuIcon.style.transform = 'rotate(180deg)';
      }
    } else {
      userDropdown.classList.add('hidden');
      if (userMenuIcon) {
        userMenuIcon.style.transform = 'rotate(0deg)';
      }
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (isOpen && !userDropdown.contains(e.target as Node) && e.target !== userMenuBtn) {
      isOpen = false;
      userDropdown.classList.add('hidden');
      if (userMenuIcon) {
        userMenuIcon.style.transform = 'rotate(0deg)';
      }
    }
  });

  // Handle logout from dropdown
  if (dropdownLogoutBtn) {
    dropdownLogoutBtn.addEventListener('click', () => {
      AuthService.logout();
    });
  }

  // Load user data into dropdown
  loadUserDataToDropdown();
}

/**
 * Load user data into the dropdown
 */
function loadUserDataToDropdown(): void {
  const user = AuthService.getUser();
  
  if (user) {
    const dropdownUserName = document.getElementById('dropdownUserName');
    const dropdownUserEmail = document.getElementById('dropdownUserEmail');
    
    if (dropdownUserName) dropdownUserName.textContent = user.username;
    if (dropdownUserEmail && user.email) dropdownUserEmail.textContent = user.email;
  }
}
