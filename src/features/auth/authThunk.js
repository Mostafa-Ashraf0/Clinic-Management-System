import signInWithEmail from "./authAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({email,pass}, { rejectWithValue})=>{
        try{
            const user = await signInWithEmail(email,pass);
            return user;
        } catch(err){
            return rejectWithValue(err.message);
        }
    }
);
