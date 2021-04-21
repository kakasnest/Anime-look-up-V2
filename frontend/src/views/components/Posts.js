import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await axios.get("/api/posts");
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
