import React from 'react';
import { SignUp } from '../components/SignUp/SignUp';
/*ja */
export const useFetchPost = () => {
    const onSubmit = async(DataRegister) => {
        try{
            const response = await fetch('http://localhost:3060/registerUser',{
                method: 'POST',
                headers: {
                    'Contend-Type': 'applications/json'
                },
                body: JSON.stringify(DataRegister)
            });

            if(response.ok){
                console.log('Usuario resgistrado exitosamente');
                console.log(DataRegister);
            }
            else{
                console.log('Error al registrar el usuario');
            }
        }
        catch(error){
            console.error('Error al conectarse con el sevidor', error);
        }
    };

  return {

  }
}
