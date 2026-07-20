/**
 * AgroSphere OS - Financial Analysis AI Service
 * Architecture Layer: IA / Services
 */

export class FinancialAnalysisService {
  constructor(provider) {
    this.provider = provider;
  }

  async analyzeMargins(financialData) {
    return this.provider.generateStructuredAnalysis(financialData, 'FINANCIAL_MARGINS');
  }

  async forecastCashflow(financialData) {
    return this.provider.generateStructuredAnalysis(financialData, 'CASHFLOW_FORECAST');
  }
}
