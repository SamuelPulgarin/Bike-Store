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
            state.items = state.items.filter(item => item.id !== itemIdToRemove);
        },

        // Reducer para vaciar completamente el carrito
        clearCart: (state) => {
            state.items = [];
        },
    },

})

export const { addToCart } = carritoSlice.actions;
export default carritoSlice.reducer;

