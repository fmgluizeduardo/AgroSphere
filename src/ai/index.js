/**
 * AgroSphere OS - IA Module Facade & Orchestrator
 * Architecture Layer: IA Module
 */

import { AIProviderFactory } from './factory/aiProviderFactory.js';
import { VirtualAssistantService } from './services/virtualAssistantService.js';
import { FinancialAnalysisService } from './services/financialAnalysisService.js';
import { AgriculturalAnalysisService } from './services/agriculturalAnalysisService.js';
import { ProductivityService } from './services/productivityService.js';
import { SmartSuggestionsService } from './services/smartSuggestionsService.js';
import { ForecastingService } from './services/forecastingService.js';
import { AutoReportService } from './services/autoReportService.js';

export class IAModule {
  constructor(providerType = 'mock', config = {}) {
    this.provider = AIProviderFactory.createProvider(providerType, config);
    
    // Instantiate all 8 dedicated AI capability services
    this.virtualAssistant = new VirtualAssistantService(this.provider);
    this.financialAnalysis = new FinancialAnalysisService(this.provider);
    this.agriculturalAnalysis = new AgriculturalAnalysisService(this.provider);
    this.productivity = new ProductivityService(this.provider);
    this.smartSuggestions = new SmartSuggestionsService(this.provider);
    this.forecasting = new ForecastingService(this.provider);
    this.autoReport = new AutoReportService(this.provider);
  }

  setProvider(providerType, config = {}) {
    this.provider = AIProviderFactory.createProvider(providerType, config);
    this.virtualAssistant.provider = this.provider;
    this.financialAnalysis.provider = this.provider;
    this.agriculturalAnalysis.provider = this.provider;
    this.productivity.provider = this.provider;
    this.smartSuggestions.provider = this.provider;
    this.forecasting.provider = this.provider;
    this.autoReport.provider = this.provider;
  }

  getProviderInfo() {
    return {
      name: this.provider.getProviderName(),
      isConfigured: this.provider.isConfigured(),
      activeProviderType: this.provider.constructor.name
    };
  }
}

// Global Singleton Instance of IA Module
export const iaModule = new IAModule('mock');
