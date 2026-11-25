export default function TemperatureInput({ value, onChange, error, onClear }) {
  return (
    <div className="field-group">
      <div className="field-label-row">
        <label htmlFor="temperature">Temperature</label>
        <span className="field-hint">Enter a value to convert</span>
      </div>
      <div className={`input-wrap${error ? ' input-error' : ''}`}>
        <span className="input-thermometer" aria-hidden="true"> ° </span>
        <input
          id="temperature"
          name="temperature"
          type="number"
          inputMode="decimal"
          step="any"
          value={value}
          onChange={onChange}
          placeholder="Enter temperature"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'temperature-error' : 'temperature-hint'}
        />
        {value !== '' && (
          <button
            className="clear-button"
            type="button"
            onClick={onClear}
            aria-label="Clear temperature"
          >
            ×
          </button>
        )}
      </div>
      {error ? (
        <p className="error-message" id="temperature-error" role="alert">
          <span aria-hidden="true">!</span>
          {error}
        </p>
      ) : (
        <p className="field-helper" id="temperature-hint">
          Positive, negative, or decimal values are welcome.
        </p>
      )}
    </div>
  )
}
