import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetail = ({ post: postState, fetchAPost }) => {
  const { post, status, errMessage } = postState;

  console.log(post, status, errMessage);

  const { pid } = useParams();

  useEffect(() => {
    if (status === "idle") {
      fetchAPost(pid);
    }
  }, [pid, status, fetchAPost]);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      {status === "loading" && <div>loading...</div>}
      {status === "error" && (
        <div>{errMessage || "something went wrong. try again later"}</div>
      )}
      {status === "completed" && post && (
        <div className="text-center max-w-[55ch] p-2 border-2 rounded-md bg-gray-700 text-gray-100">
          <h1 className="text-2xl my-2">
            <span> post - {post.id}</span> {post.title}
          </h1>
          <p>posted by user - {post.userId}</p>
          <p className="my-2">{post.body}</p>
          <div>
            <Link to="/" className="underline hover:no-underline">
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default PostDetail;
