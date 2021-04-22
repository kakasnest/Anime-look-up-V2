import { useEffect, useState } from "react";
import axios from "axios";

import { getPostsURL } from "../../request_constants/public.js";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await axios.get(getPostsURL);
    console.log(data);
    setPosts([...posts, data]);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      Hello<div>hello</div>
    </div>
  );
};

export default Posts;
