import React from "react";
import "./SidebarOption.css";
import HomeIcon from "@material-ui/icons/Home";

function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <HomeIcon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
