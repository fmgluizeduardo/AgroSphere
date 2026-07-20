/**
 * AgroSphere OS - Theme State Management Service
 * Architecture Layer: Services
 */

import { Storage } from '../utils/storage.js';

const THEME_KEY = 'agrosphere-theme';

export const ThemeService = {
  getCurrentTheme() {
    return Storage.get(THEME_KEY, 'dark'); // Default Dark Mode
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    Storage.set(THEME_KEY, theme);
    this.updateToggleButtons(theme);
  },

  toggleTheme() {
    const newTheme = this.getCurrentTheme() === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    return newTheme;
  },

  updateToggleButtons(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  }
};
