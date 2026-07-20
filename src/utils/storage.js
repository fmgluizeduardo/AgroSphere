/**
 * AgroSphere OS - Local Storage Wrapper
 * Architecture Layer: Utils
 */

export const Storage = {
  get(key, fallback = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (e) {
      console.warn(`[AgroSphere Storage] Error reading key '${key}':`, e);
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`[AgroSphere Storage] Error writing key '${key}':`, e);
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn(`[AgroSphere Storage] Error removing key '${key}':`, e);
    }
  }
};
