import React from 'react'
import '../../assets/css/ConfirmImgModal.css'
import Warning from '../../assets/img/Warning.png'


export const ConfirmImgModal = ({ title, message, onCancel, onConfirm, openModal }) => {
    if (!openModal) return null;
    return (
        <>
            <div className="overlay_modal_cimg">
                <div className="modal_content_Cimg">
                <h2>{title}</h2>
                    <div className="contaner_img_modal_c">
                        <img src={Warning} alt="Warning" />
                    </div>
                <p>{message}</p>
                    <div className="container_btns_modalC">
                        <button className='btn_cancel_modalCimg' onClick={onCancel}>Cancelar</button>
                        <button className='btn_confirm_modalCimg' onClick={onConfirm}>Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
