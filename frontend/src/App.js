import axios from 'axios';
import {useState, useEffect} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(()=>{
    axios.get("/api").then((response)=>{
      setBackendData(response.data)
    });
  }, []);

  return (
    <div>
        {
          (backendData.users) ? backendData.users.map((user)=>{
            return <div>{user}</div>
          }) : (<div>Loading...</div>)
        }
    </div>
  );
}

export default App;
