import axios from "axios";
import { SET_POSTS, FETCH_POSTS_REQUEST } from "../types/posts";

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

export const fetchDataRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  }
}

export const fetchAllPosts = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    const response = await axios.get(process.env.REACT_APP_API_DOMAIN);
    // console.log(response);
    dispatch(setPosts(response.data));
  };
};
