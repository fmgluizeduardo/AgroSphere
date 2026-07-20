/**
 * AgroSphere OS - Reusable Modal Component Controller
 * Architecture Layer: UI / Components
 */

import { AuditService } from '../../services/auditService.js';

export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    AuditService.logAction('MODAL_OPEN', 'USER', `Opened modal dialog '${modalId}'.`);
  }
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
  }
}
