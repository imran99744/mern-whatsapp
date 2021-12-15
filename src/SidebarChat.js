import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

function SidebarChat() {
  return (
    <div className="sidebar__chat">
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpQovP25jJyCHKn6vK14FI3_6XlVsyCywFw&usqp=CAU" />
      <div className="sidebar__chatInfo">
        <h2>Create Rooms</h2>
        <p>Last messages</p>
      </div>
    </div>
  );
}

export default SidebarChat;
