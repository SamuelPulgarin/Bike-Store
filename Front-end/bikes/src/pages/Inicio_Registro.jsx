import React from 'react';
import { Signin_Signup } from '../components/SignIn-SignUp/Signin_Signup';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const Inicio_Registro = () => {
  return (
    <>
      <Navbar/>
      <Signin_Signup></Signin_Signup>
      <Footer/>
    </>
  )
}
