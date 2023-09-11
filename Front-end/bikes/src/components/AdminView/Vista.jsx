import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Vista = () => {

    const { register, setValue, watch, formState: { errors } } = useForm();
    const imageFile = watch('imageFile'); // Nombre del campo del input type="file"

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setValue('imageFile', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <div className="container_img_add">
                {imageFile && <img src={imageFile} alt="Vista previa de la imagen" />}
            </div>
            <div className="file-upload">
                <input
                    name='imagen'
                    type="file"
                    id="imageFile"
                    accept='image/*'
                    {...register('imageFile')}
                    onChange={handleImageChange} />
                <label htmlFor="file-input">Seleccionar archivo</label>
            </div>
            {errors.imageFile && <p>Se requiere una imagen válida.</p>}
        </>
    );
};
