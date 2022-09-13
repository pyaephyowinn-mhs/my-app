import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const FAKE_DOMAIN = "https://jsonplaceholder.typicode.com/posts";

const Home = () => {
  const { posts, status, test } = useSelector((state) => state);
  console.log("test", test);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(FAKE_DOMAIN);
      dispatch({ type: "setPosts", posts: response.data });
    };
    if (status === "idle") {
      fetchPosts();
    }
  }, [dispatch, status]);

  const postsContent =
    posts &&
    posts.length > 0 &&
    posts.map((post) => (
      <div
        key={post.id}
        className="my-2 border-2 p-2 rounded-md bg-gray-700 text-gray-100"
      >
        <p>userID - {post.userId}</p>
        <p>{post.title}</p>
        <Link className="underline hover:no-underline" to={"/" + post.id}>
          Post - {post.id}
        </Link>
      </div>
    ));

  return (
    <div className="flex flex-col items-center bg-gray-500">
      <h1 className="text-2xl my-4">Posts</h1>
      {status === "completed" && <div>{postsContent}</div>}
    </div>
  );
};
export default Home;
