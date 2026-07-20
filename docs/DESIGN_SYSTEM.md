# AgroSphere OS - Guia Completo do Design System (Design Tokens & Componentes)

> **AgroSphere OS Design System** — Padrões de Interface, Tokens CSS, Componentes Reutilizáveis e Diretrizes de Acessibilidade.

---

## 1. Visão Geral e Inspiração Visual

O Design System do **AgroSphere OS** foi desenvolvido para oferecer uma experiência executiva de alta precisão inspirada nos princípios visuais de **Microsoft Fluent UI**, **SAP Fiori**, **Power BI**, **Monday.com** e **Notion**.

### Princípios de Design:
- **Zero Duplicação**: Todos os elementos utilizam componentes base compartilhados.
- **Dark Mode por Padrão**: Ergonomia visual otimizada para monitoramento contínuo em centros de controle e operação no campo.
- **Tokens Centralizados**: Variáveis CSS customizadas para cores, espaçamentos, sombras, bordas e tipografia.
- **Responsividade Total**: Layout e componentes adaptados dinamicamente para Desktop, Tablet e Mobile.

---

## 2. Tokens de Design e Variáveis CSS (`:root`)

```css
:root {
  /* Cores Principais */
  --color-brand-neon: #00ff87;
  --color-brand-primary: #10b981;
  --color-brand-dark: #059669;
  
  /* Backgrounds & Superfícies */
  --bg-root: #060907;
  --bg-surface: #0c120e;
  --bg-surface-elevated: #121a15;
  --bg-input: #0f1712;

  /* Status & Feedbacks */
  --status-success: #10b981;
  --status-warning: #f59e0b;
  --status-danger: #ef4444;
  --status-info: #3b82f6;
  --status-purple: #a855f7;

  /* Escala de Espaçamento */
  --space-3xs: 2px;
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;

  /* Bordas & Sombras */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-full: 9999px;
  --border-color: rgba(34, 197, 94, 0.18);
  --shadow-elevated: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
  --glow-neon: 0 0 25px rgba(0, 255, 135, 0.25);
}
```

---

## 3. Catálogo das 24 Primitivas de Componentes Reutilizáveis

| # | Componente | Classe CSS Base | Descrição & Uso |
|---|---|---|---|
| 1 | **Botões** | `.btn`, `.btn-primary`, `.btn-glow`, `.btn-outline`, `.btn-sm`, `.btn-lg` | Ações principais, secundárias e alertas |
| 2 | **Inputs & Forms** | `.form-group`, `.input-text`, `.input-select`, `.input-switch` | Campos de texto, seleção e alternadores |
| 3 | **Cards** | `.card`, `.card-header`, `.card-body` | Painéis e contêineres de conteúdo |
| 4 | **Tabelas** | `.table-container`, `.table`, `.table-hover` | Apresentação de dados telemétricos e financeiros |
| 5 | **Badges** | `.badge`, `.badge-success`, `.badge-warning`, `.badge-danger` | Chips de status de processos e talhões |
| 6 | **Tags** | `.tag`, `.tag-active` | Filtros de navegação e categorias |
| 7 | **Modais** | `.modal-overlay`, `.modal-content`, `.modal-header` | Diálogos e janelas de confirmação |
| 8 | **Menus / Dropdowns** | `.menu-dropdown`, `.menu-item` | Ações contextuais e seletores de perfil |
| 9 | **Sidebar** | `.sidebar-nav`, `.sidebar-item`, `.sidebar-item-active` | Menu lateral de navegação no aplicativo |
| 10 | **Header** | `.header-bar` | Barra superior com identificação e ações globais |
| 11 | **Footer** | `.footer-container` | Rodapé com mapa do site e copyright |
| 12 | **Breadcrumb** | `.breadcrumb`, `.breadcrumb-sep` | Trilha de navegação hierárquica |
| 13 | **Loading** | `.spinner-loader` | Indicador giratório de carregamento |
| 14 | **Skeleton** | `.skeleton`, `.skeleton-text`, `.skeleton-circle` | Bloco de carregamento visual para dados assíncronos |
| 15 | **Toasts** | `.toast-container`, `.toast` | Notificações temporárias no canto inferior |
| 16 | **Alertas** | `.alert`, `.alert-success`, `.alert-warning`, `.alert-danger` | Banners de aviso no fluxo de trabalho |
| 17 | **Avatares** | `.avatar`, `.avatar-sm`, `.avatar-lg`, `.avatar-online` | Identificação visual de operadores e agrônomos |
| 18 | **Ícones** | `.icon-wrapper` | Utilidades para renderização de símbolos SVG |
| 19 | **Tipografia** | `.heading-xl`, `.heading-lg`, `.body-md`, `.caption` | Hierarquia de títulos e corpo de texto |
| 20 | **Espaçamentos** | `.p-xs`, `.p-md`, `.m-sm`, `.m-lg` | Espaçamentos utilitários padronizados |
| 21 | **Sombras** | `.shadow-sm`, `.shadow-md`, `.glow-box` | Níveis de elevação e brilhos neon |
| 22 | **Bordas** | `.rounded-sm`, `.rounded-md`, `.border-glow` | Arredondamento e iluminação de contornos |
| 23 | **Tokens de Cores** | Mapeamento de variáveis CSS | Garantia de consistência de paleta |
| 24 | **Variáveis CSS** | Reutilização via `var(--name)` | Suporte total a Light Mode e Dark Mode |

---

## 4. Exemplos de Implementação de Componentes

### Botões e Modais
```html
<!-- Botão Primário com Glow -->
<button class="btn btn-glow">
  <span>⚡ Conheça a Plataforma</span>
</button>

<!-- Modal Overlay Reutilizável -->
<div class="modal-overlay">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="heading-sm">Título do Modal</h3>
      <button class="modal-close">✕</button>
    </div>
    <p class="body-md">Conteúdo modal padronizado...</p>
  </div>
</div>
```

### Toasts de Notificação Dinâmicos
```javascript
// Disparo de Toast Reutilizável via JS
showToast('Ação executada com sucesso!', 'success');
```
