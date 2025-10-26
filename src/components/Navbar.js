import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../images/Logo0.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="LOGO Enactus FSBM" height="50" width="100" />
        </Link>
        
        {/* Toggler mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse gap-4 text-white fw-semibold" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto d-flex gap-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                À propos de nous
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link">
                Équipe
              </Link>
            </li>
            <li className="nav-item">
              {/* Utilisation de React-Bootstrap Dropdown */}
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic" className="nav-link">
                  En savoir plus
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* <Dropdown.Item as={Link} to="/impacts">
                    Impacts
                  </Dropdown.Item> */}
                  <Dropdown.Item as={Link} to="/projects">
                    Projets
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/events">
                    Événements
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/contact">
                    Contactez-nous
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>

          <Link to="/join">
          <button className="btn btn-warning">Rejoindre le club</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
