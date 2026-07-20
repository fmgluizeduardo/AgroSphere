/**
 * AgroSphere OS - Virtual Assistant & Chat Service
 * Architecture Layer: IA / Services
 */

export class VirtualAssistantService {
  constructor(provider) {
    this.provider = provider;
    this.chatHistory = [];
  }

  async sendChatMessage(userMessage) {
    this.chatHistory.push({ role: 'user', content: userMessage, timestamp: new Date().toISOString() });
    const response = await this.provider.generateChatResponse(this.chatHistory);
    this.chatHistory.push({ role: 'assistant', content: response.content, timestamp: new Date().toISOString() });
    return response;
  }

  getChatHistory() {
    return [...this.chatHistory];
  }

  clearHistory() {
    this.chatHistory = [];
  }
}
