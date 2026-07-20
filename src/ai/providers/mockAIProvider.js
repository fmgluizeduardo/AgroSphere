/**
 * AgroSphere OS - Mock AI Provider for Offline Development & Preview
 * Architecture Layer: IA / Providers
 */

import { BaseAIProvider } from './baseAIProvider.js';

export class MockAIProvider extends BaseAIProvider {
  constructor(config = {}) {
    super(config);
  }

  getProviderName() {
    return 'MockAIProvider';
  }

  isConfigured() {
    return true;
  }

  async generateCompletion(prompt, options = {}) {
    return `[Mock AI Engine] Responded to prompt: "${prompt.substring(0, 40)}...". All systems operational.`;
  }

  async generateChatResponse(messages, options = {}) {
    const lastMsg = messages[messages.length - 1]?.content || 'Olá';
    return {
      role: 'assistant',
      content: `[Assistente AgroSphere OS] Processando sua mensagem: "${lastMsg}". Como posso otimizar a gestão da sua safra hoje?`
    };
  }

  async generateStructuredAnalysis(contextData, analysisType) {
    return {
      category: analysisType,
      summary: `Análise de ${analysisType} concluída com sucesso para 14.850 ha.`,
      recommendations: [
        'Manter janela de irrigação ajustada conforme telemetria de solo.',
        'Otimizar dosagem NPK no setor M-01 para economia estimada de R$ 42.000.'
      ],
      confidenceScore: 0.96
    };
  }
}
