# AgroSphere OS - Arquitetura de Software Refatorada (Clean Architecture)

## 1. Visão Geral da Arquitetura em Camadas

O **AgroSphere OS** adota os princípios de **Clean Architecture** e **Domain-Driven Design (DDD)** para assegurar desacoplamento de código, eliminações de duplicidades, facilidade de manutenção e testabilidade sem dependências desnecessárias.

```
+-------------------------------------------------------------------------+
|                              AgroSphere OS                              |
+-------------------------------------------------------------------------+
|                                                                         |
|   [ UI Layer ]               --> src/ui/components & src/ui/views     |
|         |                                                               |
|   [ Hooks Layer ]            --> src/hooks/                             |
|         |                                                               |
|   [ Services Layer ]         --> src/services/                          |
|      /      \                                                           |
|     v        v                                                          |
|[Business]  [API Layer]       --> src/business/ & src/api/               |
|     |                                                                   |
|     v                                                                   |
|[Database]                    --> src/database/                          |
|     |                                                                   |
|  [Utils] & [Types]           --> src/utils/ & src/types/                |
|                                                                         |
+-------------------------------------------------------------------------+
```

---

## 2. Organização do Diretório `src/`

```
src/
├── types/
│   └── index.js           # Declaração de modelos de dados & contratos JSDoc
├── utils/
│   ├── formatters.js      # Formatadores de moeda (BRL), hectares e percentual
│   ├── storage.js         # Abstração segura de LocalStorage
│   └── id.js              # Geradores de ID único
├── database/
│   ├── schema.js          # Definição DDL relacional (SQL)
│   └── auditRepository.js # Repositório de logs de auditoria
├── business/
│   ├── cropRules.js       # Regras de negócios de safra, colheita e estoque
│   └── aiPredictor.js     # Motor prescritivo de Inteligência Artificial
├── api/
│   ├── apiClient.js       # Wrapper HTTP REST Client
│   └── telemetryApi.js    # Endpoints telemétricos e IoT
├── services/
│   ├── auditService.js    # Serviço gerenciador do fluxo de auditoria
│   ├── themeService.js    # Gerenciador de estado do tema Dark/Light
│   ├── weatherService.js  # Processador microclimático
│   └── pwaService.js      # Registrador do Service Worker PWA
├── hooks/
│   ├── useTheme.js        # Hook reativo para alternância de tema
│   ├── useAuditTrail.js   # Hook reativo para auditoria
│   └── useNotifications.js# Hook reativo para a gaveta de notificações
└── ui/
    ├── components/
    │   ├── sharedChart.js # Componente reutilizável de gráficos
    │   ├── modal.js       # Gerenciador de janelas modais
    │   └── toast.js       # Gerenciador de notificações Toast
    └── views/
        ├── cockpitView.js # Orquestrador da visualização do Cockpit
        └── designSystemView.js # Exibição do Design System
```

---

## 3. Diretrizes de Qualidade do Código

1. **Eliminação de Código Morto & Duplicações**: Todas as funções utilitárias e componentes visuais foram unificados em bibliotecas base compartilhadas.
2. **Escopo de Módulos (ESM)**: Módulos nativos JavaScript (`type="module"`) garantem isolamento de escopo sem poluição do namespace global.
3. **Imutabilidade e Rastreabilidade**: Audit trail mantido através do `auditRepository` encadeando eventos com carimbo de data/hora em UTC.
