import React from 'react'
import '../../assets/css/ConfirmModal.css'

export const ConfirmModal = ({ title, message, onCancel, onConfirm, openModal }) => {
  if (!openModal) return null;

  return (
    <div className="overlay__confirm_modal">
      <div className="cofirm_modal_content">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="container__btns_modal">
          <button className='btn__cancel_modal' onClick={onCancel}>Cancelar</button>
          <button className='btn__confirm_modal' onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

