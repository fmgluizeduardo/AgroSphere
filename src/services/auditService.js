/**
 * AgroSphere OS - Audit Service
 * Architecture Layer: Services
 */

import { auditRepository } from '../database/auditRepository.js';

export const AuditService = {
  getLogs() {
    return auditRepository.getAll();
  },

  logAction(action, category, details, actor = 'Executive Operator') {
    return auditRepository.add({ action, category, details, actor });
  }
};
