import "../../assets/css/PaginaProducto.css";
import Carta from './Carta';
/*ja */
const PaginaProducto = () => {

    const [marcaSeleccionada, setMarcaSeleccionada] = useState({
        giant: false,
    });
    
    const [datosFiltrados, setDatosFiltrados] = useState([]);
    
    const handleOnCheckbox = e => {
        setMarcaSeleccionada({
            ...marcaSeleccionada,
            [e.target.value]: e.target.checked,
        });
    
        if (e.target.checked) {
            const resultadoMarca = data.filter(item => item.marca === e.target.value)
    
            setDatosFiltrados([
                ...datosFiltrados,
                resultadoMarca
            ])
        } else {
            const resultadoMarca = datosFiltrados.filter(item => item.marca !== e.target.value)
    
            setDatosFiltrados([...resultadoMarca]);
        }
    }

    return (
        <>
            <div className='contenedor-filtros'>

                <div className='filtros'>
                    <h1>Filtros</h1>

                    <div className='contenedor-checks'>

                        <div className='filtro'>
                            <h1>Marca:</h1>
                            <div className='label-check'>
                                <input onChange={handleOnCheckbox} type="checkbox" name='Scott' value='Scott' id='Scott' className='check' />
                                <label htmlFor='scott'>SCOTT</label>
                            </div>
                            <div className='label-check'>
                                <input onChange={handleOnCheckbox} type="checkbox" name='GW' value='GW' id='GW' className='check' />
                                <label htmlFor='GW'>GW</label>
                            </div>
                            <div className='label-check'>
                                <input onChange={handleOnCheckbox} type="checkbox" name='Giant' value='Giant' id='Giant' className='check' />
                                <label htmlFor='Giant'>GIANT</label>
                            </div>
                            <div className='label-check'>
                                <input onChange={handleOnCheckbox} type="checkbox" name='Trek' value='Trek' id='Trek' className='check' />
                                <label htmlFor='Trek'>TREK</label>
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
