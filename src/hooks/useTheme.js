/**
 * AgroSphere OS - Theme Reactive Hook
 * Architecture Layer: Hooks
 */

import { ThemeService } from '../services/themeService.js';

export function useTheme() {
  const currentTheme = ThemeService.getCurrentTheme();

  const toggle = () => {
    return ThemeService.toggleTheme();
  };

  return { theme: currentTheme, toggle };
}
