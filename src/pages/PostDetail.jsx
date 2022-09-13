import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const FAKE_DOMAIN = "https://jsonplaceholder.typicode.com/posts";

const PostDetail = () => {
  const { pid } = useParams();
  const [post, setPost] = useState();

  console.log("POST", post);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await axios.get(FAKE_DOMAIN + "/" + pid);
      setPost(fetchedPost.data);
    };
    fetchPost();
  }, [pid, setPost]);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      {post && (
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
