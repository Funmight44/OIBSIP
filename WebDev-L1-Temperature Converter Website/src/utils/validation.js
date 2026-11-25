import { UNITS } from './temperatureConverter.js'

export function validateTemperature(rawValue, unit) {
  if (!UNITS[unit]) return 'Please select a valid temperature unit.'
  if (rawValue.trim() === '') return 'Please enter a temperature value.'

  const value = Number(rawValue)
  if (!Number.isFinite(value)) return 'Please enter a valid numeric temperature.'
  if (value < UNITS[unit].absoluteZero) return 'Temperature cannot be below absolute zero.'
  return ''
}
