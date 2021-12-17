import { createSlice } from "@reduxjs/toolkit";
import { postEmployee } from "../actions";
import { InitialStateEmployee } from '../../types';

const initialState: InitialStateEmployee = {
  data: null,
  loading: false,
  error: "",
};

export const reducerEmployeeSlice = createSlice({
    initialState,
    name: 'employee',
    reducers: {},
    extraReducers: (builder)=>{builder
        .addCase(postEmployee.fulfilled, (state, {payload})=>{
            state.data = payload;
            state.loading = false;
        
        })
        .addCase(postEmployee.pending, (state)=>{
            state.loading = true;
        
        })
        .addCase(postEmployee.rejected, (state)=>{
            state.loading = false;
            state.error = 'error call';
        
        })
    }
})
