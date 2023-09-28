import React, { useEffect, useState } from "react"
import '../../assets/css/Navbar.css';
import { useNavbar } from "../../hooks/useNavbar";
import carrito from "../../assets/img/shopping-cart.png";
import peril from "../../assets/img/sesion.png";
import logo1 from "../../assets/img/Logo-circle.png";
import logo2 from "../../assets/img/Logo-short.png";
import toggler from "../../assets/img/menu.png";
import options from "../../assets/img/option.png";
import salir  from "../../assets/img/profile.png";
import { useNavigate } from "react-router-dom";
import Carta from "../PaginaProducto/Carta";
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from "../../redux/loginSlides";
import { ConfirmModal } from "../Modal/ConfirmModal";
import { Link } from 'react-router-dom';

/*ja */
const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('isUserLoggedIn');
        dispatch(signOut());
        localStorage.removeItem('authUser');
        closeModal();
    }

    //Aqui empieza el redux
    const session = useSelector((state) => state.login.session);
    const cartItems = useSelector((state) => state.carrito.items);
    const dispatch = useDispatch();

    useEffect(()=>{

        setCantidad(cartItems.length);

    },[cartItems])

    React.useEffect(() => {
        const storedIsUserLoggedIn = localStorage.getItem('isUserLoggedIn');

        if (storedIsUserLoggedIn === 'true') {
            dispatch(signIn());
        } else {
            dispatch(signOut());
        }

    }, [])

    const navigate = useNavigate();

    const categorias = (e) => {
        
        navigate("/productos")
    }

    const [cantidad, setCantidad] = useState(0);


    return (
        <>
            <nav className="navbar">
                <div className="logos">
                    <Link to={"/"}><img src={logo1} alt="Aqui va nuestro precioso loguito" id="logo1" /></Link>
                    <Link to={"/"}><img src={logo2} alt="Aqui va nuestro precioso loguito" id="logo2" /></Link>
                </div>
                <input type="checkbox" id="toggler" />
                <label htmlFor="toggler"><i className="ri-menu-list"><img src={toggler} alt="toggler" /></i></label>
                <div className="menu">
                    <ul className="list">
                        <div className="desplegable">
                            <li><img src={options} alt="Hola soy una imagen" id="opcion" /></li>
                            <li><select id="categorias" onChange={categorias}>
                                <option>CATEGORIAS</option>
                                <option value={"1"}>Ruta</option>
                                <option value={"2"}>Montaña</option>
                                <option value={"3"}>hibridas</option>
                                <option value={"4"}>Bmx</option>
                            </select></li>
                        </div>
                        <li>
                            <div className="productos-carrito-container">
                                <Link to={"/Carrito"}><img src={carrito} alt="Hola soy una imagen" id="carrito" /></Link>
                                <input type="text" value={cantidad} id="cantidad-producto-carrito"/>
                            </div>
                        </li>
                        <li>{session ?
                            <Link to={"/profile"}>
                                <img src={session ? salir : peril} alt="Cerrar sesión" id="perfil" />
                            </Link>
                            :
                            <Link to={"/signUp"}>
                                <img src={session ? salir : peril} alt="Cerrar sesión" id="perfil" />
                            </Link>}
                        </li>
                    </ul>
                </div>
            </nav>

            <ConfirmModal
                title="Cerrar Sesión"
                message="¿Seguro que deseas cerrar sesión?"
                openModal={isModalOpen}
                onConfirm={handleLogout}
                onCancel={closeModal}
            />
        </>
    );
};

export default Navbar