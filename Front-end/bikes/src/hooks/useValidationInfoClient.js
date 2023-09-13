import React from 'react'

const useValidationInfoClient = () => {

    const NOMBRE = {
        required: {
            value: true,
            message: "Es requerido este campo"
        },
        minLength: {
            value: 2,
            message: "El Nombre debe tener al menos 2 caracteres",
          },
          maxLength: {
            value: 30,
            message: "El Nombre no puede tener más de 30 caracteres",
          },
    }

    const APELLIDO = {
        required: {
            value: true,
            message: "Es requerido este campo"
        },
        minLength: {
            value: 2,
            message: "Los apellidos deben tener al menos 2 caracteres",
          },
          maxLength: {
            value: 50,
            message: "Los apellidos no pueden tener más de 50 caracteres",
          },
    }

    const TIPO_DOCUMENTO = {
        required: {
            value: true,
            message: "Es requerido este campo"
        }
    }

    const DOCUMENTO = {
        required: {
            value: true,
            message: "Es requerido este campo"
        },
        minLength: {
            value: 7,
            message: "El documento debe tener al menos 7 dígitos",
          },
          maxLength: {
            value: 10,
            message: "El documento no puede tener más de 10 dígitos",
          },
          pattern: {
            value: /^[0-9]+$/,
            message: "El documento debe contener solo números",
          },
    }

    const INDICATIVO = {
        required:  {
            value: true,
            message: "Es requerido este campo"
        }
    }

    const TELEFONO = {
        required: {
            value: true,
            message: "Es requerido este campo"
        },
        pattern: {
            value: /^[0-9]+$/,
            message: "El teléfono debe contener solo números",
          },
          minLength: {
            value: 10,
            message: "El teléfono debe tener al menos 10 dígitos",
          },
          maxLength: {
            value: 12,
            message: "El teléfono no puede tener más de 12 dígitos",
          }
    }

    const EMAIL = {
        required: {
            value: true,
            message: "Es requerido este campo"
        },
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "El Email no es válido",
          }
    }

    const DEPARTAMENTO = {
        required: {
            value: true,
            message: "Es requerido este campo"
        },
        minLength: {
            value: 2,
            message: "El Departamento debe tener al menos 2 caracteres",
          },
          maxLength: {
            value: 50,
            message: "El Departamento no puede tener más de 50 caracteres",
          }
    }

    const CIUDAD = {
        required: {
            value: true,
            message: "Es requerido este campo"
        },
        minLength: {
            value: 2,
            message: "La Ciudad debe tener al menos 2 caracteres",
          },
          maxLength: {
            value: 50,
            message: "La Ciudad no puede tener más de 50 caracteres",
          }
    }

    const DETALLES_DIRECCION = {
        required: {
            value: true,
            message: "Es requerido este campo"
        },
        minLength: {
            value: 2,
            message: "La Ciudad debe tener al menos 2 caracteres",
          },
          maxLength: {
            value: 50,
            message: "La Ciudad no puede tener más de 50 caracteres",
          },
    }

    const  DIRECCION = {
        required: {
            value: true,
            message: "Es requerido este campo"
        },
        minLength: {
            value: 5,
            message: "La dirección debe tener al menos 5 caracteres",
          },
          maxLength: {
            value: 100,
            message: "La dirección no puede tener más de 100 caracteres",
          },
    }

  return {
    NOMBRE,
    APELLIDO,
    TIPO_DOCUMENTO,
    DOCUMENTO,
    INDICATIVO,
    TELEFONO,
    EMAIL,
    DEPARTAMENTO,
    CIUDAD,
    DETALLES_DIRECCION,
    DIRECCION,
  }
}

export default useValidationInfoClient