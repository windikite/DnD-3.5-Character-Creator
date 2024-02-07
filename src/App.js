import CharacterBuilder from './components/CharacterBuilder';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './components/Spinner/Spinner';
import Navbar from './components/Navbar';

function App() {
  const [serverData, setServerData] = useState([]);
  const [stage, setStage] = useState(0);

  useEffect(() => {
      axios.get(`https://dnd-3-5-backpack.onrender.com/api/characters/options`)
        .then(async res => {
          setServerData(res.data.payload);
        }).catch((e)=>console.log(e))
  }, [])

  function nextStage(){
    if(stage < 5){
      setStage(stage+1)
      console.log(stage)
    }
  }

  function previousStage(){
      if(stage > 0){
          setStage(stage-1)
          console.log(stage)
      }
  }

  function start(){
      setStage(0)
      console.log(stage)
  }

  return (
    <div className='container'>
      <Navbar start={start} previousStage={previousStage} nextStage={nextStage} />
      <Container className='p-3 bg-secondary border border-primary-subtle rounded-3'>
        {serverData.length > 0 ? <CharacterBuilder 
          data={serverData} 
          stage={stage}
          // characterData={characterData} 
          // setCharacterData={setCharacterData()}
          /> : <Spinner />}
      </Container>
    </div>
    
  );
}

export default App;
