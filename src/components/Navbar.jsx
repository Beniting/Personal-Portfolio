export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold brand-text" href="#">
          <span className="brand-icon">{'<'}</span>
          MyPortfolio
          <span className="brand-icon">{'/>'}</span>
        </a>

        <div className="d-flex align-items-center gap-3">
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link nav-link-custom" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link nav-link-custom" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link nav-link-custom" href="#qualifications">Qualifications</a></li>
            {/* <li className="nav-item"><a className="nav-link nav-link-custom" href="#certifications">Certifications</a></li> */}
            <li className="nav-item"><a className="nav-link nav-link-custom" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}