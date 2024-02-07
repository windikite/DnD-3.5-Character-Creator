import React, { useState, useEffect } from 'react';
import Selector from './Selector';
import SelectedInfo from './SelectedInfo';
import Container from 'react-bootstrap/Container';
import List from './List';
import CharacterSheet from './CharacterSheet';
import ProgressBar from './ProgressBar';
import NameInput from './NameInput';

function CharacterBuilder({
        data, 
        stage,
        characterData, 
        setCharacterData,
    }) {
    const [classData, setClassData] = useState();
    const [raceData, setRaceData] = useState();

    function checkStage(stage){
        if(stage === 0){
            return (
                <h1></h1>
            )
        }else if(stage === 1){
            return (
                <div >
                    <h1>Class Selection</h1>
                    <Selector 
                        data={data[0]} 
                        menuName="Class" 
                        selectedData={classData}
                        setSelectedData={setClassData} />
                    <List 
                        list={data[0]}
                        name="Class"
                        h1="Level Mod"
                        h2="Help Text"
                        h3="Saves"  
                        h4="Skills"
                        h5="Source"
                        c1="levelMod"
                        c2="helpText"
                        c3={["fort", "will", "ref"]}
                        c4="skills"
                        c5="source"
                        setSelectedData={setClassData}
                        />
                </div>
            )
        }else if(stage === 2){
            return (
                <div>
                    <h1>Race Selection</h1>
                    <Selector 
                        data={data[1]} 
                        menuName="Race" 
                        selectedDataa={raceData}
                        setSelectedData={setRaceData} />
                    <List 
                        list={data[1]}
                        name="Race"
                        h1="Level Mod"
                        h2="Help Text"
                        h3="Stat Bonuses"  
                        // h4="Skills"
                        h5="Source"
                        c1="levelMod"
                        c2="helpText"
                        c3={["con", "str", "dex", "wis", "int", "cha"]}
                        // c4="skills"
                        c5="source"
                        setSelectedData={setRaceData}
                        />
                </div>
            )
        }
    }
    
    return ( 
        <Container>
            <ProgressBar stage={stage} />
            <NameInput />
            <CharacterSheet 
                // raceData={data[1]} 
                // classData={data[0]} 
                selectedRace={raceData} 
                selectedClass={classData}
                />
            {checkStage(stage)}
        </Container>
        
     );
}

export default CharacterBuilder;