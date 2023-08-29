import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlides";
import loginReducer from "./loginSlides";

/*ja */
const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
    },
});

export default store;