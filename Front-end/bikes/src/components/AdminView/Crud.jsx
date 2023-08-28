import React from 'react'
import '../../assets/css/Crud.css'
import Lupa from '../../assets/img/Lupa.png'
import Editar from '../../assets/img/Editar.png'
import Eliminar from '../../assets/img/Eliminar.png'

export const Crud = () => {
    return (
        <>
            <main className='container_all_crud'>
                <div className="container_search_btn">
                    <div className="container_search_crud">
                        <input type="search" name="search" placeholder='Bucar' />
                        <button>
                            <img src={Lupa} alt="search" />
                        </button>
                    </div>
                    <div className="container_btn_products">
                        <button>Agregar Productos</button>
                    </div>
                </div>
                <div className="container_table_crud">
                    <table className='content_table'>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Producto</th>
                                <th>Categoria</th>
                                <th>Marca</th>
                                <th>Color</th>
                                <th>Talla</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Bicicleta GW BMX Lancer Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, consequatur laboriosam vel explicabo aperiam eius dicta maiores illum, ipsam, et quas similique dignissimos reiciendis at doloribus dolore hic nobis illo.</td>
                                <td>BMX</td>
                                <td>GW</td>
                                <td>Azul</td>
                                <td>S</td>
                                <td>100</td>
                                <td>$349.900</td>
                                <td>
                                    <button className='btn_crud'>
                                        <img src={Editar} alt="editar" />
                                    </button>
                                    <button button className='btn_crud'>
                                        <img src={Eliminar} alt="eliminar" />
                                    </button >
                                </td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Bicicleta GW BMX Lancer</td>
                                <td>BMX</td>
                                <td>GW</td>
                                <td>Azul</td>
                                <td>S</td>
                                <td>100</td>
                                <td>$349.900</td>
                                <td>
                                    <button className='btn_crud'>
                                        <img src={Editar} alt="editar" />
                                    </button>
                                    <button button className='btn_crud'>
                                        <img src={Eliminar} alt="eliminar" />
                                    </button >
                                </td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Bicicleta GW BMX Lancer</td>
                                <td>BMX</td>
                                <td>GW</td>
                                <td>Azul</td>
                                <td>S</td>
                                <td>100</td>
                                <td>$349.900</td>
                                <td>
                                    <button className='btn_crud'>
                                        <img src={Editar} alt="editar" />
                                    </button>
                                    <button button className='btn_crud'>
                                        <img src={Eliminar} alt="eliminar" />
                                    </button >
                                </td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Bicicleta GW BMX Lancer</td>
                                <td>BMX</td>
                                <td>GW</td>
                                <td>Azul</td>
                                <td>S</td>
                                <td>100</td>
                                <td>$349.900</td>
                                <td>
                                    <button className='btn_crud'>
                                        <img src={Editar} alt="editar" />
                                    </button>
                                    <button button className='btn_crud'>
                                        <img src={Eliminar} alt="eliminar" />
                                    </button >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}
