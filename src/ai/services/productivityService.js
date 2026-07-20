/**
 * AgroSphere OS - Yield Productivity AI Service
 * Architecture Layer: IA / Services
 */

export class ProductivityService {
  constructor(provider) {
    this.provider = provider;
  }

  async evaluateHectareProductivity(harvestData) {
    return this.provider.generateStructuredAnalysis(harvestData, 'PRODUCTIVITY_HECTARE');
  }
}
