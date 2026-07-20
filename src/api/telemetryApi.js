/**
 * AgroSphere OS - Telemetry API Client
 * Architecture Layer: API
 */

import { ApiClient } from './apiClient.js';

export const TelemetryApi = {
  async fetchFieldNodes() {
    return ApiClient.request('/api/v1/telemetry/nodes');
  },

  async triggerRecalibration(sectorId) {
    return ApiClient.request(`/api/v1/telemetry/recalibrate/${sectorId}`, { method: 'POST' });
  }
};
