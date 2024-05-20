import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="cont__text">
          <p className="adres-title">Адрес</p>
          <p className="title">Исанова 42/2</p>
          <p className="adres-title">Контакты</p>
          <p className="title">+996 221 241 313</p>
          <p className="adres-title">Время работы</p>
          <p className="title">9:00-18:00</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
