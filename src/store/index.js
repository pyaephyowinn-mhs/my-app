import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/postsReducer";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({ posts: postsReducer, post: postReducer });

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
