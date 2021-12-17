import { createSlice } from "@reduxjs/toolkit";
import {  fetchPosts, resetPosts } from "../actions";
import { FetchPostsInitialState} from '../types';

const initialState: FetchPostsInitialState = {
  data: [],
  loading: false,
  error: "",
};

export const fetchPostsSlice = createSlice({
    initialState,
    name: 'posts',
    reducers: {},
    extraReducers: (builder)=>{builder
        .addCase(fetchPosts.fulfilled, (state, {payload})=>{
            state.data = payload;
            state.loading = false;
        
        })
        .addCase(fetchPosts.pending, (state)=>{
            state.loading = true;
        
        })
        .addCase(fetchPosts.rejected, (state)=>{
            state.loading = false;
            state.error = 'error call';
        
        })
        .addCase(resetPosts, (state)=>{
            state.data = [];
        })
    }
})
