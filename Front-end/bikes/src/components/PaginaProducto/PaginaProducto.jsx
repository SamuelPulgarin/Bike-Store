import React from 'react';
import "../../assets/css/PaginaProducto.css";
import Carta from './Carta';

const PaginaProducto = () => {
    return (
        <>
        
            <div className='contenedor-filtros'>

                <div className='filtros'>
                    <h1>Filtros</h1>

                    <div className='contenedor-checks'>

                        <div className='filtro'>
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

                        <div className="filtro">
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

                        <div className="filtro">
                            <h1>Tipo:</h1>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>RUTA</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>MONTAÑA</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>BMX</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" className='check' />
                                <label>HYBRIDAS</label>
                            </div>
                        </div>

                        <div className="filtro">
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

                    </div>
                
                </div>

            </div>
        </>
    )
}

export default PaginaProducto
