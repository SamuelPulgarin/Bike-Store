import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    username: "",
    email: ""
}
/*ja */
export const userSlide = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) =>{
            const {id, username, email} = action.payload;
            state.id = id;
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