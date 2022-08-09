import { Avatar, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttatchFile from "@material-ui/icons/AttachFile";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import MicICon from "@material-ui/icons/Mic";
import React from "react";
import "../assets/styles/custom.css";

function Chat() {
  return <>
  <div className="chat">
    <div className="chat_header">
      <Avatar />
      <div className="chat_headerInfo">
        <h3>Room name</h3>
        <p>Last Seen at...</p>
      </div>
      <div className="chat_headerRight">
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttatchFile />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>

      </div>
    </div>

    <div className="chat_body">
      <p className="chat_message">
        <span className="chat_name">
          gauta,
        </span>
        This is a message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">
          gauta,
        </span>
        This is a message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>

      
    </div>
    <div className="chat_footer">
        <InsertEmotionIcon />
        <form>
          <input
         
          placeholder={"Type a message"}
          type="text"
          />
          <button >send a message</button>
        </form>
        <MicICon></MicICon>
      </div>
    </div>;
  </>
}

export default Chat;
