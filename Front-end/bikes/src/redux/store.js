import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlides"

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});