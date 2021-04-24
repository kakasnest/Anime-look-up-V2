import { useEffect, useState } from "react";
import axios from "axios";

import { getPostsURL } from "../../request_constants/public.js";
import Post from "../components/Post.js";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(getPostsURL);
      setPosts(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      Hello
      <div>
        {posts
          .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
          .map((post) => (
            <Post key={post._id} post={post} className="Post" />
          ))}
      </div>
    </div>
  );
};

export default Posts;
