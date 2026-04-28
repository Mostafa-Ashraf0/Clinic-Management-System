import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dropdownViewd: false,
    patientId: null,
    timeSlots: [],
    activeSlots:[],
    actionsList: {view:false, id:null},
    liveAppoinSlot: null
};


const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers:{
        setDropdown(state,action){
            state.dropdownViewd = action.payload;
        },
        setPatientId(state,action){
            state.patientId = action.payload;
        },
        setSlots(state, action){
            state.timeSlots = action.payload;
        },
        setActiveSlots(state, action){
            state.activeSlots = action.payload;
        },
        setActionsList(state,action){
            state.actionsList = action.payload;
        },
        setLiveAppoSlot(state, action){
            state.liveAppoinSlot = action.payload;
        }
    }
})

export default appointmentSlice.reducer;
export const {setDropdown, setPatientId, setSlots, setActionsList, setActiveSlots, setLiveAppoSlot} = appointmentSlice.actions;