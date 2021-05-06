import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  createPostURL,
  getUserPostsURL,
  deletePostURL,
  putPostURL,
} from "../../request_constants/private.js";
import UserPost from "../components/UserPost.js";

const MyPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let post = {
    title,
    content,
  };
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState("");

  const getUserPosts = async () => {
    try {
      const { data } = await axios.get(getUserPostsURL);
      setPosts(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleEdit = async (id) => {
    const postToEdit = posts.filter((post) => post._id === id);
    setTitle(postToEdit[0].title);
    setContent(postToEdit[0].content);
    setId(id);
  };

  const cancelEdit = () => {
    setTitle("");
    setContent("");
    setId("");
  };

  const handleDelete = async (id) => {
    try {
      const {
        data: { deletedPost },
      } = await axios.delete(deletePostURL + `/${id}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { created },
      } = await axios.post(createPostURL, post);
      cancelEdit();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleEditedPost = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { editedPost },
      } = await axios.put(putPostURL + `/${id}`, post);
      cancelEdit();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      hello<div>from my posts</div>
      <form onSubmit={id === "" ? handlePost : handleEditedPost}>
        <input
          type="text"
          onChange={handleTitle}
          value={title}
          maxLength={50}
          minLength={4}
        />
        <input
          type="text"
          onChange={handleContent}
          value={content}
          maxLength={200}
        />
        <button disabled={title === ""}>
          {id === "" ? "Post" : "Finish editing"}
        </button>
        {id === "" ? "" : <button onClick={cancelEdit}>Stop editing</button>}
      </form>
      <div>
        These are my posts
        <div>
          {posts
            .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
            .map((post) => (
              <UserPost
                key={post._id}
                post={post}
                handleEdit={() => handleEdit(post._id)}
                handleDelete={() => handleDelete(post._id)}
                className="Post"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
