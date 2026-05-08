import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false,
    isScheduleVisible:false,
    isEditOps:false,
    isEditSchedule: false,
    editDataOps: null,
    editDataSchedule: null,
    tableVisible:false,
    generalLoading: false
};


const operationsForm = createSlice({
    name: 'operationsForm',
    initialState,
    reducers:{
        setIsVisible(state,action){
            state.isVisible = action.payload;
        },
        setIsScheduleVisible(state,action){
            state.isScheduleVisible = action.payload;
        },
        setIsEditOps(state,action){
            state.isEditOps = action.payload;
        },
        setIsEditSchedule(state,action){
            state.isEditSchedule = action.payload;
        },
        setEditDataOps(state, action){
            state.editDataOps = action.payload;
        },
        setEditDataSchedule(state, action){
            state.editDataSchedule = action.payload;
        },
        setTableVisible(state,action){
            state.tableVisible = action.payload;
        },
        setGeneralLoading(state, action){
            state.generalLoading = action.payload;
        }
    }
})

export default operationsForm.reducer;
export const {
    
    setIsVisible,
    setIsScheduleVisible,
    setIsEditOps,
    setIsEditSchedule,
    setEditDataOps,
    setEditDataSchedule,
    setTableVisible,
    setGeneralLoading

    } = operationsForm.actions;