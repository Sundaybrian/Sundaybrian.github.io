import React from "react";
import "./SidebarOption.css";
import HomeIcon from "@material-ui/icons/Home";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <HomeIcon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
