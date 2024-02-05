import React, { useState, useEffect } from 'react';
import Selector from './Selector';
import SelectedInfo from './SelectedInfo';

function CharacterBuilder({
        data, 
        characterData, 
        setCharacterData
    }) {
    const [classData, setClassData] = useState([]);
    const [raceData, setRaceData] = useState([]);
    
    return ( 
        <>
            <SelectedInfo data={data[0]} selectedData={classData} />
            <Selector 
                data={data[0]} 
                menuName="Class" 
                selectedData={classData}
                setSelectedData={setClassData} />
            <SelectedInfo data={data[1]} selectedData={raceData} />
            <Selector 
                data={data[1]} 
                menuName="Race" 
                selectedDataa={raceData}
                setSelectedData={setRaceData} />
            
        </>
     );
}

export default CharacterBuilder;