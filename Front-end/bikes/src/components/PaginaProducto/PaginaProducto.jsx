import React, { useEffect,useState } from "react";
import "../../assets/css/PaginaProducto.css";
import { filter } from "../../hooks/useFilter"

/*ja */
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
                                <a href="#" className='category_item' category='Scott'>
                                <input  type="checkbox"/>
                                <label htmlFor='Scott'>Scott</label>
                                </a>
                            </div>
                            <div className='label-check'>
                                <a href="#" className='category_item' category='GW'>
                                <input  type="checkbox" />
                                <label htmlFor='GW'>GW</label>
                                </a>
                            </div>
                            <div className='label-check'>
                                <a href="#" className='category_item' category='Giant'>
                                <input  type="checkbox" />
                                <label htmlFor='Giant'>Giant</label>
                                </a>
                            </div>
                            <div className='label-check'>
                                <a href="#" className='category_item' category='Trek'>
                                <input  type="checkbox" />
                                <label htmlFor='Trek'>Trek</label>
                                </a>
                            </div>
                        </div>

                        <div className="filtro">
                            <h1>Talla:</h1>
                            <div className='label-check'>
                                <input type="checkbox" name='XS' value='BXS' id='XS' className='check' />
                                <label>XS</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" name='S' value='S' id='S' className='check' />
                                <label>S</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" name='M' value='M' id='M' className='check' />
                                <label>M</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" name='L' value='L' id='L' className='check' />
                                <label>L</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" name='XL' value='XL' id='XL' className='check' />
                                <label>XL</label>
                            </div>
                            <div className='label-check'>
                                <input type="checkbox" name='XXL' value='XXL' id='XXL' className='check' />
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
                                <label>HiBRIDAS</label>
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
