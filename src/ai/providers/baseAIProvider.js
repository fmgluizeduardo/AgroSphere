/**
 * AgroSphere OS - Abstract Base AI Provider
 * Architecture Layer: IA / Providers
 */

export class BaseAIProvider {
  constructor(config = {}) {
    this.config = config;
  }

  getProviderName() {
    return 'BaseAIProvider';
  }

  isConfigured() {
    return false;
  }

  async generateCompletion(prompt, options = {}) {
    throw new Error(`Method 'generateCompletion()' must be implemented by ${this.getProviderName()}`);
  }

  async generateChatResponse(messages, options = {}) {
    throw new Error(`Method 'generateChatResponse()' must be implemented by ${this.getProviderName()}`);
  }

  async generateStructuredAnalysis(contextData, analysisType) {
    throw new Error(`Method 'generateStructuredAnalysis()' must be implemented by ${this.getProviderName()}`);
  }
}
