import React from "react";
import "../../assets/CSS/Footer.css";
import Logo from "../../assets/img/Logo-BikeStore.svg";
import Copy from "../../assets/img/IconoCopy.svg";
import logox from "../../assets/img/Logo x.png";

/*ja */

const Footer = () => {
  return (
    <div className="FooterContain">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Follow_us">
        <h2>SIGUENOS EN</h2>
        <a href="https://www.facebook.com/bikestoreSCR" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/bikestore96/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com/BikeStorescr">
          <img src={logox} alt="Logo x de Twitter" className="logox" target="_blank"/>
        </a>
        <a
          href="https://www.youtube.com/channel/UCGTK5deG0RjqqaLfu0vmUCg"
          target="_blank"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="Copy">
        <img src={Copy} alt="Imagen de Copyright" />
        <h5>2023 Bike Store. Todos los derechos reservados</h5>
      </div>
    </div>
  );
};

export default Footer;