import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: "dashboard"
};


const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers:{
        addLight(state, action){
            state.page = action.payload;
        }
    }
})

export default sidebarSlice.reducer;
export const {addLight} = sidebarSlice.actions;