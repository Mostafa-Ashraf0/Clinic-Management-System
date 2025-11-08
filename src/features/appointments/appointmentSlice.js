import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dropdownViewd: false
};


const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers:{
        setDropdown(state,action){
            state.dropdownViewd = action.payload;
        }
    }
})

export default appointmentSlice.reducer;
export const {setDropdown} = appointmentSlice.actions;