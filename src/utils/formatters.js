/**
 * AgroSphere OS - Utility Formatters (Memoized for High Core Web Vitals)
 * Architecture Layer: Utils
 */

import { memoize } from './memoize.js';

export const formatCurrency = memoize(function (value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
});

export const formatHectares = memoize(function (value) {
  return `${new Intl.NumberFormat('pt-BR').format(value)} ha`;
});

export function formatPercentage(value) {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
}

export function formatUTCTimestamp(date = new Date()) {
  return date.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
}
