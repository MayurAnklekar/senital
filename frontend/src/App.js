import axios from 'axios';
import {useState, useEffect} from 'react'
import React from 'react';
//import Chats from './components/chats/Chats'
//import ChatApp from './components/firebasechat/ChatApp';
import Landing from './components/landing/Landing';
import Auth from './components/chats/chatComponents/Auth'
import './App.css';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(()=>{
    axios.get("/api").then((response)=>{
      setBackendData(response.data)
    });
  }, []);

  return (
    <div>
        {/* {
          (backendData.users) ? backendData.users.map((user)=>{
            return <div>{user}</div>
          }) : (<div>Loading...</div>)
          
        } */}
        <Auth/>
    </div>
  );
}

export default App;
