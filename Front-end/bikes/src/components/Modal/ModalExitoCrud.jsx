import React from 'react';
import { useNavigate } from 'react-router-dom';
import MarcaVerificacionx from '../../assets/img/MarcaVerificacion.png';
import Closex from '../../assets/img/close.png';
import '../../assets/css/Modal.css';

export const ModalExitoCrud = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;
    const navigate = useNavigate();

    return (
        <>
            <div className="overlay__modal">
                <div className="modal-content">
                    <div className="container_btn_close">
                        <button onClick={onClose} className='btn__close'>
                            <img src={Closex} alt="close" />
                        </button>
                    </div>
                    <div className="container__img_modal">
                        <img src={MarcaVerificacionx} alt="success" />
                    </div>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <a href="/Admin">
                        <button className='btn__continuar'>Continuar</button>
                    </a>
                </div>
            </div>
        </>
    )
}

