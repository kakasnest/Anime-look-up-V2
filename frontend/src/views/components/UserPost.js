import React from "react";

const UserPost = ({ post, handleEdit, handleDelete }) => {
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.createdAt}</div>
      <div>{post.content}</div>
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleEdit}>edit</button>
    </div>
  );
};

export default UserPost;
