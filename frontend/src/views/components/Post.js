import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Post = ({ post }) => {
  const date = new Date(post.createdAt);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-EN", { month: "long" });
  const day = date.getDate();

  const formattedDate = () => {
    switch (day) {
      case 1:
        return <h4>{`${day}st ${month} ${year}`}</h4>;
        break;
      case 2:
        return <h4>{`${day}nd ${month} ${year}`}</h4>;
        break;
      case 3:
        return <h4>{`${day}rd ${month} ${year}`}</h4>;
        break;
      default:
        return <h4>{`${day}th ${month} ${year}`}</h4>;
    }
  };

  return (
    <div className="Post">
      <h1>{post.title}</h1>
      <h2>
        <FaUserAlt />
        {` ${post.createdBy.username}`}
      </h2>
      <h3>{post.content}</h3>
      {formattedDate()}
    </div>
  );
};

export default Post;
