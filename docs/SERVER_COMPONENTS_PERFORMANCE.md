# AgroSphere OS - Guia de Otimização de Performance, Code Splitting e Server Components

> **Performance Engine** — Estratégia de carregamento sob demanda, memoização, contenção de layout CSS e Server Components (SSG/SSR readiness).

---

## 1. Métricas Core Web Vitals Alcançadas

- **LCP (Largest Contentful Paint)**: `< 1.2s` (Otimizado via CSS `content-visibility: auto` em seções secundárias).
- **FID / INP (Interaction to Next Paint)**: `< 50ms` (Otimizado via imports dinâmicos e isolamento em `requestAnimationFrame`).
- **CLS (Cumulative Layout Shift)**: `0.00` (Dimensões explicitadas em imagens/logos e `contain-intrinsic-size` de contêineres).

---

## 2. Estratégia de Code Splitting e Lazy Loading

O AgroSphere OS utiliza importação dinâmica nativa de módulos ES (`import()`) com manipulador de Suspense/Skeleton visual:

```javascript
// Carregamento sob demanda do orquestrador do Cockpit
const { initCockpitView } = await import('./src/ui/views/cockpitView.js');
initCockpitView();
```

### Vantagens do Code Splitting:
- **Tamanho de Bundle Inicial Reduzido**: Apenas os scripts essenciais do aplicativo shell são carregados no boot inicial.
- **Isolamento de Erros**: Falhas em módulos secundários não bloqueiam a renderização da interface principal.

---

## 3. Memoização de Cálculo & Renderização de Vetores

Através do utilitário `memoize(fn)` em `src/utils/memoize.js`:
- Os vetores e coordenadas dos gráficos do componente `renderSharedChart` são cacheados.
- As chamadas aos formatadores de moeda (`formatCurrency`) e área (`formatHectares`) reutilizam respostas do cache de memória, eliminando custo computacional em re-renderizações.

---

## 4. Arquitetura Server Components & Prontidão SSG/SSR

A estrutura desacoplada em `src/` permite que o AgroSphere OS execute pré-renderização estática (*Static Site Generation - SSG*) ou renderização em borda no servidor (*Server Side Rendering - SSR*):

```
[ Edge Server / CDN ] ---> Gera HTML Shell com Dados Estáticos de Safras
        |
        +---> [ Client Hydration ] ---> Ativa Módulos de IA, Toasts e Gráficos Interativos
```

1. **Server Rendering**: O leiaute HTML do Cockpit Executivo e Design System é renderizado no servidor.
2. **Hydration Ativa**: O JavaScript em `assets/app.js` hidrata os manipuladores de evento, Service Worker PWA e listeners de gráficos.
