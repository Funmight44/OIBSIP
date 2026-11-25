import { useState } from 'react'
import Header from './components/Header.jsx'
import TemperatureInput from './components/TemperatureInput.jsx'
import UnitSelector from './components/UnitSelector.jsx'
import ConvertButton from './components/ConvertButton.jsx'
import ResultDisplay from './components/ResultDisplay.jsx'
import { convertTemperature, UNITS } from './utils/temperatureConverter.js'
import { validateTemperature } from './utils/validation.js'
import './App.css'

function App() {
  const [temperature, setTemperature] = useState('')
  const [unit, setUnit] = useState('celsius')
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')
  const [attempted, setAttempted] = useState(false)
  const [lastConversion, setLastConversion] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    setAttempted(true)
    const validationError = validateTemperature(temperature, unit)
    setError(validationError)
    if (validationError) {
      setResults(null)
      return
    }
    const nextResults = convertTemperature(Number(temperature), unit)
    setResults(nextResults)
    setLastConversion({ value: Number(temperature), unit })
  }

  function handleTemperatureChange(event) {
    const next = event.target.value
    setTemperature(next)
    if (attempted) {
      const nextError = validateTemperature(next, unit)
      setError(nextError)
      if (nextError) setResults(null)
    }
  }

  function handleUnitChange(event) {
    const next = event.target.value
    setUnit(next)
    if (attempted) {
      const nextError = validateTemperature(temperature, next)
      setError(nextError)
      if (nextError) setResults(null)
    }
  }

  function reset() {
    setTemperature('')
    setUnit('celsius')
    setResults(null)
    setError('')
    setAttempted(false)
  }

  const lastLabel = lastConversion
    ? `${lastConversion.value} ${UNITS[lastConversion.unit].symbol}`
    : 'Your conversions will appear here'

  return (
    <div className="app-shell" id="top">
      <Header />
      <main className="main-content">
        <div className="intro-block">
          <span className="intro-kicker"><span /> BUILT FOR EVERYDAY PRECISION</span>
          <h1>Temperature,<br /><em>translated.</em></h1>
          <p>Convert temperatures with accuracy and ease.</p>
        </div>

        <section className="converter-panel" aria-labelledby="converter-title">
          <div className="panel-heading">
            <div className="panel-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M14 14.76V5a3 3 0 0 0-6 0v9.76a5 5 0 1 0 6 0Z" stroke="currentColor" strokeWidth="1.7"/><path d="M11 17V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
            </div>
            <div>
              <h2 id="converter-title">Make a conversion</h2>
              <p>Choose a temperature and its scale to get started.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <TemperatureInput value={temperature} onChange={handleTemperatureChange} error={error} onClear={() => handleTemperatureChange({ target: { value: '' } })} />
              <UnitSelector value={unit} onChange={handleUnitChange} />
            </div>
            <ConvertButton onReset={reset} />
          </form>
          <div className="absolute-zero-note">
            <span aria-hidden="true">i</span> 
            Conversions are checked against absolute zero.
          </div>
        </section>

        <div className="results-wrap">
          {results ? <ResultDisplay results={results} sourceUnit={unit} /> : (
            <section className="empty-results" aria-live="polite">
              <div className="empty-icon" aria-hidden="true">
                <span>°</span>
                <span>°</span>
                <span>°</span>
              </div>
              <div>
                <p className="eyebrow">READY WHEN YOU ARE</p>
                <h2>Your results will land here</h2>
                <p>Enter a temperature above to see all three scales side by side.</p>
              </div>
            </section>
          )}
        </div>
        <aside className="last-conversion">
          <span className="last-dot" />
          <div><span className="last-label">LAST CONVERSION</span>
          <span className="last-value">{lastLabel}</span>
          </div>
          <span className="last-arrow" aria-hidden="true">↗</span>
        </aside>
      </main>
      <footer className="site-footer">
        <span>TempConvert</span>
        <span>CELSIUS <b>·</b> FAHRENHEIT <b>·</b> KELVIN</span>
          <span> @copyright Funmight 2026</span>
      </footer>
    </div>
  )
}

export default App
