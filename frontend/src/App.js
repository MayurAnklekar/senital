import axios from 'axios';
import {useState, useEffect} from 'react'
import React from 'react';
import Chats from './components/chats/Chats'
import ChatApp from './components/firebasechat/ChatApp';
import Landing from './components/landing/Landing';
import './App.css';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(()=>{
    axios.get("/api").then((response)=>{
      setBackendData(response.data)
    });
  }, []);

  return (
    <div className="app">
        {/* {
          (backendData.users) ? backendData.users.map((user)=>{
            return <div>{user}</div>
          }) : (<div>Loading...</div>)
          
        } */}
        <Chats/>
        {/* <ChatApp/> */}
        {/* <Landing/> */}

    </div>
  );
}

export default App;
