import React from "react";
import png from "../images/Frame (1).png";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <div className="homepage-text">
          <li>
            Маркетинговое агентство «BrandUp» 📈Полный спектр услуг по
            продвижению вашего бизнеса 💵Увеличим ваши продажи в социальных
            сетях
          </li>
          <img src={png} alt="png" />
        </div>
        <div className="homepage-service">
          <li className="service">
            <p>Проект менеджер</p>
            <NavLink to={'/meneger'}>Подробнее</NavLink>
          </li>
          <li className="service">
            <p>Таргетолог или трафик менеджер</p>
            <NavLink to={'/target'}>Подробнее</NavLink>
          </li>
          <li className="service">
            <p>Дизайнер и его роль</p>
            <NavLink to={'/dizain'}>Подробнее</NavLink>
          </li>
          <li className="service">
            <p>SMM-специалист и его обязанности</p>
            <NavLink to={'/smm'}>Подробнее</NavLink>
          </li><li className="service">
            <p>Копирайтер</p>
            <NavLink to={'/copirait'}>Подробнее</NavLink>
          </li>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
