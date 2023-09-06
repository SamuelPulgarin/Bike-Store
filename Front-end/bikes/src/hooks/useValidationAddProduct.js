const useValidationAddProduct = () => {


    const ID = {
        required: {
            value: true,
            message: "Es requerido este campo"
        },

        minLength: {
            value: 3,
            message: 'Minimo 3 caracteres',
        },

        maxLength: {
            value: 4,
            message: 'Maximo 4 caracteres'
        }
    }

    const NOMBRE = {
        required: {
            value: true,
            message: 'Este campo es requerido'
        }
    }

    const CATEGORIA = {
        required:{
            value: true,
            message: 'Seleccione una categoria'
        }
    }


    return {
        ID,
        NOMBRE,
        CATEGORIA
    }


}

export default useValidationAddProduct