# AgroSphere OS - PWA & Estratégia de SEO

## 1. Configuração do Progressive Web App (PWA)

O **AgroSphere OS** é totalmente compatível com os padrões PWA modernos, permitindo instalação como aplicativo desktop e móvel e operação offline.

### 1.1 Manifest (`manifest.json`)
- **Nome Oficial**: `AgroSphere OS - Sistema Operacional Agrícola`
- **Nome Curto**: `AgroSphere OS`
- **Modo de Exibição**: `standalone`
- **Tema e Background**: Cor primária `#16a34a` / Dark Background `#0f172a`
- **Ícones**: SVG responsivo vetorizado e variantes com suporte a máscaras (`maskable`).

### 1.2 Service Worker (`sw.js`)
- **Estratégia de Cache**: *Stale-While-Revalidate* para navegação instantânea.
- **Cache Name**: `agrosphere-os-cache-v2.0.0`.
- **Recursos Cacheados**: Shell da aplicação (`index.html`, `styles.css`, `app.js`, logos e manifest).

---

## 2. Otimização de SEO e Open Graph

O AgroSphere OS inclui tags completas de meta dados para visualização avançada em redes sociais e buscadores:

- **Browser Title**: `<title>AgroSphere OS - Sistema Operacional Integrado de Gestão Agrícola</title>`
- **Open Graph**:
  - `og:site_name`: AgroSphere OS
  - `og:title`: AgroSphere OS - Sistema Operacional de Gestão Agrícola
  - `og:image`: `/assets/og-image.svg`
- **Twitter Cards**: Suporte a `summary_large_image` com arte do AgroSphere OS.
- **Dados Estruturados JSON-LD**: Declaração do aplicativo como `SoftwareApplication`.
