# AgroSphere OS - Especificação do Subsistema de Auditoria (Auditoria)

## 1. Princípios de Auditoria no AgroSphere OS

A auditoria é um componente nuclear e não-funcional do **AgroSphere OS**. Ela garante conformidade legal, segurança operacional e rastreamento irrefutável de todas as decisões e eventos críticos do sistema.

---

## 2. Estrutura de Log do AgroSphere OS

Cada evento registrado no AgroSphere OS obedece ao seguinte schema JSON:

```json
{
  "id": "LOG-2026-0891",
  "timestamp": "2026-07-20T18:45:12.000Z",
  "actor": "System Migration Engine",
  "action": "BRAND_NAME_MIGRATION",
  "category": "SYSTEM",
  "details": {
    "system_name": "AgroSphere OS",
    "previous_name": "It's Agro",
    "changed_artifacts": [
      "README.md",
      "index.html",
      "manifest.json",
      "assets/logo.svg",
      "assets/app.js",
      "docs/*"
    ]
  },
  "status": "SUCCESS"
}
```

---

## 3. Categorias de Eventos de Auditoria

| Categoria | Descrição | Exemplos |
|---|---|---|
| `SYSTEM` | Alterações de ambiente, migrações e parâmetros globais do AgroSphere OS | Mudança de nome, atualização de versão |
| `PWA` | Atividades do Service Worker e atualizações de cache offline | Cache revalidado, sincronização pendente executada |
| `DB` | Migrações de schema e validações de integridade do banco | Particionamento, verificação de hashes |
| `USER` | Ações executadas por operadores ou engenheiros agrônomos | Ajuste de limite de irrigação, alternância de tema |
| `AUDIT` | Simulações ou exportação de relatórios de conformidade | Emissão de relatórios de rastreabilidade de safras |

---

## 4. Visualização de Auditoria na UI

O dashboard do AgroSphere OS apresenta a tabela de auditoria em tempo real, permitindo aos usuários e auditores inspecionarem os eventos com indicadores visuais de integridade e tags de categoria codificadas por cores.
