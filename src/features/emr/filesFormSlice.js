import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
};


const filesForm = createSlice({
    name: 'filesForm',
    initialState,
    reducers:{
        setIsVisible(state,action){
            state.isVisible = action.payload;
        }
    }
})

export default filesForm.reducer;
export const {setIsVisible} = filesForm.actions;