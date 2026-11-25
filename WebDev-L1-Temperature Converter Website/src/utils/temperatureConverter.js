export const UNITS = {
  celsius: { name: 'Celsius', symbol: '°C', absoluteZero: -273.15 },
  fahrenheit: { name: 'Fahrenheit', symbol: '°F', absoluteZero: -459.67 },
  kelvin: { name: 'Kelvin', symbol: 'K', absoluteZero: 0 },
}

export function convertTemperature(value, fromUnit) {
  if (!Number.isFinite(value) || !UNITS[fromUnit]) {
    throw new Error('A finite temperature and valid unit are required.')
  }

  let celsius
  if (fromUnit === 'celsius') celsius = value
  if (fromUnit === 'fahrenheit') celsius = ((value - 32) * 5) / 9
  if (fromUnit === 'kelvin') celsius = value - 273.15

  const normalizeZero = (temperature) => Math.abs(temperature) < 1e-12 ? 0 : temperature
  return {
    celsius: normalizeZero(celsius),
    fahrenheit: normalizeZero((celsius * 9) / 5 + 32),
    kelvin: normalizeZero(celsius + 273.15),
  }
}
