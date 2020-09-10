import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>header</h2>
      </div>

      {/* tweet box */}
      <TweetBox />

      {/* post 1 */}
      <Post />
      {/* post 2 */}
    </div>
  );
}

export default Feed;
