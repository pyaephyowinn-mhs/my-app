import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FAKE_DOMAIN = "https://jsonplaceholder.typicode.com/posts";

// bodyid
// title
// userId

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await axios.get(FAKE_DOMAIN);
      setPosts(fetchedPosts.data);
    };
    fetchPosts();
  }, [setPosts]);


  const postsContent =
    posts.length > 0 &&
    posts.map((post) => (
      <div className="my-2 border-2 p-2 rounded-md bg-gray-700 text-gray-100">
        <p>userID - {post.userId}</p>
        <p>{post.title}</p>
        <Link className="underline hover:no-underline" to={'/' + post.id}>Post - {post.id}</Link>
      </div>
    ));

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl my-4">Posts</h1>
      <div>{postsContent}</div>
    </div>
  );
};
export default Home;
