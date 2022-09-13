const initialState = {
  status: "idle",
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "setPosts") {
    newState.posts = action.posts;
    newState.status = "completed";
  }

  return newState;
};