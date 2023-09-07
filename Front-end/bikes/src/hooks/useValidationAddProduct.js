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
        },

        validate: (value) => {
            const intValue = parseInt(value);
            if (isNaN(intValue) || intValue !== parseFloat(value)) {
                return 'Debe ser un número entero';
            }
            return true;
        },
    }

    const NOMBRE = {
        required: {
            value: true,
            message: 'Este campo es requerido'
        }
    }

    const CATEGORIA = {
        required: {
            value: true,
            message: 'Seleccione una Categoria'
        }
    }

    const MARCA = {
        required: {
            value:true,
            message: 'Seleccione una Marca'
        }
    }

    const COLOR = {
        required: {
            value:true,
            message: 'Seleccione un Color'
        }
    }

    const TALLA = {
        required: {
            value: true,
            message: 'Seleccione una Talla'
        }
    }

    const DESCRIPCION = {
        required: {
            value: true,
            message: 'Ingrese descipcion del producto'
        }
    }

    const STOCK = {
        require: {
            value: true,
            message: 'Este campo es requerido'
        },

        min: {
            value: 1,
            message: 'Debe ingresar un número mayor que 0',
        },

        validate: (value) => {
            const intValue = parseInt(value);
            if (isNaN(intValue) || intValue !== parseFloat(value)) {
                return 'Debe ser un número entero';
            }
            return true;
        },
    }

    const PRECIO = {
        required: {
            value: true,
            message: 'Este campo es requerido'
        },

        min: {
            value: 1,
            message: 'Debe ingresar un valor mayor a 0'
        },

        validate: (value) => {
            const intValue = parseInt(value);
            if (isNaN(intValue) || intValue !== parseFloat(value)) {
                return 'Debe ser un número entero';
            }
            return true;
        },    
    }

    const IMAGEN = {
        required: {
            value: true,
            message: 'Este campo es requerido',
        },
        validate: {
            isValidImage: (value) => {
                if (!value[0]) {
                    return 'Debe seleccionar una imagen';
                }
                const allowedExtensions = ['jpeg', 'jpg', 'png'];
                const fileExtension = value[0].name.split('.').pop().toLowerCase();
                if (allowedExtensions.indexOf(fileExtension) === -1) {
                    return 'El archivo debe ser una imagen JPEG, JPG o PNG';
                }
                return true;
            },
        },
    }


    return {
        ID,
        NOMBRE,
        CATEGORIA,
        MARCA,
        COLOR,
        TALLA,
        DESCRIPCION,
        STOCK,
        PRECIO,
        IMAGEN
    }


}

export default useValidationAddProduct