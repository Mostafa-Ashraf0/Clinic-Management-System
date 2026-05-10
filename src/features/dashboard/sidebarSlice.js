import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: null,
    mobileVisible: false
};


const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers:{
        addLight(state, action){
            state.page = action.payload;
        },
        setMobileVisible(state, action){
            state.mobileVisible = action.payload;
        }
    }
})

export default sidebarSlice.reducer;
export const {addLight, setMobileVisible} = sidebarSlice.actions;