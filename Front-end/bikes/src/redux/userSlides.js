import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    email: ""
}
/*ja */
export const userSlide = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) =>{
            const {username, email} = action.payload;
            state.username = username;
            state.email = email;

        },
        changeEmail: (state, action) =>{
            state.email = action.payload;

        }
    }
});

export const { addUser, changeEmail } = userSlide.actions;
export default userSlide.reducer;