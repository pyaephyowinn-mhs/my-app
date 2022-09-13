import { SET_POSTS } from "./types/posts";

const initialState = {
  status: "idle",
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === SET_POSTS) {
    newState.posts = action.posts;
    newState.status = "completed";
  }
  
  return newState;
};

export default postsReducer;
