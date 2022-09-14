import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ posts: postsState, fetchAllPosts }) => {
  const { posts, status, errMessage } = postsState;

  useEffect(() => {
    if (status === "idle") {
      fetchAllPosts();
    }
  }, [status, fetchAllPosts]);

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
    <div className="flex flex-col items-center">
      <h1 className="text-2xl my-4">Posts</h1>
      {status === "loading" && <div>loading...</div>}
      {status === "error" && (
        <div>{errMessage || "something went wrong, try again later"}</div>
      )}
      {status === "completed" && <div>{postsContent} </div>}
    </div>
  );
};
export default Home;
