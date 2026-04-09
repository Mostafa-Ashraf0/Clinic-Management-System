import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false,
    isScheduleVisible:false
};


const operationsForm = createSlice({
    name: 'operationsForm',
    initialState,
    reducers:{
        setIsVisible(state,action){
            state.isVisible = action.payload;
        },
        setIsScheduleVisible(state,action){
            state.isScheduleVisible = action.payload;
        }
    }
})

export default operationsForm.reducer;
export const {setIsVisible, setIsScheduleVisible} = operationsForm.actions;