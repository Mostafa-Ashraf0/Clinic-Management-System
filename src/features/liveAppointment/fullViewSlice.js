import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    testsVisible: false,
    filesVisible: false,
    liveFormVisible:false
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
        },
        setLiveFormVisible(state,action){
            state.liveFormVisible = action.payload;
        }
    }
})

export default fullViewSlice.reducer;
export const {setTestVisible, setFilesVisible, setLiveFormVisible} = fullViewSlice.actions;