/**
 * AgroSphere OS - Domain Types & Schema Declarations
 * Architecture Layer: Types
 */

/**
 * @typedef {Object} AuditLogEntry
 * @property {string} id - Unique log event ID (e.g., LOG-2026-0898)
 * @property {string} timestamp - UTC timestamp string
 * @property {string} actor - User or system process executing the action
 * @property {string} action - Event code (e.g., BRAND_NAME_MIGRATION)
 * @property {('SYSTEM'|'PWA'|'DB'|'USER'|'AUDIT')} category - System event category
 * @property {string} details - Detailed human-readable log details
 * @property {('SUCCESS'|'FAILURE'|'PENDING')} status - Action execution status
 */

/**
 * @typedef {Object} KPIMetric
 * @property {string} title - Display title
 * @property {string} value - Main formatted value
 * @property {string} trend - Trend indicator description
 * @property {boolean} isPositive - True if trend is positive
 * @property {string} icon - Emoji or SVG icon representation
 */

/**
 * @typedef {Object} ChartDataset
 * @property {string} name - Dataset series name
 * @property {number[]} data - Array of numerical values
 * @property {string} color - Hex/RGB color code
 */

export {};
