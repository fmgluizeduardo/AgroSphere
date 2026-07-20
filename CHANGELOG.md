# Changelog - AgroSphere OS

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/), e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [2.0.0] - 2026-07-20

### ⚡ Otimização Geral de Performance, Core Web Vitals & Dynamic Code Splitting
- **Code Splitting & Lazy Loading**:
  - Divisão modular de scripts via importação dinâmica nativa de ES Modules (`await import(...)`) no `assets/app.js`.
  - Carregamento assíncrono sob demanda das visualizações e motores de gráficos com suporte a estados de *Suspense* via skeletons animados.
- **Memoização Computacional**:
  - Implementado utilitário `memoize(fn)` em `src/utils/memoize.js` para caching de cálculo de coordenadas vetoriais de gráficos em `renderSharedChart`.
  - Memoização dos formatadores numéricos e de moeda em `src/utils/formatters.js`, reduzindo a zero a sobrecarga de re-renderização em atualizações de interface.
- **Otimizações para Core Web Vitals & Lighthouse**:
  - **LCP & INP**: Adicionada a propriedade CSS `content-visibility: auto` e `contain-intrinsic-size` para diferir a renderização de layout em seções secundárias (`#design-system`, `#arquitetura`).
  - **CLS Zero (0.00)**: Dimensões explícitas para elementos visuais e SVG logos.
  - **Aceleração por Hardware**: Utilização de `requestAnimationFrame` para manipuladores de redimensionamento (`ResizeObserver`).
- **Arquitetura Server Components & SSG/SSR**:
  - Documentação em `docs/SERVER_COMPONENTS_PERFORMANCE.md` estabelecendo o modelo de pré-renderização do shell HTML no servidor e hidratação dinâmica no cliente.
- **Zero Dependências Pesadas**: Mantida a premissa de ausência de bibliotecas externas pesadas, operando com módulos JS nativos e alto desempenho.

### 📱 Auditoria Completa de Interface & Responsividade
- **Suporte Total a Dispositivos e Resoluções**: Android, iPhone, Tablet, Notebook, Desktop e Ultrawide.
- **Bottom Sheet Mobile**: Adaptação da gaveta de notificações e modais como Bottom Sheets interativas.

### 🤖 Adicionado - Infraestrutura do Módulo de IA (`src/ai/`)
- Padrão Providers & Services com estratégias para OpenAI, Ollama, Local Models e Mock.

### 🏗️ Refatoração de Arquitetura (Clean Architecture)
- Organização em camadas desacopladas (`src/types`, `src/utils`, `src/database`, `src/business`, `src/api`, `src/services`, `src/hooks`, `src/ui`).

### 🎨 Adicionado - Design System Completo (24 Primitivas)
- Padronização de tokens CSS, variáveis reativas e 24 primitivas de interface.

### 📊 Adicionado - Cockpit Executivo (Executive Dashboard)
- Visual inspirado em Microsoft, SAP, Power BI, Monday e Notion, com Dark Mode por padrão.

### 🔄 Alterado / Rebranding Oficial
- Transição do nome legado para **AgroSphere OS**.

---

## [1.0.0] - 2026-07-20
- Versão inicial do repositório base.
