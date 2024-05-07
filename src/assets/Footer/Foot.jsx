import React from "react";
import { NavLink } from "react-router-dom";
import { Link as LinkIcon } from '@mui/icons-material';

const Foot = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer_menu">
          <div className="footer_text">
            <NavLink to={'/'}>Главная</NavLink>
            <li>Контакты</li>
            <div className="footer_mine_text">
              <a href="https://l.instagram.com/?u=http%3A%2F%2Fwa.me%2F996221241313&e=AT2pB_hvknc4dg1_jVOQIoAIIIjw7xJxiQWFXloKPXlE787GaEDfsMKEmE-ib9qWN69iqJ9lgUvOzpk0662RoXX7x3FqyBpeN8lCKfI" target="_blank" rel="noopener noreferrer"></a>
              <LinkIcon/>Instagram
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;