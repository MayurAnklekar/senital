import axios from 'axios';
import {useState, useEffect} from 'react'
import React from 'react';
import ChatApp from './components/firebasechat/ChatApp';

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
        <ChatApp/>
    </div>
  );
}

export default App;
