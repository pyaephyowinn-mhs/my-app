import axios from "axios";
import { SET_POSTS } from "../types/posts";

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

export const fetchAllPosts = () => {
  return async (dispatch) => {
    const response = await axios.get(process.env.REACT_APP_API_DOMAIN);
    dispatch(setPosts(response.data));
  };
};
