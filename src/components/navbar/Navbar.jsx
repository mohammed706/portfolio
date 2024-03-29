import React, { useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h2>It's Mo</h2>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-filter-right" />
          </button>
          <div className="collapse navbar-collapse" id="main">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <HashLink
                  className="nav-link p-2 p-lg-3  active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link p-2 p-lg-3 " to="/#tech-stack">
                  Tech Stack
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link p-2 p-lg-3 " to="/projects">
                  Projects
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link p-2 p-lg-3 " to="/certificate">
                  Certificates
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link p-2 p-lg-3 " to="/#about">
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link p-2 p-lg-3 " to="/#contact">
                  Contact
                </HashLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link p-2 p-lg-3 "
                  style={{ backgroundColor: "#9cb5ba", color: "white" }}
                  href="/resume.pdf"
                  download="CV-PDF-document"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
