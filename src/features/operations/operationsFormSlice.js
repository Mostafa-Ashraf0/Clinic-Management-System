import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
};


const operationsForm = createSlice({
    name: 'operationsForm',
    initialState,
    reducers:{
        setIsVisible(state,action){
            state.isVisible = action.payload;
        }
    }
})

export default operationsForm.reducer;
export const {setIsVisible} = operationsForm.actions;