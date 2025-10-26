import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='footer-nav'>
          <ul>

            <li>
              <Link to="/about" > À propos de nous</Link>
            </li>
            <li>
              <Link to="/team"> Équipe</Link>
            </li>
            <li>
              <Link to="/projects" > Projets</Link>
            </li>
            <li>
              <Link to="/events"> Événements</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/3nac1us.fsbm?igsh=MXBtN3Z6d3EwdW03bw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://web.facebook.com/groups/527084714789080/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/enactusfsbm/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Enactus FSBM - Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
