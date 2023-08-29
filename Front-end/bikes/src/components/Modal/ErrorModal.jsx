import React from 'react'
import Close from '../../assets/img/close.png'
import Warning from '../../assets/img/Warning.png'
import '../../assets/css/ErrorModal.css'

export const ErrorModal = ({openErrorModal, CloseErrorModal, titleError, messageError }) => {
    if(!openErrorModal) return null;
    
    return (
        <>
            <div className="overlay_error_modal">
                <div className="ErrorModal-content">
                    <div className="container_btn_close_modal_error">
                        <button onClick={CloseErrorModal} className='btn_close_modal_error'>
                            <img src={Close} alt="close" />
                        </button>
                    </div>
                    <div className="container_img_errorModal">
                        <img src={Warning} alt="success" />
                    </div>
                    <h2>{titleError}</h2>
                    <p>{messageError}</p>
                    
                        <button onClick={CloseErrorModal} className='btn_continuar_error_modal'>Continuar</button>
                    
                </div>
            </div>
        </>
    )
}
