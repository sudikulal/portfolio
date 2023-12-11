import React from "react";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark  fixed-top mb-4"
        style={{
          background:
            "linear-gradient(112.1deg, rgb(63, 76, 119) 11.4%,rgb(32, 38, 57) 70.2%)",
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="#about">
            <img
              src="https://img.icons8.com/?size=100&id=yy4kVfgjQwg2&format=png"
              alt="Logo"
              width={30}
              height={24}
              className="d-inline-block align-text-top me-2"
            />
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
