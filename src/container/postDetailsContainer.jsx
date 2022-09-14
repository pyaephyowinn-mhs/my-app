import { connect } from "react-redux";
import { fetchAPost } from "../store/actions/post";
import PostDetails from "../pages/PostDetails";

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAPost: (id) => {
      dispatch(fetchAPost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (PostDetails)
