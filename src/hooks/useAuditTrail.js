/**
 * AgroSphere OS - Audit Trail Hook
 * Architecture Layer: Hooks
 */

import { AuditService } from '../services/auditService.js';

export function useAuditTrail() {
  const getLogs = () => AuditService.getLogs();
  const log = (action, category, details, actor) => AuditService.logAction(action, category, details, actor);

  return { getLogs, log };
}
