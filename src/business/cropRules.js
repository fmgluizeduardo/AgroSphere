/**
 * AgroSphere OS - Business Rules & Domain Logic
 * Architecture Layer: Business
 */

export function evaluateStockThreshold(currentLevel, reorderPoint = 20) {
  if (currentLevel <= 15) {
    return { status: 'CRITICAL', label: 'Aviso Reposição Urgente', color: 'var(--status-danger)' };
  }
  if (currentLevel <= reorderPoint) {
    return { status: 'WARNING', label: 'Nível Baixo', color: 'var(--status-warning)' };
  }
  return { status: 'OK', label: 'Estoque Adequado', color: 'var(--status-success)' };
}

export function computeHarvestYieldProgress(harvestedHectares, totalHectares) {
  if (!totalHectares || totalHectares === 0) return 0;
  return Math.min(100, Math.round((harvestedHectares / totalHectares) * 100));
}
