# AgroSphere OS - Infraestrutura e Arquitetura do Módulo de IA (IA)

> **Módulo IA** — Arquitetura desacoplada baseada nos padrões **Provider** e **Services** preparada para futuras integrações com OpenAI, Ollama e modelos locais on-premise.

---

## 1. Visão Geral da Arquitetura do Módulo `IA`

O módulo `IA` do AgroSphere OS foi projetado com isolamento total entre os consumidores das capacidades de inteligência artificial (UI, Relatórios, Telemetria) e os fornecedores de modelos de linguagem e inferência (LLMs / Local WASM).

```
+-------------------------------------------------------------------------------+
|                        IAModule Facade (src/ai/index.js)                     |
+-------------------------------------------------------------------------------+
|                                                                               |
|  +-------------------------------------------------------------------------+  |
|  |                           Camada de Serviços (Services)                 |  |
|  |  • VirtualAssistantService      • SmartSuggestionsService              |  |
|  |  • FinancialAnalysisService     • ForecastingService                   |  |
|  |  • AgriculturalAnalysisService  • AutoReportService                    |  |
|  |  • ProductivityService                                                  |  |
|  +-------------------------------------+-----------------------------------+  |
|                                        |                                      |
|  +-------------------------------------v-----------------------------------+  |
|  |                     AIProviderFactory (Factory Pattern)                 |  |
|  +-------------------------------------+-----------------------------------+  |
|                                        |                                      |
|  +-------------------------------------v-----------------------------------+  |
|  |                     Estratégias de Provedores (Providers)               |  |
|  |  [OpenAIProvider]   [OllamaProvider]   [LocalModelProvider]  [Mock...]  |  |
|  +-------------------------------------------------------------------------+  |
+-------------------------------------------------------------------------------+
```

---

## 2. Capacidades do Módulo `IA`

O módulo inclui a infraestrutura estrutural para 8 recursos essenciais:

1. **Assistente Virtual (`VirtualAssistantService`)**: Chat interativo e auxílio ao agrônomo.
2. **Chat Conversacional**: Gerenciamento de histórico de mensagens e memória contextual.
3. **Análise Financeira (`FinancialAnalysisService`)**: Avaliação de DRE rural, margem operacional e projeção de fluxo de caixa.
4. **Análise Agrícola (`AgriculturalAnalysisService`)**: Diagnóstico de umidade de solo e mapa de riscos de pragas.
5. **Análise de Produtividade (`ProductivityService`)**: Benchmarking de rendimento em sacas por hectare.
6. **Sugestões Inteligentes (`SmartSuggestionsService`)**: Recomendações prescritivas acionáveis.
7. **Previsões (`ForecastingService`)**: Modelos preditivos de safra e clima.
8. **Relatórios Automáticos (`AutoReportService`)**: Geração autônoma de resumos executivos.

---

## 3. Padrão Provider & Estratégias Suportadas

### 3.1 Contrato do Provedor (`BaseAIProvider`)
Todos os provedores estendem a classe abstrata `BaseAIProvider` e implementam:
- `generateCompletion(prompt, options)`
- `generateChatResponse(messages, options)`
- `generateStructuredAnalysis(contextData, analysisType)`
- `getProviderName()`
- `isConfigured()`

### 3.2 Provedores Preparados

| Provedor | Classe | Uso Futuro / Endpoint |
|---|---|---|
| **OpenAI** | `OpenAIProvider` | Modelos GPT-4o, ChatGPT via REST API (`api.openai.com`) |
| **Ollama** | `OllamaProvider` | Modelos locais via HTTP endpoint (`http://localhost:11434`) |
| **Local / On-Premise** | `LocalModelProvider` | Inferência em borda sem internet (ONNX Runtime Web / WebGPU) |
| **Mock** | `MockAIProvider` | Provedor ativo por padrão para simulações e ambiente offline |

---

## 4. Guia de Integração Futura

Para alternar o provedor de IA na aplicação:

```javascript
import { iaModule } from './src/ai/index.js';

// Alternar para OpenAI quando a chave for configurada
iaModule.setProvider('openai', { apiKey: 'sk-...' });

// Alternar para Ollama Local
iaModule.setProvider('ollama', { endpoint: 'http://localhost:11434/api/generate', model: 'llama3' });

// Executar consulta ao assistente virtual
const response = await iaModule.virtualAssistant.sendChatMessage('Qual a previsão de colheita para o Talhão S-01?');
```
