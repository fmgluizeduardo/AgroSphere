/**
 * AgroSphere OS - AI Prescriptive Engine Rules
 * Architecture Layer: Business
 */

export function generateAIPrescriptiveRecommendations(fieldSectorData) {
  return [
    {
      id: 'AI-REC-01',
      title: 'Otimização de Janela de Colheita',
      description: 'Ajustar velocidade da ceifeira no Talhão S-01 para quinta-feira das 09h às 16h (+3.8% ganho de umidade).',
      potentialGain: '+3.8%'
    },
    {
      id: 'AI-REC-02',
      title: 'Economia de Insumos Fertilizante NPK',
      description: 'Reduzir dosagem no Setor M-01 em 8% baseado no mapa telemétrico de nutrientes. Economia estimada: R$ 42.000.',
      potentialSavings: 'R$ 42.000'
    }
  ];
}
