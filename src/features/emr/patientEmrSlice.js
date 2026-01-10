import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patientId: null
};


const patientEmrSlice = createSlice({
    name: 'patientEmr',
    initialState,
    reducers:{
        setPatientId(state,action){
            state.patientId = action.payload;
        }
    }
})

export default patientEmrSlice.reducer;
export const {setPatientId} = patientEmrSlice.actions;