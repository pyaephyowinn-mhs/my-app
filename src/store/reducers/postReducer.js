import {
  FETCH_A_POST_SUCCESS,
  FETCH_A_POST_REQUEST,
  FETCH_A_POST_FAILURE,
} from "../types/posts";

const initialState = {
  status: "idle", // enum ['completed', 'loading', 'error']
  post: null,
  errMessage: null,
};

const postReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === FETCH_A_POST_SUCCESS) {
    newState.post = action.post;
    newState.status = "completed";
  }

  if (action.type === FETCH_A_POST_REQUEST) {
    newState.status = "loading";
  }

  if (action.type === FETCH_A_POST_FAILURE) {
    newState.status = "error";
    newState.errMessage = action.errMessage;
  }

  return newState;
};

export default postReducer;
