import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunk";


const initialState = { 
    loading: false,
    user: null,
    error: null
 }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        removeUser(state){
            state.user = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        });
    }
});

export const {removeUser} = authSlice.actions;
export default authSlice.reducer;