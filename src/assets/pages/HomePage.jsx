import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <div className="homepage-text">
          <p>
            Маркетинговое агентство «BrandUp» 📈Полный спектр услуг по
            продвижению вашего бизнеса 💵Увеличим ваши продажи в социальных
            сетях
          </p>
        </div>
        <div className="homepage-service">
          <li className="service">
            <p>Проект менеджер</p>
            <NavLink to={"/men"}>Подробнее</NavLink>
          </li>
          <li className="service">
            <p>Таргетолог или трафик менеджер</p>
            <NavLink to={"/targ"}>Подробнее</NavLink>
          </li>
          <li className="service">
            <p>Дизайнер и его роль</p>
            <NavLink to={"/diz"}>Подробнее</NavLink>
          </li>
          <li className="service">
            <p>SMM-специалист и его обязанности</p>
            <NavLink to={"/smm"}>Подробнее</NavLink>
          </li>
          <li className="service">
            <p>Копирайтер</p>
            <NavLink to={"/copi"}>Подробнее</NavLink>
          </li>
        </div>
      </div>
    </div>
  );
};

export default HomePage;