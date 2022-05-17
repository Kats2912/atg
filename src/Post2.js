import React from "react";
import door from "./doorlock.jpeg";
import "./index.css";
function Post2(props) {
  const { image, heading, news, description, name } = props;
  return (
    <div className="post2">
      <img alt="News" src={door} className="postPic" />
      <div className="postHeading">{heading}</div>
      <div style={{ display: "flex" }}>
        <div className="postNews">{news}</div>
        <h2
          style={{
            paddingLeft:300,
            transform: 90,
          }}
        >
          ...
        </h2>
      </div>
      <div className="postDescription">{description}</div>
      <div className="row">
        <div className="row">
          <img className="postImage" alt="image" />
          <div className="postName">{name}</div>
        </div>
        <div className="row">
          <div className="postView">1.3k views</div>
          <button className="postButton"></button>
        </div>
      </div>
    </div>
  );
}

export default Post2;
