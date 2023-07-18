import React, { useEffect } from "react";
import '../../assets/css/Navbar.css';
import { useNavbar } from "../../hooks/useNavbar";
import carrito from "../../assets/img/agregar-carrito.png";
import peril from "../../assets/img/sesion.png";
import logo1 from "../../assets/img/Logo-circle.png";
import logo2 from "../../assets/img/Logo-short.png";
import toggler from "../../assets/img/menu.png";
import options from "../../assets/img/option.png";


const Navbar = () => {

  const { prueba, prueba2, prueba3, prueba4 } = useNavbar();

  useEffect(() => {
    prueba();
    prueba2();
    prueba3();
    prueba4();
  }, []);

  return (
  <>
    <nav className="navbar">
        <div className="logos">
            <img src={logo1} alt="Aqui va nuestro precioso loguito" id="logo1"/>
            <img src={logo2} alt="Aqui va nuestro precioso loguito" id="logo2"/>
        </div>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler"><i className="ri-menu-list"><img src={toggler} alt="toggler" /></i></label>
        <div className="menu">
            <ul className="list">
                <div className="desplegable">
                    <li><a href="#"><img src={options} alt="Hola soy una imagen" id="opcion"/></a></li>
                    <li><select id="">
                        <option value="">CATEGORIAS</option>
                        <option value="">Ruta</option>
                        <option value="">Montaña</option>
                        <option value="">hibridas</option>
                        <option value="">Bmx</option>

                    </select></li>
                </div>
                <li><a href="#"><img src={carrito} alt="Hola soy una imagen" id="carrito"/></a></li>
                <li><a href="#"><img src={peril} alt="Hola soy una imagen" id="perfil"/></a></li>
            </ul>
        </div>
    </nav>
  </>
  );
};

export default Navbar;
