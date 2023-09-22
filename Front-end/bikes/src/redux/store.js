import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlides";
import loginReducer from "./loginSlides";
import carritoReducer from "./carritoSlice";
import facturaReducer from "./dataFactureSlice";
import carouselReducer from "./carouselSlide";


/*ja */
const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        carrito: carritoReducer,
        factura: facturaReducer,
        carousel: carouselReducer,
    },
});

export default store;