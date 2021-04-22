import React, { useState } from "react";
import axios from "axios";

import { createPostURL } from "../../request_constants/private.js";

const MyPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const post = {
    title,
    content,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { created },
      } = await axios.post(createPostURL, post);
      post = created;
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      hello<div>from my posts</div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleTitle} />
        <input type="text" onChange={handleContent} />
        <button>Post</button>
      </form>
    </div>
  );
};

export default MyPosts;
