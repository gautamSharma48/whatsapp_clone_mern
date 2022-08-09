import { Avatar } from "@material-ui/core";
import React from "react";
import "../assets/styles/custom.css";




function SideBarchat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarchat_info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
}

export default SideBarchat;
