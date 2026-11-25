import { UNITS } from '../utils/temperatureConverter.js'

export default function UnitSelector({ value, onChange }) {
  return (
    <div className="field-group unit-field">
      <div className="field-label-row">
        <label htmlFor="unit">Convert from</label>
        <span className="field-hint">Starting scale</span>
      </div>
      <div className="select-wrap">
        <select id="unit" value={value} onChange={onChange}>
          {Object.entries(UNITS).map(([key, unit]) => (
            <option key={key} value={key}>
              {unit.name} ({unit.symbol})
            </option>
          ))}
        </select>
        <svg aria-hidden="true" viewBox="0 0 20 20">
          <path
            d="m5 7.5 5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
