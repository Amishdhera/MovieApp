
import { Link } from "react-router-dom";

function Navbar({ title, mode, toggleMode, onSearch }) {
  return (
    <>
      <nav style={{
        fontFamily: 'Arial, sans-serif',
        borderBottom: '2px solid #e50914'
      }} className={`navbar navbar-expand-lg ${mode ? 'navbar-light' : 'navbar-dark'}`}>
        <div className="container-fluid">
          {/* Brand Logo */}
          <a className="navbar-brand fw-bold" style={{
            color: '#e50914',
            fontSize: '1.8rem',
            textDecoration: 'none'
          }} href="#">
            {title}
          </a>

          {/* Mobile Toggle Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='${mode ? '%23000' : '%23e50914'}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
            }}></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navigation Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold"
                  to="/Home"
                  style={{
                    color: mode ? '#000000' : '#ffffff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    padding: '8px 16px',
                    margin: '0 5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#e50914';
                    e.target.style.background = mode ? '#f8f9fa' : '#1a1a1a';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = mode ? '#000000' : '#ffffff';
                    e.target.style.background = 'transparent';
                  }}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold"
                  to="/About"
                  style={{
                    color: mode ? '#000000' : '#ffffff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    padding: '8px 16px',
                    margin: '0 5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#e50914';
                    e.target.style.background = mode ? '#f8f9fa' : '#1a1a1a';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = mode ? '#000000' : '#ffffff';
                    e.target.style.background = 'transparent';
                  }}>
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold"
                  to="/Contact"
                  style={{
                    color: mode ? '#000000' : '#ffffff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    padding: '8px 16px',
                    margin: '0 5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#e50914';
                    e.target.style.background = mode ? '#f8f9fa' : '#1a1a1a';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = mode ? '#000000' : '#ffffff';
                    e.target.style.background = 'transparent';
                  }}>
                  CONTACT US
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="me-4">
              <input
                type="search"
                placeholder="Search movies..."
                className="form-control"
                onChange={(e) => onSearch(e.target.value)}
                style={{
                  maxWidth: '250px',
                  borderRadius: '0px',
                  border: '1px solid #e50914',
                  fontSize: '0.9rem',
                  background: mode ? '#ffffff' : '#000000',
                  color: mode ? '#000000' : '#ffffff'
                }}
              />
            </div>

            {/* Dark/Light Mode Toggle */}
            <div className="form-check form-switch d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
                style={{
                  width: '3.5rem',
                  height: '1.5rem',
                  cursor: 'pointer',
                  border: '1px solid #e50914'
                }}
              />
              <label className="form-check-label ms-3 fw-bold" htmlFor="flexSwitchCheckDefault" style={{
                color: mode ? '#000000' : '#ffffff',
                fontSize: '0.9rem'
              }}>
                {mode ? 'LIGHT' : 'DARK'}
              </label>
            </div>
          </div>
        </div>
      </nav>

      {/* Add custom styles for navbar background */}
      <style>
        {`
          .navbar-light {
            background: #ffffff !important;
          }
          .navbar-dark {
            background: #000000 !important;
          }
          .form-check-input:checked {
            background-color: #e50914;
            border-color: #e50914;
          }
          .form-control:focus {
            border-color: #e50914;
            box-shadow: 0 0 0 0.2rem rgba(229, 9, 20, 0.25);
            background: ${mode ? '#ffffff' : '#000000'};
            color: ${mode ? '#000000' : '#ffffff'};
          }
          .form-control::placeholder {
            color: ${mode ? '#666666' : '#999999'};
          }
        `}
      </style>
    </>
  );
}

export default Navbar;