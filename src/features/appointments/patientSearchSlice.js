import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phone:'',
    finalPatient: {
        name:'',
        age:'',
        email:''
    },
    selectedPatient: [],
};


const patientSearchSlice = createSlice({
    name: "patientSearch",
    initialState,
    reducers:{
        setSelectedPatient(state,action){
            state.selectedPatient = action.payload;
        },
        setFinalPatient(state,action){
            state.finalPatient = action.payload;
        },
        setPhone(state, action){
            state.phone = action.payload;
        }
    }
})

export default patientSearchSlice.reducer;
export const {setSelectedPatient, setFinalPatient, setPhone} = patientSearchSlice.actions;