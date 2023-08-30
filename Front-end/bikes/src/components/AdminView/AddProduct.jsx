import React from 'react'
import '../../assets/css/AddProduct.css'

export const AddProduct = () => {
  return (
    <>
        <div className="overlay_add_product">
            <div className='add_product_content'>
                <form method="POST">
                    <div className="info__product">
                        <input type="text" placeholder='Nombre Producto'/>

                        <input type="text" placeholder='Categoria'/>

                        <input type="text" placeholder='Marca' />

                        <input type="text" placeholder='Stock'/>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
