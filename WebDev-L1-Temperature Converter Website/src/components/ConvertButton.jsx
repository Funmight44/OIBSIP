export default function ConvertButton({ onReset }) {
  return (
    <div className="action-row">
      <button className="convert-button" type="submit">
        Convert temperature <span aria-hidden="true">↗</span>
      </button>
      <button className="reset-button" type="button" onClick={onReset}>
        <span aria-hidden="true">↺</span> Reset
      </button>
    </div>
  )
}
