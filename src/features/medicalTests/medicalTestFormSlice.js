import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
};


const medicalTestForm = createSlice({
    name: 'medicalTestForm',
    initialState,
    reducers:{
        setIsVisible(state,action){
            state.isVisible = action.payload;
        }
    }
})

export default medicalTestForm.reducer;
export const {setIsVisible} = medicalTestForm.actions;