import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./login/reducer";
import { fetchPostsSlice } from "./posts/reducer";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    posts: fetchPostsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
