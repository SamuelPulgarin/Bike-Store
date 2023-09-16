import React from 'react'
import { useState } from 'react'

const useValidationUpdate = () => {
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
      const newErrors = {};
  
      if (formData.nombre.trim() === "") {
        newErrors.nombre = "El nombre es requerido";
      }

      if(formData.marca.trim() === "") {
        newErrors.marca = "Este campo es requerido"
      }

      if(formData.categoria.trim() === "") {
        newErrors.categoria = "Este campo es requerido" 
      }

      if(formData.color.trim() === ""){
        newErrors.color = "Este campo es requerido"
      }

      if(formData.talla.trim() === ""){
        newErrors.talla = "Este campo es requerido"
      }

      if (formData.descripcion.trim() === "") {
        newErrors.descripcion = "La descripción es requerida"
      }

      if(formData.stock.trim() === "") {
        newErrors.stock = "Este campo es requerido"
      }
      else {
        const stockValue = parseInt(formData.stock, 10);
        if (isNaN(stockValue) || stockValue <= 0 || stockValue % 1 !== 0) {
          newErrors.stock = "El stock debe ser un número entero positivo, minimo 1";
        }
      }

      if(formData.precio.trim() === "") {
        newErrors.precio = "Este campo es requerido"
      }
      else {
        const precioValue = parseFloat(formData.precio);
        if (isNaN(precioValue) || precioValue <= 0) {
          newErrors.precio = "El precio debe ser un número positivo";
        }
      }

      if (!formData.imagen || !formData.imagen.name) {
        newErrors.imagen = "Debes adjuntar una imagen";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0; // 
    };


  return {
    errors,
    validateForm
  }
}

export default useValidationUpdate