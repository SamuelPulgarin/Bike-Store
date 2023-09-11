import React, { useEffect } from 'react'
import '../../assets/css/Crud.css'
import Lupa from '../../assets/img/Lupa.png'
import Editar from '../../assets/img/Editar.png'
import Eliminar from '../../assets/img/Eliminar.png'
import { FetchProducts } from "../../hooks/useFetch";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ConfirmImgModal } from '../Modal/ConfirmImgModal'
import { ErrorModal } from "../Modal/ErrorModal";
import { ModalDelete } from '../Modal/ModalDelete'


export const Crud = () => {

    const urlProduct = '/productos';
    const { fetchDataProduct,
        dataProduct,
        deleteProduct,
        isOpenErrorModal,
        openErrorModal,
        closeErrorModal,
        isOpenDeleteModal,
        openModalDelete,
        closeModalDelete } = FetchProducts(urlProduct);

    useEffect(() => {
        fetchDataProduct();
    }, []);

    const [productIdToDelete, setProductIdToDelete] = useState(null);

    //Para abrir modal
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

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
                                            <button className='btn_crud' onClick={() => {
                                                setProductIdToDelete(product.id); // Guarda el id del producto a eliminar
                                                openModal();
                                            }}>
                                                <img src={Eliminar} alt="eliminar" />
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <ConfirmImgModal
                title={"Eliminar Producto"}
                message={"¿Esta Seguro de ELIMINAR este producto?"}
                openModal={isOpenModal}
                onCancel={closeModal}
                onConfirm={() => {
                    deleteProduct(productIdToDelete); // Llama a deleteProduct con el id del producto
                    closeModal(); // Cierra el modal después de confirmar
                }}
            />
            {/* Modal de error */}
            <ErrorModal
                openErrorModal={isOpenErrorModal}
                CloseErrorModal={closeErrorModal}
                titleError="¡Error! Eliminación del Producto"
                messageError="Hubo un error al eliminar el producto"
            />
            {/*Modal delete*/}
           <ModalDelete
                deleteOpen={isOpenDeleteModal}
                deleteClose={closeModalDelete}
                titleDelete="Eliminación Exitosa"
                contentDelete="El producto a sido eliminado con ¡Exito!"
           /> 
        </>

    )
}
