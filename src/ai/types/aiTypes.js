/**
 * AgroSphere OS - AI Module Type Definitions
 * Architecture Layer: IA / Types
 */

/**
 * @typedef {Object} AIMessage
 * @property {('system'|'user'|'assistant')} role - Message sender role
 * @property {string} content - Message text content
 * @property {string} [timestamp] - ISO timestamp
 */

/**
 * @typedef {Object} AICompletionOptions
 * @property {number} [temperature=0.7] - Model temperature
 * @property {number} [maxTokens=1000] - Token budget limit
 * @property {string} [systemPrompt] - System prompt directive
 */

/**
 * @typedef {Object} AIAnalysisResult
 * @property {string} category - Analysis area (FINANCIAL|AGRICULTURAL|PRODUCTIVITY)
 * @property {string} summary - Key findings executive summary
 * @property {string[]} recommendations - Actionable prescriptive suggestions
 * @property {number} confidenceScore - AI confidence rating (0-1.0)
 */

export {};
