import ResultCard from './ResultCard.jsx'
import { UNITS } from '../utils/temperatureConverter.js'

export default function ResultDisplay({ results, sourceUnit }) {
  return (
    <section
      className="results-section"
      aria-live="polite"
      aria-label="Conversion results"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">YOUR RESULTS</p>
          <h2>In every measure</h2>
        </div>
        <span className="result-count">
          03 <span>UNITS</span>
        </span>
      </div>
      <div className="results-grid">
        {Object.entries(UNITS).map(([key, unit]) => (
          <ResultCard
            key={key}
            unit={unit.name}
            symbol={unit.symbol}
            value={results[key].toFixed(2)}
            isSource={key === sourceUnit}
          />
        ))}
      </div>
    </section>
  )
}
