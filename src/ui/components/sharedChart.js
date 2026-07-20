/**
 * AgroSphere OS - Shared Chart Engine (Memoized Vector Path Calculation)
 * Architecture Layer: UI / Components
 */

import { memoize } from '../../utils/memoize.js';

// Memoized calculation of chart coordinates and grid structures
const computeChartVectors = memoize((width, height, chartType, labels, datasets) => {
  const padding = 40;
  let maxVal = 0;
  datasets.forEach(ds => {
    ds.data.forEach(v => { if (v > maxVal) maxVal = v; });
  });
  maxVal = maxVal * 1.15 || 100;

  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const stepX = chartWidth / (labels.length - 1 || 1);

  let gridLinesHtml = '';
  for (let i = 0; i <= 4; i++) {
    const y = padding + (chartHeight / 4) * i;
    const valLabel = Math.round(maxVal - (maxVal / 4) * i);
    gridLinesHtml += `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="rgba(255, 255, 255, 0.06)" stroke-dasharray="4 4" />`;
    gridLinesHtml += `<text x="${padding - 8}" y="${y + 4}" fill="#64748b" font-size="10" text-anchor="end" font-family="sans-serif">${valLabel}</text>`;
  }

  let datasetSvg = '';
  datasets.forEach((ds, dsIndex) => {
    if (chartType === 'area' || chartType === 'line') {
      let pathD = '';
      let areaD = '';

      ds.data.forEach((val, idx) => {
        const x = padding + idx * stepX;
        const y = padding + chartHeight - (val / maxVal) * chartHeight;

        if (idx === 0) {
          pathD += `M ${x} ${y}`;
          areaD += `M ${x} ${padding + chartHeight} L ${x} ${y}`;
        } else {
          pathD += ` L ${x} ${y}`;
          areaD += ` L ${x} ${y}`;
        }

        if (idx === ds.data.length - 1) {
          areaD += ` L ${x} ${padding + chartHeight} Z`;
        }
      });

      const gradId = `chartGrad_${dsIndex}`;
      datasetSvg += `
        <defs>
          <linearGradient id="${gradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="${ds.color || '#00ff87'}" stop-opacity="0.35" />
            <stop offset="100%" stop-color="${ds.color || '#00ff87'}" stop-opacity="0.0" />
          </linearGradient>
        </defs>
      `;

      if (chartType === 'area') {
        datasetSvg += `<path d="${areaD}" fill="url(#${gradId})" />`;
      }

      datasetSvg += `<path d="${pathD}" fill="none" stroke="${ds.color || '#00ff87'}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />`;

      ds.data.forEach((val, idx) => {
        const x = padding + idx * stepX;
        const y = padding + chartHeight - (val / maxVal) * chartHeight;
        datasetSvg += `<circle cx="${x}" cy="${y}" r="4" fill="#0c120e" stroke="${ds.color || '#00ff87'}" stroke-width="2" />`;
      });
    } else if (chartType === 'bar') {
      const barGroupWidth = stepX * 0.5;
      const barWidth = barGroupWidth / datasets.length;

      ds.data.forEach((val, idx) => {
        const x = padding + idx * stepX - barGroupWidth / 2 + dsIndex * barWidth;
        const barH = (val / maxVal) * chartHeight;
        const y = padding + chartHeight - barH;
        datasetSvg += `<rect x="${x}" y="${y}" width="${barWidth - 2}" height="${barH}" fill="${ds.color || '#10b981'}" rx="3" />`;
      });
    }
  });

  let labelsSvg = '';
  labels.forEach((lbl, idx) => {
    const x = padding + idx * stepX;
    labelsSvg += `<text x="${x}" y="${height - 10}" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="sans-serif">${lbl}</text>`;
  });

  return `<svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">${gridLinesHtml}${datasetSvg}${labelsSvg}</svg>`;
});

export function renderSharedChart(containerId, chartType, labels, datasets) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const width = Math.max(300, container.clientWidth || 600);
  const height = 260;

  const svgContent = computeChartVectors(width, height, chartType, labels, datasets);
  if (container.innerHTML !== svgContent) {
    container.innerHTML = svgContent;
  }
}
