/**
 * AgroSphere OS - Prescriptive Smart Suggestions AI Service
 * Architecture Layer: IA / Services
 */

export class SmartSuggestionsService {
  constructor(provider) {
    this.provider = provider;
  }

  async generateSuggestions(contextData) {
    return this.provider.generateStructuredAnalysis(contextData, 'SMART_SUGGESTIONS');
  }
}
