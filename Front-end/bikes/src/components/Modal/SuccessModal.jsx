import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/css/Modal.css'
import MarcaVerificacion from '../../assets/img/MarcaVerificacion.png'
import Close from '../../assets/img/close.png'

export const SuccessModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;
    const navigate = useNavigate();

    return (
        <>
            <div className="overlay__modal">
                <div className="modal-content">
                    <div className="container_btn_close">
                        <button onClick={onClose} className='btn__close'>
                            <img src={Close} alt="close" />
                        </button>
                    </div>
                    <div className="container__img_modal">
                        <img src={MarcaVerificacion} alt="success" />
                    </div>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <a href="/signIn">
                        <button className='btn__continuar'>Continuar</button>
                    </a>
                </div>
            </div>
        </>
    )
}
