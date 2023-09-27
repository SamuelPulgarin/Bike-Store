import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import '../../assets/css/Modal.css'
import MarcaVerificacion from '../../assets/img/MarcaVerificacion.png'
import Close from '../../assets/img/close.png'
import { useDispatch } from 'react-redux'


export const MoldalCompraExitosa = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navegar = () => {
        
        // Abre una nueva ventana o pestaña
        const nuevaVentana = window.open('', '_blank');

        // Navega a la página deseada en la nueva ventana utilizando la propiedad location
        nuevaVentana.location.href = '/pdf';
            
        // Cierra la ventana actual del modal
        onClose();
        window.location.href = '/'
    }

    

    return (
        <>
            <div className="overlay__modal">
                <div className="modal-content">
                    <div className="container_btn_close">
                        <button onClick={navegar} className='btn__close'>
                            <img src={Close} alt="close" />
                        </button>
                    </div>
                    <div className="container__img_modal">
                        <img src={MarcaVerificacion} alt="success" />
                    </div>
                    <h2>{title}</h2>
                    <p>{content}</p>

                    <button className='btn__continuar' onClick={navegar}>Continuar</button>

                </div>
            </div>
        </>
    )
}
