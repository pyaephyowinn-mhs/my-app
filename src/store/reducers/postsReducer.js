import {
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_FAILURE,
} from "../types/posts";

const initialState = {
  status: "idle", // enum ['completed', 'loading', 'error']
  posts: [],
  errMessage: null,
};

const postsReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === FETCH_ALL_POSTS_SUCCESS) {
    newState.posts = action.posts;
    newState.status = "completed";
  }

  if (action.type === FETCH_ALL_POSTS_REQUEST) {
    newState.status = "loading";
  }

  if (action.type === FETCH_ALL_POSTS_FAILURE) {
    newState.status = "error";
    newState.errMessage = action.errMessage;
  }

  return newState;
};

export default postsReducer;
