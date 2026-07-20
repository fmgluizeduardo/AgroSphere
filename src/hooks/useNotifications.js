/**
 * AgroSphere OS - Notifications Hook
 * Architecture Layer: Hooks
 */

export function useNotifications() {
  const toggleDrawer = () => {
    const drawer = document.getElementById('notificationDrawer');
    if (drawer) {
      drawer.classList.toggle('open');
    }
  };

  return { toggleDrawer };
}
