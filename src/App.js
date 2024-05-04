import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';



function App() {

  async function getAllHosts () {
    await axios.get('http://95.84.137.217:3001/all-hosts').then((res) => {
      setHosts(res.data["result"]);
    }).catch((e) => {
      setHosts(`error: ${e}`)
    })
  }

  const [hosts, setHosts] = useState('')

  return (
    <div className="App">
      <p>я люблю аришку</p>
      {hosts}
      <button onClick={() => getAllHosts()}>Обновить</button>
    </div>
  );
}

export default App;
