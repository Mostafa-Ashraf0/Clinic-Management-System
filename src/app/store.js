import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import sidebarSlice from "../features/dashboard/sidebarSlice"
//import all slices

export const store = configureStore({
    reducer: {
        auth: authSlice,
        sidebar: sidebarSlice
    }
});