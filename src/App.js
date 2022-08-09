
import './App.css';
import SideBar from "./modules/SideBar";
import Chat from "./modules/Chat";
import { useEffect, useState } from 'react';
import Pusher from "pusher-js";
import axios from "./axios"
function App() {
  const [messages,setMessage]=useState([]);
  useEffect(()=>{
    
    axios.get('/message/sync').then(response=>{
      setMessage(response.data);
      console.log(response.data)
    })
  },[])

  useEffect(()=>{
    var pusher = new Pusher('6a88528e834b4f387dcf', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) =>{
      alert(JSON.stringify(newMessage));
      setMessage([...messages,newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])


  return (
    <div className="app">
      <div className='app_body'>
      <SideBar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
