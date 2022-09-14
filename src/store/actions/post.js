import axios from "axios";
import {
  FETCH_A_POST_REQUEST,
  FETCH_A_POST_SUCCESS,
  FETCH_A_POST_FAILURE,
} from "../types/posts";

export const fetchAPostRequest = () => {
  return {
    type: FETCH_A_POST_REQUEST,
  };
};

export const fetchAPostSuccess = (post) => {
  return {
    type: FETCH_A_POST_SUCCESS,
    post,
  };
};

export const fetchAPostFailure = (errMessage) => {
  return {
    type: FETCH_A_POST_FAILURE,
    errMessage,
  };
};

export const fetchAPost = (id) => {
  return async (dispatch) => {
    dispatch(fetchAPostRequest());
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_DOMAIN + "/" + id
      );
      dispatch(fetchAPostSuccess(response.data));
    } catch (err) {
      dispatch(fetchAPostFailure(err.message))
    }
  };
};
