import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import List from './List';
import CharacterSheet from './CharacterSheet';
import ProgressBar from './ProgressBar';
import Navbar from './Navbar';

function CharacterBuilder({
        data
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
                book: null,
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
                    name: null,
                    text: null
                }
            ]
        }
    };

    const blankCharacter = {
        name: '',
        classes: [],
        races: [],
    }

    const [characterData, setCharacterData] = useState(blankCharacter);
    const [stage, setStage] = useState(0);

    // function updateCharacterData(data, location, action){
    //     console.log('characterData', characterData)
    //         //copy character data as oldData
    //     const oldData = {...characterData}
    //     console.log('character data', characterData, 'oldData', oldData)
    //     if(action === "add"){
    //             //push data into oldData at specified location to make new data
    //         console.log('found location', location, 'at', oldData[location])
    //         const updatedData = oldData[location].push(data) 
    //         console.log('updatedData', updatedData)
    //             //set character data using the updated data
    //         setCharacterData(updatedData);
    //     }else if(action === "reset"){
    //         setCharacterData({
    //             classes: [],
    //             races: [],
    //         })
    //     }
    //     console.log('new character data', characterData)
    // };

    function addData(data, location){
        const dataCopy = {...characterData};
        dataCopy[location].push(data);
        setCharacterData(dataCopy)
        console.log(characterData)
    }

    function resetAllData(){
        setCharacterData(blankCharacter);
        console.log(characterData);
        
    }

    function changeName(newName){
        let oldData = {...characterData};
        oldData.name = newName;
        setCharacterData(oldData)
    }

    function removeClass(className){
        let oldData = {...characterData};
        let found = oldData.classes.findIndex(x => x.className = className)
        if(found != -1){
            oldData.classes.splice(found, 1)
            setCharacterData(oldData)
            console.log(characterData)
        }
    }

    function removeRace(raceName){
        let oldData = {...characterData};
        let found = oldData.races.findIndex(x => x.raceName = raceName)
        if(found){
            oldData[found] = {}
            setCharacterData(oldData)
        }
    }

    function changeStage(num){
        if(num === 1){
            if(stage < 2){
                setStage(stage+1)
            }
        }else if(num === -1){
            if(stage > 0){
                setStage(stage-1)
            }
        }else if(num === 0){
            resetAllData();
            setStage(0);
            console.log(stage);
        }
        
    }

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
                        h1="Hit Die"
                        h2="Features"
                        h3="Saves"  
                        h4=""
                        h5=""
                        c1={['baseClass', 'hitDie']}
                        c2={['table', '1st', '4']}
                        c3={['table', '1st', [['Fort', '1'], ['Ref', '2'], ['Will', '3']]]}
                        c4=""
                        c5=""
                        setSelectedData={addData}
                        symbol1="Info"
                        symbol2="Add"
                        params1=""
                        params2="classes"
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
                        h2="Size"
                        h3="Stat Bonuses"  
                        h4=""
                        h5="Source"
                        c1={["features", "lv1"]}
                        c2="size"
                        c3="statBonuses"
                        c4=""
                        c5="source"
                        setSelectedData={addData}
                        symbol1="Info"
                        symbol2="Add"
                        params1=""
                        params2="races"
                        />
                </div>
            )
        }
    }
    
    return ( 
        <Container>
            <CharacterSheet 
                characterData={characterData}
                updateCharacterData={addData}
                changeName={changeName}
                removeClass={removeClass}
                removeRace={removeRace}
            />

            <Container className='mt-3 mb-3 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                <ProgressBar stage={stage} increments={50} />
                <Navbar changeStage={changeStage} />
            </Container>
            
            <Container className='mt-3 mb-3 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                {checkStage(stage)}
            </Container>
        </Container>
        
     );
}

export default CharacterBuilder;