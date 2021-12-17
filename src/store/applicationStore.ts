import { configureStore } from "@reduxjs/toolkit";
import {useDispatch} from 'react-redux';
import { loginSlice } from "./login/reducer";
import { fetchPostsSlice } from "./posts/reducer";
import { fetchEmployeesSlice, reducerEmployeeSlice} from "./employees";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    posts: fetchPostsSlice.reducer,
    employees: fetchEmployeesSlice.reducer,
    employee: reducerEmployeeSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();
