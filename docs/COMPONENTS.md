# AgroSphere OS - Guia de Componentes e Design System

## 1. Identidade Visual e Tokens

O **AgroSphere OS** adota um design system moderno e minimalista inspirado em referências líderes como Microsoft Fluent, SAP Fiori, Power BI, Monday e Notion.

### Tokens de Cores Primárias
- **Background Dark Mode (Padrão)**: `#060907` (Deep Emerald Black)
- **Superfície Elevação Dark**: `#0c120e`
- **Verde Neon Glow**: `#00ff87`
- **Verde Agro Primary**: `#10b981`
- **Borda Glow**: `rgba(34, 197, 94, 0.18)`
- **Status Success**: `#10b981`
- **Status Warning**: `#f59e0b`
- **Status Danger**: `#ef4444`
- **Status Info**: `#3b82f6`

---

## 2. Cockpit Executivo & Componentes Reutilizáveis

### 2.1 Widgets KPI Reutilizáveis (`executive-kpis-grid`)
Estrutura padronizada para exibir indicadores executivos de alto nível:
- **Produção Total Est.**
- **Faturamento Bruto (Financeiro)**
- **Área Cultivada (Safra)**
- **Valoração de Estoque**
- **Clima & Telemetria**

### 2.2 Componente de Gráficos Compartilhados (`renderSharedChart`)
Mecanismo vetorial reutilizável para renderização de gráficos na aplicação sem dependência de bibliotecas externas pesadas:
- Suporta gráficos de área preenchida com gradientes, linhas e barras comparativas.
- Escalabilidade dinâmica responsiva com eixos e gridlines.

### 2.3 Módulos do Cockpit
1. **Performance Financeira x Custos**: Gráfico comparativo de área com gradientes.
2. **Safra & Produção**: Tabela com chips de status visuais estilo Monday/SAP.
3. **IA Prescritiva**: Cartões com recomendações inteligentes e economia estimada.
4. **Estoque**: Barras de progresso com alertas visuais de reposição.
5. **Clima Microclimático**: Previsão de 5 dias e acumulado pluviométrico.
6. **Alertas do Campo**: Lista categorizada por gravidade (Crítico, Aviso, Info).
7. **Agenda Operacional**: Lista de tarefas diárias inspirada no Notion.
8. **Central de Notificações**: Painel gaveta deslizante (*Notification Drawer*).

---

## 3. Comportamento do Tema (Dark Mode por Padrão)

O sistema inicia por padrão em **Dark Mode** (`<html data-theme="dark">`), garantindo alto contraste e ergonomia visual para uso diário.
