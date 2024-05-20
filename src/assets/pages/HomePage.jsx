import React from "react";
import { NavLink } from "react-router-dom";
import "../components/styles/HomePage.scss";
import copi from "../images/copi.png";
import diz from "../images/дизайнер.png";
import cmm from "../images/смм.png";
import target from "../images/таргет.png";
import manager from "../images/менеджер.png";
import mobi from "../images/мобилография.png";
import individ from "../images/индивид.png";
import expert from "../images/эксперт.png";
import creative from "../images/креатив.png";
import partner from "../images/партнер.png";
import result from "../images/результат.png";
import level from "../images/повышение.png";
import klient from "../images/привлечение.png";
import razny from "../images/разнообразие.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <div className="homepage-text">
          <h1 className="homepage-title">
            Маркетинговое агентство «BrandUp» предлагает полный спектр
            профессиональных услуг по интегрированному продвижению бизнеса в
            социальных сетях. Наша миссия заключается в обеспечении системного
            роста объёмов продаж наших клиентов через эффективное применение
            передовых маркетинговых стратегий и технологий.
          </h1>
          <div className="homepage-card">
            <h2>Чем занимается наше агентство</h2>
            <p className="homepage-information">
              <img src={klient} alt="klient" />
              <h3>Привлечение клиентов</h3>
              Привлекаем клиентов как магнит! Наша команда экспертов готова
              создать для вашего бизнеса неповторимый имидж, привлекательные
              предложения и эффективные маркетинговые стратегии. Результат?
              Нарастающий поток клиентов и стабильный рост вашего бизнеса.
              Доверьтесь нам – мы знаем, как сделать ваш бренд непревзойденным!
            </p>
            <p className="homepage-information">
              <img src={level} alt="level" />
              <h3>Повышение качества</h3>
              Поднимаем планку качества! Наша цель – обеспечить вашему бизнесу
              преимущество на рынке. С помощью передовых методов и
              профессионального подхода мы гарантируем повышение уровня вашей
              продукции или услуг. Доверьтесь нам для достижения новых вершин в
              вашем бизнесе!
            </p>
            <p className="homepage-information">
              <img src={razny} alt="razny" />
              <h3>Разнообразие наших проектов</h3>
              Откройте мир возможностей с нашим разнообразием проектов! Мы
              специализируемся на создании уникальных и инновационных решений
              для вашего бизнеса. Независимо от сферы деятельности, мы
              предлагаем широкий спектр проектов, которые помогут вам выделиться
              и достичь успеха. Доверьтесь нам, чтобы воплотить ваши идеи в
              реальность!
            </p>
          </div>
          <h2 className="titlee">Мы предлогаем вам наши услуги </h2>
        </div>
        <div className="homepage-service">
          <p className="service">
            <img src={manager} alt="manager" />
            Проект менеджер
            <NavLink to={"/men"}>Подробнее</NavLink>
          </p>
          <p className="service">
            <img src={target} alt="target" />
            Таргетолог или трафик менеджер
            <NavLink to={"/targ"}>Подробнее</NavLink>
          </p>
          <p className="service">
            <img src={diz} alt="diz" />
            Графический дизайнер и его роль
            <NavLink to={"/diz"}>Подробнее</NavLink>
          </p>
          <p className="service">
            <img src={cmm} alt="cmm" />
            SMM-специалист и его обязанности
            <NavLink to={"/smm"}>Подробнее</NavLink>
          </p>
          <p className="service">
            <img src={copi} alt="copi" />
            Копирайтер
            <NavLink to={"/copi"}>Подробнее</NavLink>
          </p>
          <p className="service">
            <img src={mobi} alt="copi" />
            Мобилограф
            <NavLink to={"/mobilograf"}>Подробнее</NavLink>
          </p>
        </div>
        <h2 className="titlee">Почему нужно выбрать нас</h2>
        <div className="homepage-info-wrapper">
          <p className="homepage-info">
            <img src={expert} alt="expert" />
            <h3>Эксперты своего дела</h3>
            Наши специалисты не просто следуют лучшим практикам – они создают
            их, обеспечивая клиентам максимальный охват их целевой аудитории и
            значительное увеличение продаж.
          </p>

          <p className="homepage-info">
            <img src={individ} alt="individ" />
            <h3>Индивидуальность проектов</h3>
            Для каждого клиента нашей компании разрабатывается
            персонализированная стратегия. Мы гарантируем индивидуальный подход,
            учитывая уникальные потребности и цели каждого заказчика, чтобы
            обеспечить максимально эффективное решение его бизнес-задач.
          </p>

          <p className="homepage-info">
            <img src={creative} alt="create" />
            <h3>Креативность проектов</h3>
            Каждый проект, реализуемый нашей компанией, отличается высоким
            уровнем креативности. Мы стремимся к инновациям и оригинальности во
            всех аспектах нашей работы, обеспечивая уникальные и эффективные
            решения для каждого клиента.
          </p>
          <p className="homepage-info">
            <img src={partner} alt="partner" />
            <h3>Наши партнеры</h3>
            Мы поддерживаем наших партнёров в достижении их стратегических
            целей, предоставляя комплексные услуги для их роста и развития.
            Вместе мы строим устойчивый путь к успеху.
          </p>

          <p className="homepage-info">
            <img src={result} alt="result" />
            <h3>Результативность наших проектов</h3>
            Наши услуги обеспечивают клиентам высокий уровень результативности,
            строго соответствующий установленным целям и стандартам качества.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
