import React, { useEffect, useState } from "react"
import '../../assets/css/Navbar.css';
import { useNavbar } from "../../hooks/useNavbar";
import carrito from "../../assets/img/agregar-carrito.png";
import peril from "../../assets/img/sesion.png";
import salir from "../../assets/img/logout.png";
import logo1 from "../../assets/img/Logo-circle.png";
import logo2 from "../../assets/img/Logo-short.png";
import toggler from "../../assets/img/menu.png";
import options from "../../assets/img/option.png";
import { useNavigate } from "react-router-dom";
import Carta from "../PaginaProducto/Carta";
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from "../../redux/loginSlides";


const Navbar = () => {

  const navigate = useNavigate();

  //Aqui empieza el redux
  const session = useSelector((state) => state.login.session);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const storedIsUserLoggedIn = localStorage.getItem('isUserLoggedIn');

    if(storedIsUserLoggedIn === 'true'){
      dispatch(signIn());
    }else{
      dispatch(signOut());
    }

  }, [])
  
  
  const categorias = ( e )=>{
    
    navigate("/productos");
    //console.log(e?.target?.value);
  }

  return (
  <>
    <nav className="navbar">
        <div className="logos">
            <a href="/home" ><img src={logo1} alt="Aqui va nuestro precioso loguito" id="logo1"/></a>
            <a href="/home" ><img src={logo2} alt="Aqui va nuestro precioso loguito" id="logo2"/></a>
        </div>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler"><i className="ri-menu-list"><img src={toggler} alt="toggler" /></i></label>
        <div className="menu">
            <ul className="list">
                <div className="desplegable">
                    <li><a href="#"><img src={options} alt="Hola soy una imagen" id="opcion"/></a></li>
                    <li><select id="categorias" onChange={categorias}>
                        <option disabled={true}>CATEGORIAS</option>
                        <option value={"1"}>Ruta</option>
                        <option value={"2"}>Montaña</option>
                        <option value={"3"}>hibridas</option>
                        <option value={"4"}>Bmx</option>
                    </select></li>
                </div>
                <li><a href="/Carrito"><img src={carrito} alt="Hola soy una imagen" id="carrito"/></a></li>
                <li><a href="/signUp"><img src={session ? salir : peril} alt="Hola soy una imagen" id="perfil"/></a></li>
            </ul>
        </div>
    </nav>
  </>
  );
};

export default Navbar