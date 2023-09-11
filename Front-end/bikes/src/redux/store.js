import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlides";
import loginReducer from "./loginSlides";
import carritoReducer from "./carritoSlice";


/*ja */
const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        carrito: carritoReducer,
    },
});

export default store;