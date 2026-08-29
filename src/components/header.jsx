import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBriefcase, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <header className="site-header">
      <nav className="nav container">
        <NavLink to="/" className="brand" end>
          ETHERA<span>STUDIO</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end>
            <FaHome className="nav-icon" /> Home
          </NavLink>
          <a href="#about">
            <FaInfoCircle className="nav-icon" /> About
          </a>
          <a href="#services">
            <FaBriefcase className="nav-icon" /> Services
          </a>
          <NavLink to="/contact">
            <FaEnvelope className="nav-icon" /> Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;