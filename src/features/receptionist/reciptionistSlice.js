import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditRecip: false,
    editDataRecip: null,
    paginatedData: null,
    paginatedLimit: null,
    currentTablePage: 1
};


const recipSlice = createSlice({
    name: "recip",
    initialState,
    reducers:{
        setIsEditRecip(state,action){
            state.isEditRecip = action.payload;
        },
        setEditDataRecip(state, action){
            state.editDataRecip = action.payload;
        },
        setPaginatedData(state, action){
            state.paginatedData = action.payload;
        },
        setPaginatedLimit(state,action){
            state.paginatedLimit = action.payload;
        },
        setCurrentTablePage(state, action){
            state.currentTablePage = action.payload;
        }
    }
})

export default recipSlice.reducer;
export const {
    setEditDataRecip, 
    setIsEditRecip,
    setPaginatedData,
    setPaginatedLimit,
    setCurrentTablePage
}
 = recipSlice.actions;