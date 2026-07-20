/**
 * AgroSphere OS - PWA Service Worker Handler
 * Architecture Layer: Services
 */

export function initPWAServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          console.log('[AgroSphere PWA Service] Service Worker operational:', reg.scope);
        })
        .catch(err => {
          console.warn('[AgroSphere PWA Service] Service Worker registration failed:', err);
        });
    });
  }
}
