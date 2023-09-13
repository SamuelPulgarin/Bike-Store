import React from 'react'
import Close from '../../assets/img/close.png'
import MarcaVerificacion from '../../assets/img/MarcaVerificacion.png'

export const ModalDelete = ({ deleteOpen, deleteClose, titleDelete, contentDelete }) => {
    if (!deleteOpen) return null;

    return (
        <>
            <div className="overlay__modal">
                <div className="modal-content">
                    <div className="container_btn_close">
                        <button onClick={deleteClose} className='btn__close'>
                            <img src={Close} alt="close" />
                        </button>
                    </div>
                    <div className="container__img_modal">
                        <img src={MarcaVerificacion} alt="success" />
                    </div>
                    <h2>{titleDelete}</h2>
                    <p>{contentDelete}</p>
                    <button onClick={deleteClose} className='btn__continuar'>Continuar</button>
                </div>
            </div>
        </>
    )
}
