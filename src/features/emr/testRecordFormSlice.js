import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
};


const testRecordForm = createSlice({
    name: 'testRecordForm',
    initialState,
    reducers:{
        setIsVisible(state,action){
            state.isVisible = action.payload;
        }
    }
})

export default testRecordForm.reducer;
export const {setIsVisible} = testRecordForm.actions;