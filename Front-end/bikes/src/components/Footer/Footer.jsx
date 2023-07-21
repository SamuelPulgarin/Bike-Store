import React from "react";
import "../../assets/CSS/Footer.css";
import Logo from "../../assets/img/Logo-BikeStore.svg";
import Copy from "../../assets/img/IconoCopy.svg";

const Footer = () => {
  return (
    <body>
      <div className="FooterContain">
        <div className="Follow_us">
          <h2>SIGUENOS EN</h2>
            <a href="#">
              <i className="Facebook">
              </i>
            </a>
            <a href="#">
              <i className="Instagram">
              </i>
            </a>
            <a href="#">
              <i className="Twitter">
              </i>
            </a>
            <a href="#">
              <i className="Youtube">
              </i>
            </a>
        </div>
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="Copy">
          <h3>2023 Bike Store. Todos los derechos reservados</h3>
          <img src={Copy} alt="Imagen de Copyright" />
        </div>
      </div>
    </body>
  );
};

export default Footer;
