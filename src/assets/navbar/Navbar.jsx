import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__row">
          <NavLink to={"/"} className="header-logo">
            {/* <img src={logo} alt="Logo" /> */}
          </NavLink>
          <div className="navbar__menu">
            <ul className="navbar-list">
              <li className="header-item">
                <NavLink to={"/"} className="navbar-link">
                  Главная
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to={"/ser"} className="navbar-link">
                  Услуги
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to={"/price"} className="navbar-link">
                  Прайсы
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to={"/cont"} className="navbar-link">
                  Контакты
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to={"/we"} className="navbar-link">
                  О нас
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
