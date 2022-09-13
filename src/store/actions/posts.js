import axios from "axios";
import { SET_POSTS, SET_TEXT } from "../types/posts";

const FAKE_DOMAIN = "https://jsonplaceholder.typicode.com/posts";

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

export const setText = (text) => {
  return {
    type: SET_TEXT,
    text,
  };
};

export const fetchAllPosts = () => {
  return async (dispatch) => {
    const response = await axios.get(FAKE_DOMAIN);
    dispatch(setPosts(response.data));
  };
};
