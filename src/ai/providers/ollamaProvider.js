/**
 * AgroSphere OS - Ollama Provider Strategy
 * Architecture Layer: IA / Providers
 * Prepared for local Ollama HTTP endpoints (Llama 3, Qwen, Mistral, Gemma)
 */

import { BaseAIProvider } from './baseAIProvider.js';

export class OllamaProvider extends BaseAIProvider {
  constructor(config = {}) {
    super(config);
    this.endpoint = config.endpoint || 'http://localhost:11434/api/generate';
    this.model = config.model || 'llama3';
  }

  getProviderName() {
    return 'OllamaProvider';
  }

  isConfigured() {
    return Boolean(this.endpoint);
  }

  async generateCompletion(prompt, options = {}) {
    return `[Ollama Provider - ${this.model}] Local endpoint configured at ${this.endpoint}. Prompt received.`;
  }

  async generateChatResponse(messages, options = {}) {
    return {
      role: 'assistant',
      content: `[Ollama Provider - ${this.model}] Local LLM conversational response stub.`
    };
  }

  async generateStructuredAnalysis(contextData, analysisType) {
    return {
      category: analysisType,
      summary: `[Ollama Local Engine] Local model ${this.model} analysis ready.`,
      recommendations: ['Check Ollama local service health at http://localhost:11434.'],
      confidenceScore: 0.90
    };
  }
}
