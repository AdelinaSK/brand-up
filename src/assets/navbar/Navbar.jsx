import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../images/BRAND UP.png";
import '../components/styles/Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <NavLink to={"/"} className="header-logo">
          <img src={icon} alt="Logo" />
        </NavLink>
        <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
          <div className="header-item">
            <NavLink to={"/price"} onClick={() => setIsOpen(false)} style={{ color: "aliceblue" }}>
              Прайсы
            </NavLink>
          </div>
          <div className="header-item">
            <NavLink to={"/cont"} onClick={() => setIsOpen(false)} style={{ color: "aliceblue" }}>
              Контакты
            </NavLink>
          </div>
          <div className="header-item">
            <NavLink to={"/brand-up"} onClick={() => setIsOpen(false)} style={{ color: "aliceblue" }}>
              О нас
            </NavLink>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
