import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditPatient: false,
    loading: false,
    editDataPatient: null,
    paginatedData: null,
    paginatedLimit: null,
    currentTablePage: 1
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
        },
        setPaginatedData(state, action){
            state.paginatedData = action.payload;
        },
        setPaginatedLimit(state,action){
            state.paginatedLimit = action.payload;
        },
        setCurrentTablePage(state, action){
            state.currentTablePage = action.payload;
        },
        setLoading(state, action){
            state.loading = action.payload;
        }
    }
})

export default patientSlice.reducer;
export const {
    setIsEditPatient, 
    setEditDataPatient,
    setPaginatedData,
    setPaginatedLimit,
    setCurrentTablePage,
    setLoading
}
 = patientSlice.actions;