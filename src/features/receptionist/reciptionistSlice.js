import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditRecip: false,
    editDataRecip: null
};


const RecipSlice = createSlice({
    name: "Recip",
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

export default RecipSlice.reducer;
export const {
    setEditDataRecip, 
    setIsEditRecip
}
 = RecipSlice.actions;