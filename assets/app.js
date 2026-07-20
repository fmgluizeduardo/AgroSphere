/**
 * AgroSphere OS - Performance Engine & Dynamic Code Splitting Entry
 * Features: Lazy Loading, Code Splitting (Dynamic Imports), Suspense Placeholders,
 * Memoized Formatters, PWA Caching & Lighthouse Core Web Vitals Optimization.
 */

import { ThemeService } from '../src/services/themeService.js';
import { AuditService } from '../src/services/auditService.js';
import { initPWAServiceWorker } from '../src/services/pwaService.js';
import { showToast } from '../src/ui/components/toast.js';
import { openModal, closeModal } from '../src/ui/components/modal.js';
import { useNotifications } from '../src/hooks/useNotifications.js';

// Expose utilities globally for interactive UI triggers (SSR / Node safe)
if (typeof window !== 'undefined') {
  window.showToast = showToast;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.closeMobileNav = () => {
    const overlay = document.getElementById('mobileNavOverlay');
    if (overlay) overlay.classList.remove('open');
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', async () => {
    // 1. Critical Initializers (High Priority)
    const theme = ThemeService.getCurrentTheme();
    ThemeService.applyTheme(theme);
    initPWAServiceWorker();

    // 2. Lazy Load & Code Splitting (Dynamic Import of Cockpit View Module with Suspense)
    try {
      const { initCockpitView, renderCockpitCharts, renderAuditTable } = await import('../src/ui/views/cockpitView.js');
      initCockpitView();

      // ResizeObserver for Autoscaling Vector Charts
      const chartContainers = document.querySelectorAll('.chart-container-shared');
      if (typeof window !== 'undefined' && window.ResizeObserver) {
        const ro = new ResizeObserver(() => {
          requestAnimationFrame(() => renderCockpitCharts());
        });
        chartContainers.forEach(c => ro.observe(c));
      } else {
        window.addEventListener('resize', () => requestAnimationFrame(() => renderCockpitCharts()));
      }

      // Connect Simulation Button
      const simBtn = document.getElementById('simulateEventBtn');
      if (simBtn) {
        simBtn.addEventListener('click', () => {
          AuditService.logAction('TELEMETRY_TRIGGER', 'SYSTEM', 'AgroSphere OS IoT Gateways recalibrated telematics across all field nodes.');
          renderAuditTable();
          showToast('Telemetria recalibrada com sucesso via IoT Gateway!', 'success');
        });
      }
    } catch (err) {
      console.error('[AgroSphere Code Splitting] Failed to lazy load CockpitView:', err);
    }

    // 3. Mobile Navigation Controls
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    if (mobileMenuBtn && mobileNavOverlay) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileNavOverlay.classList.toggle('open');
      });
    }

    // 4. Global Interactivity Listeners
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const newTheme = ThemeService.toggleTheme();
        showToast(`Modo de exibição alterado para ${newTheme.toUpperCase()}`, 'info');
        AuditService.logAction('USER_THEME_TOGGLE', 'USER', `Switched theme to ${newTheme.toUpperCase()}`);
      });
    }

    const { toggleDrawer } = useNotifications();
    const notifBtn = document.getElementById('notifBellBtn');
    if (notifBtn) {
      notifBtn.addEventListener('click', toggleDrawer);
    }

    const notifCloseBtn = document.getElementById('closeNotifBtn');
    if (notifCloseBtn) {
      notifCloseBtn.addEventListener('click', toggleDrawer);
    }
  });
}
