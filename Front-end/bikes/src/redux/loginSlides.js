import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    session: false,
};

const loginSlides = createSlice({
    name: 'login',
    initialState,
    reducers: {
        signIn: (state) =>{
            state.session = true;
        },
        signOut: (state) =>{
            state.session = false;
        },
    },
});

export const { signIn, signOut } = loginSlides.actions;
export default loginSlides.reducer;