import React from 'react';
import "../../assets/css/PaginaProducto.css";


const PaginaProducto = () => {
    return (
        <>
            <div className='contenedor-filtros'>

                <div className='filtros'>
                    <h1>Filtros</h1>

                    <div className='contenedor-checks'>

                        <div className='filtro1'>
                            <h1>Marca:</h1>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>SCOTT</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>GW</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>GIANT</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>TREK</label>
                            </div>
                        </div>

                        <div className="filtro2">
                            <h1>Color:</h1>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>NEGRO</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>ROJO</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>AZUL</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>BLANCO</label>
                            </div>
                        </div>

                        <div className="filtro3">
                            <h1>Talla:</h1>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>XS</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>S</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>M</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>L</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>XL</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>XXL</label>
                            </div>
                        </div>

                    </div>
                
                </div>

            </div>
        </>
    )
}

export default PaginaProducto
