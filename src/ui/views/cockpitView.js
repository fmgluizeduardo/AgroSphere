/**
 * AgroSphere OS - Executive Cockpit View Orchestrator
 * Architecture Layer: UI / Views
 */

import { renderSharedChart } from '../components/sharedChart.js';
import { AuditService } from '../../services/auditService.js';

export function initCockpitView() {
  renderCockpitCharts();
  renderAuditTable();
}

export function renderCockpitCharts() {
  renderSharedChart('revenueCostChart', 'area', 
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'], 
    [
      { name: 'Receita Bruta (R$ M)', data: [22, 28, 35, 42, 38, 45, 48.2], color: '#00ff87' },
      { name: 'Custos Operacionais (R$ M)', data: [12, 14, 18, 20, 19, 21, 22.1], color: '#3b82f6' }
    ]
  );

  renderSharedChart('yieldCropChart', 'bar',
    ['Soja S1', 'Soja S2', 'Milho M1', 'Milho M2', 'Algodão'],
    [
      { name: 'Produtividade Real (sc/ha)', data: [78, 82, 145, 138, 310], color: '#10b981' }
    ]
  );
}

export function renderAuditTable() {
  const tbody = document.getElementById('auditTableBody');
  if (!tbody) return;

  const logs = AuditService.getLogs();
  tbody.innerHTML = logs.map(log => `
    <tr>
      <td style="font-family: monospace; font-size: 0.8rem; font-weight: 600; color: var(--color-brand-neon);">${log.id}</td>
      <td style="font-size: 0.85rem; color: var(--text-muted);">${log.timestamp}</td>
      <td><strong>${log.actor}</strong></td>
      <td><span class="badge badge-info">${log.action}</span></td>
      <td style="max-width: 320px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${log.details}</td>
      <td><span style="color: #10b981; font-weight: 700;">● ${log.status}</span></td>
    </tr>
  `).join('');
}
