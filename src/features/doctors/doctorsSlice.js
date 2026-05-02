import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEdit: false,
    editData: null
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
        }
    }
})

export default doctorSlice.reducer;
export const {
    setEditData, 
    setIsEdit
}
 = doctorSlice.actions;