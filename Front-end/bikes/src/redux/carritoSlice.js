import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const carritoSlice = createSlice({
    name: 'carrito',
    initialState,
    reducers: {

        //Reducer para agregar producto al carrito
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },

        // Reducer para eliminar un producto del carrito
        removeItemFromCart: (state, action) => {

            const itemIdToRemove = action.payload; // Debe ser el ID o identificador único del producto a eliminar
            state.items = state.items.filter(item => parseInt(item.data.id, 10) !== itemIdToRemove);
            //console.log(itemIdToRemove);
            /*
            const itemIdToRemove = action.payload; // Debe ser el ID o identificador único del producto a eliminar

            // Agrega registros de depuración
            console.log('Item ID to remove:', itemIdToRemove);

            state.items = state.items.filter(item => {
                // Agrega registros de depuración para item.data.id
                console.log('Item ID in state:', item.data.id);

                // Asegúrate de que los valores sean iguales antes de la eliminación
                return item.data.id !== itemIdToRemove;
                
            });
            */

        },

        // Reducer para vaciar completamente el carrito
        clearCart: (state) => {
            state.items = [];
        },

        updateStock: (state, action) => {
            const { id, cantidad } = action.payload;
            // Encuentra el elemento correspondiente en el estado y actualiza su stock
            const itemToUpdate = state.items.find(item => item.data.id === id);

            if (itemToUpdate) {
                // Actualiza el stock en el objeto data existente
                itemToUpdate.data.cantidad = cantidad;

            }

        },
    }
})

export const { addToCart, removeItemFromCart, clearCart, updateStock } = carritoSlice.actions;
export default carritoSlice.reducer;

