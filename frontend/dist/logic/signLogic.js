/**
 * Sign Up Page Logic
 */
import { AuthService } from '../services/authService.js';
import { Validator } from '../utils/validator.js';
import { Theme } from '../utils/theme.js';
export function initSignPage() {
    const signupForm = document.getElementById('signupForm');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    const signupBtn = document.getElementById('signupBtn');
    // Initialize theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            Theme.toggle();
        });
    }
    // Initialize password toggle functionality
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    // Initialize avatar upload functionality
    const avatarUpload = document.getElementById('avatar-upload');
    const avatarPreview = document.getElementById('avatar-preview');
    if (avatarUpload && avatarPreview) {
        avatarUpload.addEventListener('change', (e) => {
            const target = e.target;
            const file = target.files?.[0];
            if (file) {
                // Validate file type
                if (!file.type.startsWith('image/')) {
                    showError('Please select a valid image file');
                    return;
                }
                // Validate file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    showError('Image size should not exceed 5MB');
                    return;
                }
                // Create a FileReader to preview the image
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (event.target?.result) {
                        avatarPreview.src = event.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const icon = togglePassword.querySelector('.material-symbols-outlined');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                if (icon)
                    icon.textContent = 'visibility';
            }
            else {
                passwordInput.type = 'password';
                if (icon)
                    icon.textContent = 'visibility_off';
            }
        });
    }
    if (toggleConfirmPassword && confirmPasswordInput) {
        toggleConfirmPassword.addEventListener('click', () => {
            const icon = toggleConfirmPassword.querySelector('.material-symbols-outlined');
            if (confirmPasswordInput.type === 'password') {
                confirmPasswordInput.type = 'text';
                if (icon)
                    icon.textContent = 'visibility';
            }
            else {
                confirmPasswordInput.type = 'password';
                if (icon)
                    icon.textContent = 'visibility_off';
            }
        });
    }
    if (!signupForm)
        return;
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Hide previous messages
        errorMessage?.classList.add('hidden');
        successMessage?.classList.add('hidden');
        // Get form data
        const formData = new FormData(signupForm);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        // Validate username
        const usernameValidation = Validator.isValidUsername(username);
        if (!usernameValidation.valid) {
            showError(usernameValidation.message || 'Invalid username');
            return;
        }
        // Validate email
        if (!Validator.isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }
        // Validate password
        const passwordValidation = Validator.isValidPassword(password);
        if (!passwordValidation.valid) {
            showError(passwordValidation.message || 'Invalid password');
            return;
        }
        // Check if passwords match
        if (!Validator.passwordsMatch(password, confirmPassword)) {
            showError('Passwords do not match');
            return;
        }
        // Show loading state
        signupBtn.disabled = true;
        signupBtn.textContent = 'Creating Account...';
        try {
            // Attempt registration
            const response = await AuthService.register({ username, email, password });
            if (response.success) {
                showSuccess('Account created successfully! Redirecting to login page...');
                setTimeout(() => {
                    window.location.href = '/login';
                }, 1500);
            }
            else {
                showError(response.message || 'Registration failed. Please try again.');
                signupBtn.disabled = false;
                signupBtn.textContent = 'Create Account';
            }
        }
        catch (error) {
            showError('An error occurred. Please try again later.');
            signupBtn.disabled = false;
            signupBtn.textContent = 'Create Account';
        }
    });
    function showError(message) {
        // Hide success message first
        successMessage?.classList.add('hidden');
        if (errorMessage) {
            const p = errorMessage.querySelector('p');
            if (p) {
                p.textContent = message;
            }
            else {
                errorMessage.textContent = message;
            }
            errorMessage.classList.remove('hidden');
        }
    }
    function showSuccess(message) {
        // Hide error message first
        errorMessage?.classList.add('hidden');
        if (successMessage) {
            const p = successMessage.querySelector('p');
            if (p) {
                p.textContent = message;
            }
            else {
                successMessage.textContent = message;
            }
            successMessage.classList.remove('hidden');
        }
    }
}
