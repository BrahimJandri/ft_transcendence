/**
 * Theme Utility - Dark/Light mode toggle with persistence
 */
import { Storage } from './storage.js';
export class Theme {
    /**
     * Initialize theme from storage or system preference
     */
    static init() {
        const savedTheme = Storage.get(this.THEME_KEY);
        if (savedTheme) {
            this.setTheme(savedTheme);
        }
        else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.setTheme(prefersDark ? 'dark' : 'light');
        }
    }
    /**
     * Toggle between light and dark theme
     */
    static toggle() {
        const current = this.getTheme();
        const newTheme = current === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
    /**
     * Set theme
     */
    static setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add(this.DARK_CLASS);
        }
        else {
            document.documentElement.classList.remove(this.DARK_CLASS);
        }
        Storage.set(this.THEME_KEY, theme);
    }
    /**
     * Get current theme
     */
    static getTheme() {
        return document.documentElement.classList.contains(this.DARK_CLASS) ? 'dark' : 'light';
    }
    /**
     * Check if dark mode is active
     */
    static isDark() {
        return this.getTheme() === 'dark';
    }
}
Theme.THEME_KEY = 'theme';
Theme.DARK_CLASS = 'dark';
