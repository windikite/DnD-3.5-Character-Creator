import { all } from "axios";
import Container from "react-bootstrap/esm/Container";

function CharacterSheet({
    selectedRace,
    selectedClass
}) {
    // const race = selectedRace ? selectedRace : null;
    // const startingClass = selectedClass ? selectedClass : null;
    // const sources = [];
    const dummy = {
        name: "No Data",
            "helpText": "helptext",
            "levelMod": 0,
            "source": [
                "DummyBook",
                "1"
            ],
            "con": 0,
            "str": 0,
            "dex": 0,
            "wis": 0,
            "int": 0,
            "cha": 0
    }
    const sources = [];
    const race = selectedRace ? checkIn(selectedRace) : [];
    const startingClass = selectedClass ? checkIn(selectedClass) : [];
    
    function checkIn(item){
        console.log('item', item)
        const page = [item.source[0], item.source[1]];
        sources.push(page)
        console.log(`sources`, sources)
        return item
    }

    const allSources = sources ? sources.map(x => <p>{x}</p>) : [];
    const allSkills = startingClass.skills ? startingClass.skills.split(", ").map(x => <li>{x}</li>) : null;
    const allStatBonuses = selectedRace ? getStatBonuses(selectedRace) : [];
    
    function getStatBonuses(item){
        let con = item.con ? item.con : 0;
        let str = item.str ? item.str : 0;
        let dex = item.dex ? item.dex : 0;
        let wis = item.wis ? item.wis : 0;
        let int = item.int ? item.int : 0;
        let cha = item.cha ? item.cha : 0;
        return {
            'con': con, 
            'str':str, 
            'dex':dex, 
            'wis':wis, 
            'int':int, 
            'cha':cha}
    }

    

    return ( 
        <Container className='mt-3 mb-3 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
            
            <h1>Bob the level {race.levelMod + startingClass.levelMod} {race.name} {startingClass.name}</h1>
            <hr />
            <div>
                <Container >
                    <Container>Con: {allStatBonuses.con}</Container>
                    <Container>Str: {allStatBonuses.str}</Container>
                    <Container>Dex: {allStatBonuses.dex}</Container>
                    <Container>Wis: {allStatBonuses.wis}</Container>
                    <Container>Int: {allStatBonuses.int}</Container>
                    <Container>Cha: {allStatBonuses.cha}</Container>
                </Container>
            </div>

            <div className="d-flex">
                <Container className='mt-3 mb-3 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                    <h2>Class Skills:</h2>
                    <ul>
                        {allSkills}
                    </ul>
                </Container>

                <Container className='mt-3 mb-3 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                    <h2>Sources:</h2>
                    <ul>
                        {allSources}
                    </ul>
                </Container>
            </div>
            
            
        </Container>
    );
}

export default CharacterSheet;