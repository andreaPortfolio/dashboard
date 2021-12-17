import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployees } from "../actions";
import {InitialStateEmployees} from '../../types';

const initialState: InitialStateEmployees = {
  data: [],
  loading: false,
  error: "",
};

export const fetchEmployeesSlice = createSlice({
    initialState,
    name: 'employees',
    reducers: {},
    extraReducers: (builder)=>{builder
        .addCase(fetchEmployees.fulfilled, (state, {payload})=>{
            state.data = payload;
            state.loading = false;
        
        })
        .addCase(fetchEmployees.pending, (state)=>{
            state.loading = true;
        
        })
        .addCase(fetchEmployees.rejected, (state)=>{
            state.loading = false;
            state.error = 'error call';
        
        })
    }
})
