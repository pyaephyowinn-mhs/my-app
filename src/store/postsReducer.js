import { SET_POSTS, SET_TEXT } from "./types/posts";

const initialState = {
  status: "idle",
  posts: [],
  text: null,
};

const postsReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === SET_POSTS) {
    newState.posts = action.posts;
    newState.status = "completed";
  }

  if (action.type === SET_TEXT) {
    newState.text = action.text;
  }

  return newState;
};

export default postsReducer;
