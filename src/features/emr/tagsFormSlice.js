import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
};


const tagsFormSlice = createSlice({
    name: 'tagsForm',
    initialState,
    reducers:{
        setIsVisible(state,action){
            state.isVisible = action.payload;
        }
    }
})

export default tagsFormSlice.reducer;
export const {setIsVisible} = tagsFormSlice.actions;