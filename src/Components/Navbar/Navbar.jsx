import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scroll >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={2000}>
        <img src={logo} alt="Logo" />
      </Link>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={2000}>
            Header
          </Link>
        </li>
        <li>
          <Link to="menu" smooth={true} duration={2000}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="about-h1" smooth={true} duration={2000}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={2000}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
