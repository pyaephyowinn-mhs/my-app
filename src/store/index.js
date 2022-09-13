import { createStore } from "redux";

const initialState = {
  status: "idle",
  posts: [],
  test: "test",
};

const postsReducer = (state, action) => {
  const newState = { ...state };

  if (action.type === "setPosts") {
    newState.posts = action.posts;
    newState.status = "completed";
  }

  if (action.type === "test") {
    newState.test = "test changed";
  }

  return newState;
};

let store = createStore(postsReducer, initialState);

store.dispatch({ type: "test" });

export default store;
