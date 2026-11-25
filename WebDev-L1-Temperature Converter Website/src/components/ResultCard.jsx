export default function ResultCard({ unit, symbol, value, isSource }) {
  return (
    <article
      className={`result-card${isSource ? ' result-card-source' : ''}`}
      aria-label={`${unit}: ${value} ${symbol}${isSource ? ', input unit' : ''}`}
    >
      <div className="result-card-top">
        <span className="result-unit">{unit}</span>
        {isSource && <span className="source-badge">INPUT</span>}
      </div>
      <p className="result-value">
        {value}
        <span>{symbol}</span>
      </p>
    </article>
  )
}
