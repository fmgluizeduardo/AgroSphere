/**
 * AgroSphere OS - Unique Identifier Generator
 * Architecture Layer: Utils
 */

export function generateLogId() {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `LOG-2026-${randomNum}`;
}

export function generateUUID() {
  if (crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
