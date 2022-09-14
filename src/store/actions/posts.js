import axios from "axios";
import {
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_FAILURE,
} from "../types/posts";

export const fetchAllPostsRequest = () => {
  return {
    type: FETCH_ALL_POSTS_REQUEST,
  };
};

export const fetchAllPostsSuccess = (posts) => {
  return {
    type: FETCH_ALL_POSTS_SUCCESS,
    posts,
  };
};

export const fetchAllPostsFailure = (errMessage) => {
  return {
    type: FETCH_ALL_POSTS_FAILURE,
    errMessage,
  };
};

export const fetchAllPosts = () => {
  return async (dispatch) => {
    dispatch(fetchAllPostsRequest());
    try {
      const response = await axios.get(process.env.REACT_APP_API_DOMAIN);
      dispatch(fetchAllPostsSuccess(response.data));
    } catch (err) {
      dispatch(fetchAllPostsFailure(err.message));
    }
  };
};
