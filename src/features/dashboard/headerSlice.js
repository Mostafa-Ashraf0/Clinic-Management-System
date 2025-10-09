import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dropdownViewd: false
};


const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers:{
        setDropdown(state,action){
            state.dropdownViewd = action.payload;
        }
    }
})

export default headerSlice.reducer;
export const {setDropdown} = headerSlice.actions;