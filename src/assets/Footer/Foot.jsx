import React from "react";
import "../components/styles/Foot.scss";

const Foot = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer_menu">
          <div className="footer_row">
            <p>Контакты</p>
            <p>Instagram</p>
          </div>
          <div className="footer_row">
            <p>+996221241313</p>
            <p>@brandup.kg</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
