import React, { useEffect} from "react";
import "../../assets/css/PaginaProducto.css";
import { filterBrand } from "../../hooks/useFilter"
import { filterSizes } from "../../hooks/useFilter";
import { filterType } from "../../hooks/useFilter";
import { filterColor } from "../../hooks/useFilter";

/*ja */
const PaginaProducto = () => {

        useEffect(() => {
          filterBrand();
        }, []);

        useEffect(() => {
            filterSizes();
        }, []);

        useEffect(() => {
            filterType();
        }, []);

        useEffect(() => {
            filterColor();
        }, []);
    

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
                                <input  type="checkbox" className="check"/>
                                <label>Scott</label>
                                </a>
                            </div>
                            <div className='label-check'>
                                <a href="#" className='category_item' category='GW'>
                                <input  type="checkbox" className="check"/>
                                <label>GW</label>
                                </a>
                            </div>
                            <div className='label-check'>
                                <a href="#" className='category_item' category='Giant'>
                                <input type="checkbox" className="check"/>
                                <label>Giant</label>
                                </a>
                            </div>
                            <div className='label-check'>
                                <a href="#" className='category_item' category='Trek'>
                                <input  type="checkbox" className="check"/>
                                <label>Trek</label>
                                </a>
                            </div>
                        </div>

                        <div className="filtro">
                            <h1>Talla:</h1>
                            <div className='label-check'>
                            <a href="#" className='size_item' type='XS'>
                                <input type="checkbox" className='check' />
                                <label>XS</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='size_item' type='S'>
                                <input type="checkbox" className='check' />
                                <label>S</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='size_item' type='M'>
                                <input type="checkbox" className='check' />
                                <label>M</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='size_item' type='L'>
                                <input type="checkbox" className='check' />
                                <label>L</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='size_item' type='XL'>
                                <input type="checkbox" className='check' />
                                <label>XL</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='size_item' type='XXL'>
                                <input type="checkbox" className='check' />
                                <label>XXL</label>
                            </a>
                            </div>
                        </div>

                        <div className="filtro">
                            <h1>Tipo:</h1>
                            <div className='label-check'>
                            <a href="#" className='type_item' itemType='Ruta'>
                                <input type="checkbox" className='check' />
                                <label>RUTA</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='type_item' itemType='Montaña'>
                                <input type="checkbox" className='check' />
                                <label>MONTAÑA</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='type_item' itemType='BMX'>
                                <input type="checkbox" className='check' />
                                <label>BMX</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='type_item' itemType='Híbrida'>
                                <input type="checkbox" className='check' />
                                <label>HiBRIDAS</label>
                            </a>
                            </div>
                        </div>

                        <div className="filtro">
                            <h1>Color:</h1>
                            <div className='label-check'>
                            <a href="#" className='color_item' typeof='Negro'>
                                <input type="checkbox" className='check' />
                                <label>NEGRO</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='color_item' typeof='Rojo'>
                                <input type="checkbox" className='check' />
                                <label>ROJO</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='color_item' typeof='Azul'>
                                <input type="checkbox" className='check' />
                                <label>AZUL</label>
                            </a>
                            </div>
                            <div className='label-check'>
                            <a href="#" className='color_item' typeof='Blanco'>
                                <input type="checkbox" className='check' />
                                <label>BLANCO</label>
                            </a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default PaginaProducto
