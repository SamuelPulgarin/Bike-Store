import React, { useEffect } from 'react'
import '../../assets/css/Crud.css'
import Lupa from '../../assets/img/Lupa.png'
import Editar from '../../assets/img/Editar.png'
import Eliminar from '../../assets/img/Eliminar.png'
import { FetchProducts } from "../../hooks/useFetch";
import { Link } from 'react-router-dom'

export const Crud = () => {

    const urlProduct = '/productos';
    const { fetchDataProduct, dataProduct } = FetchProducts(urlProduct);

    useEffect(() => {
        fetchDataProduct();
    }, []);

    const deleteProduct = (id) =>{
        console.log(id)
    }

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
                            {dataProduct.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.nombre}</td>
                                    <td>{product.categoria}</td>
                                    <td>{product.marca}</td>
                                    <td>{product.color}</td>
                                    <td>{product.talla}</td>
                                    <td>{product.stock}</td>
                                    <td>$ {product.precio}</td>
                                    <td>
                                        <div className="container_btns_tabla">
                                            <Link to={`/Add/${product.id}`}>
                                                <button className='btn_crud'>
                                                    <img src={Editar} alt="editar" />
                                                </button>
                                            </Link>
                                            <button button className='btn_crud' onClick={() => deleteProduct(product.id)} >
                                                <img src={Eliminar} alt="eliminar" />
                                            </button >
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}
