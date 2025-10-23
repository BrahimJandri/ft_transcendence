/**
 * Home Page Logic
 */
import { Theme } from '../utils/theme.js';
import { AuthService } from '../services/authService.js';
export function initHomePage() {
    // Initialize theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            Theme.toggle();
        });
    }
    // Initialize logout button if user is authenticated
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            AuthService.logout();
        });
    }
}
