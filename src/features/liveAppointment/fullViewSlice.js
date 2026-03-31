import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    testsVisible: false,
    filesVisible: false
};


const fullViewSlice = createSlice({
    name: 'liveAppointFullView',
    initialState,
    reducers:{
        setTestVisible(state,action){
            state.testsVisible = action.payload;
        },
        setFilesVisible(state,action){
            state.filesVisible = action.payload;
        }
    }
})

export default fullViewSlice.reducer;
export const {setTestVisible, setFilesVisible} = fullViewSlice.actions;