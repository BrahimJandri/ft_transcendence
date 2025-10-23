/**
 * Theme Utility - Dark/Light mode toggle with persistence
 */

import { Storage } from './storage.js';

export class Theme {
  private static readonly THEME_KEY = 'theme';
  private static readonly DARK_CLASS = 'dark';

  /**
   * Initialize theme from storage or system preference
   */
  static init(): void {
    const savedTheme = Storage.get<string>(this.THEME_KEY);
    
    if (savedTheme) {
      this.setTheme(savedTheme as 'light' | 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  /**
   * Toggle between light and dark theme
   */
  static toggle(): void {
    const current = this.getTheme();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  /**
   * Set theme
   */
  static setTheme(theme: 'light' | 'dark'): void {
    if (theme === 'dark') {
      document.documentElement.classList.add(this.DARK_CLASS);
    } else {
      document.documentElement.classList.remove(this.DARK_CLASS);
    }
    
    Storage.set(this.THEME_KEY, theme);
  }

  /**
   * Get current theme
   */
  static getTheme(): 'light' | 'dark' {
    return document.documentElement.classList.contains(this.DARK_CLASS) ? 'dark' : 'light';
  }

  /**
   * Check if dark mode is active
   */
  static isDark(): boolean {
    return this.getTheme() === 'dark';
  }
}
