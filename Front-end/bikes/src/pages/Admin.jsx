import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Crud } from '../components/AdminView/Crud'

export const Admin = () => {
  return (
    <>
        <Navbar></Navbar>
        <Crud></Crud>
    </>
  )
}
