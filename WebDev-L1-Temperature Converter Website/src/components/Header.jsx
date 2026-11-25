export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="TempConvert home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M14 14.76V5a3 3 0 0 0-6 0v9.76a5 5 0 1 0 6 0Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M11 17V8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span>temp<span className="brand-accent">convert</span></span>
      </a>
      <span className="header-note">A precise little utility</span>
    </header>
  )
}
