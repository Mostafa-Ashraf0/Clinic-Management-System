import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dropdownViewd: false,
    patientId: null,
    timeSlots: [],
    activeSlots:[],
    actionsList: {view:false, id:null},
    liveAppoinSlot: null,
    editAppointmentData:null,
    isEdit:false
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
        },
        setEditAppointData(state, action){
            state.editAppointmentData = action.payload;
        },
        setIsEdit(state, action){
            state.isEdit = action.payload;
        }
    }
})

export default appointmentSlice.reducer;
export const {
    setDropdown,
    setPatientId,
    setSlots,
    setActionsList,
    setActiveSlots,
    setLiveAppoSlot,
    setEditAppointData,
    setIsEdit
}
 = appointmentSlice.actions;