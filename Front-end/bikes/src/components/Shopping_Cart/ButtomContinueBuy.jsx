import React from 'react';
import "../../assets/css/ButtomContinueBuy.css";
import { useNavigate } from 'react-router-dom';

export const ButtomContinueBuy = () => {

    const navigate = useNavigate();

    const Hola = () =>{

        navigate("/productos");
    }


  return (
    <>
       <button onClick={Hola} id='buttom-continue-buy'>Continuar comprando</button>
    </>
  )
}
