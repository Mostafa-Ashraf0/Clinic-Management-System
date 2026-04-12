import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunk";


const initialState = { 
    loading: false,
    session: null,
    error: null,
    clinic_id: null,
    initialized: false,
 }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser(state,action){
            state.session = action.payload;
            state.error = null;
            state.initialized = true;
        },
        removeUser(state){
            state.session = null;
            state.error = null;
            state.initialized = true;
        },
        setClinicId(state, action) {
            state.clinic_id = action.payload;
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

export const {removeUser, addUser, setClinicId} = authSlice.actions;
export default authSlice.reducer;