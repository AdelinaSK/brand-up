import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="cont__text">
          <p className="adres-title">Адрес</p>
          <p className="adres-title">Контакты</p>
          <p className="adres-title">Время работы</p>
        </div>
        <div className="cont__mine-text">
          <p>Исанова 42/2</p>
          <p>+996 221 241 313</p>
          <p>9:00-18:00</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
