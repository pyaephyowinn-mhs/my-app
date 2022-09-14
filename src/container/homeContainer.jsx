import { connect } from "react-redux";
import { fetchAllPosts } from "../store/actions/posts";
import Home from "../pages/Home";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts),
    test: () => console.log("test func"),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
