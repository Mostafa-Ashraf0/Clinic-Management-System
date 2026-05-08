import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false,
    isEditTest: false, 
    editData: null,
    generalLoading: false
};


const medicalTestForm = createSlice({
    name: 'medicalTestForm',
    initialState,
    reducers:{
        setIsVisible(state,action){
            state.isVisible = action.payload;
        },
        setIsEditTest(state, action){
            state.isEditTest = action.payload;
        },
        setEditData(state, action){
            state.editData = action.payload;
        },
        setGeneralLoading(state, action){
            state.generalLoading = action.payload;
        }
    }
})

export default medicalTestForm.reducer;
export const {
    setIsVisible,
    setIsEditTest,
    setEditData,
    setGeneralLoading
} = medicalTestForm.actions;