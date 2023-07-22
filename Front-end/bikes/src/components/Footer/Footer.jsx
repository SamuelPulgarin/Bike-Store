import React from "react";
import "../../assets/CSS/Footer.css";
import Logo from "../../assets/img/Logo-BikeStore.svg";
import Copy from "../../assets/img/IconoCopy.svg";



const Footer = () => {
  return (
    <body>
      <div className="FooterContain">
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="Follow_us">
          <h2>SIGUENOS EN</h2>
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="Copy">
          <img src={Copy} alt="Imagen de Copyright" />
          <h5>2023 Bike Store. Todos los derechos reservados</h5>
        </div>
      </div>
    </body>
  );
};

export default Footer;