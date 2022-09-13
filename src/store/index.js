import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({ posts: postsReducer });

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
