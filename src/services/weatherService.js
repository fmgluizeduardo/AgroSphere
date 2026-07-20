/**
 * AgroSphere OS - Weather & Microclimate Service
 * Architecture Layer: Services
 */

export const WeatherService = {
  getMicroclimateSummary() {
    return {
      location: 'Ribeirão Preto, SP',
      temperature: 28,
      humidity: 62,
      evapotranspiration: 4.2,
      windSpeed: 12,
      windDirection: 'NE',
      weeklyRainfall: 42,
      forecast: [
        { day: 'Seg', icon: '☀️', temp: 30 },
        { day: 'Ter', icon: '🌤️', temp: 28 },
        { day: 'Qua', icon: '🌧️', temp: 24 },
        { day: 'Qui', icon: '⛅', temp: 27 },
        { day: 'Sex', icon: '☀️', temp: 31 }
      ]
    };
  }
};
