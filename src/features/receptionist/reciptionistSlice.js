import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditRecip: false,
    editDataRecip: null
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
        }
    }
})

export default recipSlice.reducer;
export const {
    setEditDataRecip, 
    setIsEditRecip
}
 = recipSlice.actions;