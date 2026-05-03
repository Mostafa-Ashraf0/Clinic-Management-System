import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditPatient: false,
    editDataPatient: null
};


const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers:{
        setIsEditPatient(state,action){
            state.isEditPatient = action.payload;
        },
        setEditDataPatient(state, action){
            state.editDataPatient = action.payload;
        }
    }
})

export default patientSlice.reducer;
export const {
    setIsEditPatient, 
    setEditDataPatient
}
 = patientSlice.actions;