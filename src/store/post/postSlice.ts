import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../model/post";

import data from "../../data";

type PostState = {
  items: Post[];
};

const initialState: PostState = {
  items: data,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.items.push(action.payload);
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, removePost } = postSlice.actions;

export default postSlice.reducer;
