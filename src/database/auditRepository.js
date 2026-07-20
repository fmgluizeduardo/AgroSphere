/**
 * AgroSphere OS - Audit Trail Repository
 * Architecture Layer: Database
 */

import { generateLogId } from '../utils/id.js';
import { formatUTCTimestamp } from '../utils/formatters.js';

const INITIAL_AUDIT_LOGS = [
  {
    id: "LOG-2026-0898",
    timestamp: "2026-07-20 19:30:11 UTC",
    actor: "Design System Core",
    action: "DESIGN_SYSTEM_LOAD",
    category: "SYSTEM",
    details: "Standardized Design System initialized with 24 UI primitives and Dark Mode theme contract.",
    status: "SUCCESS"
  },
  {
    id: "LOG-2026-0895",
    timestamp: "2026-07-20 19:10:04 UTC",
    actor: "Executive Cockpit",
    action: "EXECUTIVE_METRICS_FETCH",
    category: "SYSTEM",
    details: "Executive Dashboard synchronized KPIs for 14.850 ha cultivated area and R$ 48.25M gross yield.",
    status: "SUCCESS"
  },
  {
    id: "LOG-2026-0894",
    timestamp: "2026-07-20 18:58:32 UTC",
    actor: "AgroSphere AI Prescriptive Engine",
    action: "AI_HARVEST_OPTIMIZE",
    category: "SYSTEM",
    details: "AI Model #4 computed optimal harvest window for Sector S-04 (+18.4% predicted yield).",
    status: "SUCCESS"
  },
  {
    id: "LOG-2026-0893",
    timestamp: "2026-07-20 18:45:12 UTC",
    actor: "System Migration Engine",
    action: "BRAND_NAME_MIGRATION",
    category: "SYSTEM",
    details: "AgroSphere OS Executive Cockpit & Landing Page initialized with Dark Mode default.",
    status: "SUCCESS"
  }
];

class AuditRepository {
  constructor() {
    this.logs = [...INITIAL_AUDIT_LOGS];
  }

  getAll() {
    return [...this.logs];
  }

  add(entry) {
    const newLog = {
      id: generateLogId(),
      timestamp: formatUTCTimestamp(),
      actor: entry.actor || 'Executive Operator',
      action: entry.action,
      category: entry.category || 'SYSTEM',
      details: entry.details,
      status: 'SUCCESS'
    };
    this.logs.unshift(newLog);
    return newLog;
  }
}

export const auditRepository = new AuditRepository();
