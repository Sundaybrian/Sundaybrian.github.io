import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavouriteBorderIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";
import "./Post.css";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Post 1
              <span>
                <VerifiedUserIcon className="post__badge" /> @omawami rules
              </span>
            </h3>
          </div>
          <div className="post__headerDesc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              necessitatibus sed obcaecati accusamus laborum, dolores aliquid
              amet odio, eos incidunt ab eius iure minus autem enim consectetur
              aut maiores minima.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1591629681585-50ca6d629e11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
        </div>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavouriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
      {/* post body */}
    </div>
  );
}

export default Post;
