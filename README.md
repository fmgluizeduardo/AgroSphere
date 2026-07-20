# AgroSphere OS

> **AgroSphere OS** — Sistema Operacional Integrado de Gestão Agrícola e Agronegócio Moderno

[![AgroSphere OS Version](https://img.shields.io/badge/version-v2.0.0--os-16a34a.svg)](package.json)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-059669.svg)](manifest.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Theme: Dark/Light](https://img.shields.io/badge/Theme-Dark%2FLight-1e293b.svg)](#darklight-theme)

---

## 📌 Sobre o AgroSphere OS

O **AgroSphere OS** é o sistema operacional e plataforma completa de gestão para o agronegócio inteligente. Ele combina telemetria IoT em tempo real, gestão de safras, trilha de auditoria à prova de adulteração e suporte nativo a operações offline via PWA (Progressive Web App).

---

## 🚀 Principais Recursos e Arquitetura

- **Nome Oficial do Sistema**: **AgroSphere OS**
- **Resiliência PWA & Offline**: Registrado com Service Worker (`sw.js`) e Web Manifest (`manifest.json`) configurado para instalação direta no dispositivo.
- **Dark/Light Theme Switcher**: Alternância fluida de temas de interface com persistência local e detecção do tema do sistema operacional.
- **Trilha de Auditoria (Auditoria)**: Registro detalhado de transações e eventos com IDs exclusivos, timestamps UTC, categorias de ação e integridade estrutural.
- **Arquitetura de Dados**: Suporte a PostgreSQL com particionamento telemétrico e tabelas de auditoria imutáveis.
- **Versionamento SemVer**: Totalmente alinhado às diretrizes de versionamento semântico (Release atual: `v2.0.0`).
- **SEO & Open Graph**: Metadados avançados, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml` e dados estruturados Schema.org.

---

## 🎨 Design System e Logos

- **Logo Principal**: Localizado em `assets/logo.svg` com a marca oficial AgroSphere OS.
- **Favicon & Touch Icon**: Localizados em `assets/favicon.svg`.
- **Open Graph Banner**: Arte em `assets/og-image.svg` em resolução 1200x630.

---

## 📂 Estrutura de Diretórios

```
AgroSphere/
├── assets/
│   ├── app.js               # Lógica do AgroSphere OS & alternador de temas
│   ├── favicon.svg          # Favicon e ícones nativos
│   ├── logo.svg             # Logo vetorial oficial do AgroSphere OS
│   ├── og-image.svg         # Imagem para Open Graph e redes sociais
│   └── styles.css           # Estilos responsivos e suporte Dark/Light
├── docs/
│   ├── ARCHITECTURE.md      # Arquitetura detalhada do AgroSphere OS
│   ├── AUDIT_LOGGING.md     # Especificação do subsistema de Auditoria
│   ├── COMPONENTS.md        # Guia de componentes e Design System
│   ├── DATABASE.md          # Esquema do banco de dados relacional
│   └── PWA_SEO.md           # PWA, Service Worker e estratégias de SEO
├── index.html               # Aplicação principal e meta tags SEO/OG
├── manifest.json            # PWA Manifest oficial do AgroSphere OS
├── package.json             # Configuração do projeto e versão SemVer
├── robots.txt               # Regras de SEO e indexação
├── sitemap.xml              # Mapeamento XML para mecanismos de busca
├── sw.js                    # Service Worker PWA para suporte offline
├── CHANGELOG.md             # Histórico de alterações e rebrand
└── README.md                # Documentação técnica do projeto
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js (v18+) ou Python (v3+)

### Execução do Servidor Local
Clone o repositório e execute:

```bash
# Opção 1: Usando npm
npm start

# Opção 2: Usando Python
python3 -m http.server 3000
```

Acesse a aplicação no navegador em `http://localhost:3000`.

---

## 📚 Documentação Técnica Adicional

Acesse a pasta [`docs/`](docs/) para consultar as especificações completas:
- [Arquitetura do Sistema](docs/ARCHITECTURE.md)
- [Banco de Dados & ERD](docs/DATABASE.md)
- [Subsistema de Auditoria](docs/AUDIT_LOGGING.md)
- [Design System & Componentes](docs/COMPONENTS.md)
- [PWA e SEO](docs/PWA_SEO.md)

---

## 📝 Changelog

Consulte o arquivo [`CHANGELOG.md`](CHANGELOG.md) para detalhes sobre o histórico de lançamentos, migração da marca para **AgroSphere OS** e atualizações do sistema.

---

## 📄 Licença

Licenciado sob a licença [MIT](LICENSE). Copyright © 2026 AgroSphere OS Team.
