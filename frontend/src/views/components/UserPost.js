import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const UserPost = ({ post, handleEdit, handleDelete }) => {
  const options = { month: "long" };
  const date = new Date(post.createdAt);
  const year = date.getFullYear();
  const month = new Intl.DateTimeFormat("hu-HU", options).format(
    date.getMonth()
  );
  const day = date.getDate();

  return (
    <div className="Post">
      <h1>{post.title}</h1>
      <h2>{post.createdBy.username}</h2>
      <h3>{post.content}</h3>
      <h4>{`${year}. ${month} ${day}`}</h4>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
      <button onClick={handleEdit}>
        <FaEdit />
      </button>
    </div>
  );
};

export default UserPost;
