/**
 * AgroSphere OS - AI Provider Factory
 * Architecture Layer: IA / Factory
 */

import { OpenAIProvider } from '../providers/openAIProvider.js';
import { OllamaProvider } from '../providers/ollamaProvider.js';
import { LocalModelProvider } from '../providers/localModelProvider.js';
import { MockAIProvider } from '../providers/mockAIProvider.js';

export class AIProviderFactory {
  static createProvider(type = 'mock', config = {}) {
    switch (type.toLowerCase()) {
      case 'openai':
        return new OpenAIProvider(config);
      case 'ollama':
        return new OllamaProvider(config);
      case 'local':
        return new LocalModelProvider(config);
      case 'mock':
      default:
        return new MockAIProvider(config);
    }
  }
}
