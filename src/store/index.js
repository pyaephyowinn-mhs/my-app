import { createStore, combineReducers } from "redux";
import { postsReducer } from "./postsReducer";

const rootReducer = combineReducers({posts: postsReducer})

let store = createStore(rootReducer);

export default store;
