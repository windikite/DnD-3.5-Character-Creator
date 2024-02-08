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
    const dummy = {
        _id: "",
        name: "",
        helpText: "",
        hitDice: "",
        levelMod: 0,
        size: "",
        speed: 0,
        source: [
            {
                book: "",
                page: null
            }
        ],
        saves: {
            fort: "",
            will: "",
            ref: ""
        },
        skillPointModifier: 0,
        skills: "",
        statBonuses: {
            con: 0,
            str: 0,
            dex: 0,
            wis: 0,
            int: 0,
            cha: 0
        },
        features: {
            lv1: [
                {
                    name: "",
                    text: ""
                }
            ]
        }
    };

    const [classData, setClassData] = useState(dummy);
    const [raceData, setRaceData] = useState(dummy);

    function checkStage(stage){
        if(stage === 0){
            return (
                <h1></h1>
            )
        }else if(stage === 1){
            return (
                <div >
                    <h1>Class Selection</h1>
                    <List 
                        list={data[0]}
                        name="Class"
                        h1="Features"
                        h2="Help Text"
                        h3="Saves"  
                        h4="Skills"
                        h5="Source"
                        c1="features[lv1]"
                        c2="helpText"
                        c3="saves"
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
                    <List 
                        list={data[1]}
                        name="Race"
                        h1="Features"
                        h2="Help Text"
                        h3="Stat Bonuses"  
                        // h4="Skills"
                        h5="Source"
                        c1="features[lv1]"
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
            {/* <CharacterSheet 
                // raceData={data[1]} 
                // classData={data[0]} 
                selectedRace={raceData} 
                selectedClass={classData}
                /> */}
            <Container className='mt-3 mb-3 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                {checkStage(stage)}
            </Container>
        </Container>
        
     );
}

export default CharacterBuilder;