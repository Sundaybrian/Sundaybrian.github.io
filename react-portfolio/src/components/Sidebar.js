import React from "react";
import "./Sidebar.css";

import SidebarOption from "./SidebarOption";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* icon twitter */}
      <TwitterIcon />

      {/* sidebar options */}
      <SidebarOption active text="Home" />
      <SidebarOption text="Explore" />
      <SidebarOption text="Notifications" />
      <SidebarOption text="Messages" />
      <SidebarOption text="Lists" />
      <SidebarOption text="profile" />
      <SidebarOption text="More" />

      {/* Tweet button */}
      <Button variant="outlined" className="sidebarTweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
