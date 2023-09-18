import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlides";
import loginReducer from "./loginSlides";
import carritoReducer from "./carritoSlice";
import facturaReducer from "./dataFactureSlice";


/*ja */
const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        carrito: carritoReducer,
        factura: facturaReducer,
    },
});

export default store;