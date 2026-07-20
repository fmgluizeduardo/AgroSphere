/**
 * AgroSphere OS - Agricultural & Soil Analysis AI Service
 * Architecture Layer: IA / Services
 */

export class AgriculturalAnalysisService {
  constructor(provider) {
    this.provider = provider;
  }

  async analyzeSoilHealth(soilData) {
    return this.provider.generateStructuredAnalysis(soilData, 'AGRICULTURAL_SOIL');
  }

  async evaluatePestRisk(telemetryData) {
    return this.provider.generateStructuredAnalysis(telemetryData, 'AGRICULTURAL_PEST_RISK');
  }
}
