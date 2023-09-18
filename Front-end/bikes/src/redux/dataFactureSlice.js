import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataFactura:[],
};

const facturaSlice = createSlice({
    name: 'factura',
    initialState,
    reducers: {

        setFactura: (state, action) => {
            state.dataFactura.push(action.payload);
        },

    },
});

export const { setFactura } = facturaSlice.actions;
export default facturaSlice.reducer;