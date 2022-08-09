import React from 'react'
import "../assets/styles/custom.css";
import DountLarge from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVerIcon from "@material-ui/icons/MoreVert";
import {Avatar ,IconButton} from "@material-ui/core";
import  SearchOutlined  from '@material-ui/icons/SearchOutlined';
import SideBarChat from '../component/SideBarchat';


function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar/>
        <div className='siderbar_headerRight'>
          <IconButton>
          <DountLarge />
          </IconButton>
          <IconButton>
          <ChatIcon />
          </IconButton>
          <IconButton>
          <MoreVerIcon />
          </IconButton>
          
        </div>
      </div>
      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchOutlined />
          <input placeholder='search or start new chat' type="text" />
        </div>
      </div>

      <div className='sidebar_chats'>
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
      </div>
  )
}

export default SideBar