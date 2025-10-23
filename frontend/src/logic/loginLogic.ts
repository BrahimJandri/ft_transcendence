/**
 * Login Page Logic
 */

import { AuthService } from '../services/authService.js';
import { Validator } from '../utils/validator.js';
import { Theme } from '../utils/theme.js';

export function initLoginPage(): void {
  const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;
  const errorMessage = document.getElementById('errorMessage');
  const successMessage = document.getElementById('successMessage');
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const passwordInput = document.getElementById('password') as HTMLInputElement;

  // Initialize password toggle functionality
  const togglePassword = document.getElementById('togglePassword');
  if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', () => {
      const icon = togglePassword.querySelector('.material-symbols-outlined');
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        if (icon) icon.textContent = 'visibility';
      } else {
        passwordInput.type = 'password';
        if (icon) icon.textContent = 'visibility_off';
      }
    });
  }

  // Initialize forgot password functionality
  const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
  if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener('click', () => {
      const email = emailInput?.value || '';
      
      if (!email) {
        showError('Please enter your email address first');
        emailInput?.focus();
        return;
      }

      if (!Validator.isValidEmail(email)) {
        showError('Please enter a valid email address');
        emailInput?.focus();
        return;
      }

      // Show success message for now (you can implement actual password reset later)
      showSuccess(`Password reset instructions have been sent to ${email}`);
      
      // TODO: Implement actual password reset API call
      // await AuthService.resetPassword(email);
    });
  }

  if (!loginBtn) return;

  loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    // Hide previous messages
    errorMessage?.classList.add('hidden');
    successMessage?.classList.add('hidden');

    // Get form data
    const email = emailInput?.value || '';
    const password = passwordInput?.value || '';

    // Validate inputs
    if (!Validator.isRequired(email)) {
      showError('Email is required');
      return;
    }

    if (!Validator.isRequired(password)) {
      showError('Password is required');
      return;
    }

    // Show loading state
    loginBtn.disabled = true;
    const originalText = loginBtn.innerHTML;
    loginBtn.innerHTML = '<span class="truncate">Signing in...</span>';

    try {
      // Attempt login  (using email as username for now)
      const response = await AuthService.login({ username: email, password });

      if (response.success) {
        showSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      } else {
        showError(response.message || 'Login failed. Please try again.');
        loginBtn.disabled = false;
        loginBtn.innerHTML = originalText;
      }
    } catch (error) {
      showError('An error occurred. Please try again later.');
      loginBtn.disabled = false;
      loginBtn.innerHTML = originalText;
    }
  });

  function showError(message: string): void {
    // Hide success message first
    successMessage?.classList.add('hidden');
    
    if (errorMessage) {
      const p = errorMessage.querySelector('p');
      if (p) p.textContent = message;
      errorMessage.classList.remove('hidden');
    }
  }

  function showSuccess(message: string): void {
    // Hide error message first
    errorMessage?.classList.add('hidden');
    
    if (successMessage) {
      const p = successMessage.querySelector('p');
      if (p) p.textContent = message;
      successMessage.classList.remove('hidden');
    }
  }
}
