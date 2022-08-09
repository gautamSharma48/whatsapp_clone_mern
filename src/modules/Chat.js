import { Avatar, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttatchFile from "@material-ui/icons/AttachFile";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import MicICon from "@material-ui/icons/Mic";
import React from "react";
import "../assets/styles/custom.css";
import {useState} from "react";
import axios from "axios";

function Chat(props) {
  const [input ,setInput]=useState("");
  const send=(e)=>{
    e.preventDefault();
    axios.post("message/new",{
      message:input,
      name:"demo app",
      timestamp:'just now',
      recevied:false,
    })
  }
  return (
    <>
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
          {props?.messages.map((ele) => (
            <p className={`chat_message ${ele.recevied && "chat_receiver"}`}>
              <span className="chat_name">{ele.name}</span>
              {ele.message}
              <span className="chat_timestamp">{ele.timestamp}</span>
            </p>
          ))}
        </div>
        <div className="chat_footer">
          <InsertEmotionIcon />
          <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={"Type a message"} type="text" />
            <button type="submit" onClick={send}>send a message</button>
          </form>
          <MicICon></MicICon>
        </div>
      </div>
      ;
    </>
  );
}

export default Chat;
