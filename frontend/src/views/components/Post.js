import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.createdBy.username}</div>
      <div>{post.createdAt}</div>
      <div>{post.content}</div>
    </div>
  );
};

export default Post;
