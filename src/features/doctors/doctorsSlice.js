import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEdit: false,
    loading: false,
    editData: null,
    paginatedData: null,
    paginatedLimit: null,
    currentTablePage: 1
};


const doctorSlice = createSlice({
    name: "doctor",
    initialState,
    reducers:{
        setIsEdit(state,action){
            state.isEdit = action.payload;
        },
        setEditData(state, action){
            state.editData = action.payload;
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

export default doctorSlice.reducer;
export const {
    setEditData, 
    setIsEdit,
    setPaginatedData,
    setPaginatedLimit,
    setCurrentTablePage,
    setLoading
}
 = doctorSlice.actions;