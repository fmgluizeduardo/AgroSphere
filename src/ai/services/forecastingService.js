/**
 * AgroSphere OS - Predictive Forecasting AI Service
 * Architecture Layer: IA / Services
 */

export class ForecastingService {
  constructor(provider) {
    this.provider = provider;
  }

  async forecastHarvestYield(cropData) {
    return this.provider.generateStructuredAnalysis(cropData, 'YIELD_FORECAST');
  }
}
