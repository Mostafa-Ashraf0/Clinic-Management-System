import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import sidebarSlice from "../features/dashboard/sidebarSlice";
import headerSlice from "../features/dashboard/headerSlice";
import appointmentSlice from '../features/appointments/appointmentSlice';
import tagsFormSlice from '../features/emr/tagsFormSlice';
import patientEmrSlice from '../features/emr/patientEmrSlice';
//import all slices

export const store = configureStore({
    reducer: {
        auth: authSlice,
        sidebar: sidebarSlice,
        header: headerSlice,
        appointment: appointmentSlice,
        tagsForm: tagsFormSlice,
        patientEmr: patientEmrSlice
    }
});