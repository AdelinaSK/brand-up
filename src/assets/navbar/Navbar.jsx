import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../images/BRAND UP.png"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__row">
          <NavLink to={"/"} className="header-logo">
            <img src={icon} alt="Logo" />
          </NavLink>
          <div className="navbar__menu">
            <ul className="navbar-list">
              <div className="header-item">
                <NavLink to={"/"} className="navbar-link">
                  Главная
                </NavLink>
              </div>
              <div className="navbar-item">
                <NavLink to={"/price"} className="navbar-link">
                  Прайсы
                </NavLink>
              </div>
              <div className="navbar-item">
                <NavLink to={"/cont"} className="navbar-link">
                  Контакты
                </NavLink>
              </div>
              <div className="navbar-item">
                <NavLink to={"/brand-up"} className="navbar-link">
                  О нас
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
