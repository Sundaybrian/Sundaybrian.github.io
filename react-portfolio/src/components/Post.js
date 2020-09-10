import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/Favorite";
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
              Sunday One{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />@ Omwami rule
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              commodi cupiditate facere exercitationem in sequi? Minus nobis quo
              explicabo ullam deleniti voluptatibus magni? Nostrum
              necessitatibus amet similique impedit, autem quos?
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1591629681585-50ca6d629e11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
