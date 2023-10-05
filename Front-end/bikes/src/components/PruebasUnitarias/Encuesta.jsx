import React from 'react';

export function Bolivia(numero, trabaja, sueldo){

    if(numero === 1){
        return 'Masculino';
    }else if(numero ===2){
        return 'Femenino'
    }

    if(trabaja === 1){
        return true;
    }else if(trabaja === 2){
        return false;
    }

    if(sueldo){
        return 1000000;
    }else{
        return 0;
    }

}

export const Encuesta = () => {

  return (
    <>

    </>
  )
}
