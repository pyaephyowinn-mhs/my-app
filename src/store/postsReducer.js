import { SET_POSTS, FETCH_POSTS_REQUEST } from "./types/posts";

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

  if( action.type === FETCH_POSTS_REQUEST) {
    newState.status = "loading";
  }

  return newState;
};

export default postsReducer;
