/**
 * AgroSphere OS - Toast Notification Component
 * Architecture Layer: UI / Components
 */

export function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const icons = {
    success: '✅',
    warning: '⚠️',
    danger: '🚨',
    info: 'ℹ️'
  };

  const toast = document.createElement('div');
  toast.className = `toast alert-${type}`;
  toast.innerHTML = `
    <span>${icons[type] || 'ℹ️'}</span>
    <span style="flex: 1;">${message}</span>
    <button style="background: none; border: none; color: currentColor; cursor: pointer;" onclick="this.parentElement.remove()">✕</button>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.remove();
    }
  }, 4000);
}
