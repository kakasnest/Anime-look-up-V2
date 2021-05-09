import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Post = ({ post }) => {
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
      <h2>
        <FaUserAlt />
        {` ${post.createdBy.username}`}
      </h2>
      <h3>{post.content}</h3>
      <h4>{`${year}. ${month} ${day}`}</h4>
    </div>
  );
};

export default Post;
