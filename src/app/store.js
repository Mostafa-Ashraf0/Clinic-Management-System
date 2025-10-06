import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice"
//import all slices

export const store = configureStore({
    reducer: {
        auth: authSlice
    }
});