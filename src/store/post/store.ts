import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./postSlice";
import { useDispatch, useSelector } from "react-redux";

const postStore = configureStore({
  reducer: {
    post: postSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof postStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof postStore.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default postStore;
