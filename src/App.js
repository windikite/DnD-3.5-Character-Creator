import CharacterBuilder from './components/CharacterBuilder';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './components/Spinner/Spinner';


function App() {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
      axios.get(`https://dnd-3-5-backpack.onrender.com/api/characters/options`)
        .then(async res => {
          setServerData(res.data.payload);
        }).catch((e)=>console.log(e))
  }, [])

  return (
    <div className='container'>
      <Container className='p-3 bg-secondary border border-primary-subtle rounded-3'>
        {serverData.length > 0 ? <CharacterBuilder 
          data={serverData}
          /> : <Spinner />}
      </Container>
    </div>
    
  );
}

export default App;
