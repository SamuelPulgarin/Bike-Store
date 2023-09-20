import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dato: '',
}

const carouselSlide = createSlice({
    name: 'carousel',
    initialState,
    reducers: {

        getMarca: (state, action) =>{
            state.dato = action.payload;
        }
    }
})

export const { getMarca } = carouselSlide.actions;
export default carouselSlide.reducer;