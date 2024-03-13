import Container from "react-bootstrap/esm/Container";
import NamePlate from './NamePlate';

function CharacterSheet({
    characterData,
    changeName,
    updateCharacterData,
    removeClass,
    removeRace
}) {
    const sources = [];
    const features = [];

    console.log('character data', characterData)
    

    // function getStatBonuses(item){
    //     let con = item.con ? item.con : 0;
    //     let str = item.str ? item.str : 0;
    //     let dex = item.dex ? item.dex : 0;
    //     let wis = item.wis ? item.wis : 0;
    //     let int = item.int ? item.int : 0;
    //     let cha = item.cha ? item.cha : 0;
    //     return {
    //         'con': con, 
    //         'str': str, 
    //         'dex': dex, 
    //         'wis': wis, 
    //         'int': int, 
    //         'cha': cha}
    // }

    function allFeatures(){
        console.log('checking features', characterData)
        let featureArray = []
        let elementArray = []
        if(characterData.classes.length > 0){
            characterData.classes.map(x => {
                const tempArray = x.table ? x.table['1st'][4] : []
                tempArray.map(x => {
                    let found = featureArray.findIndex(e => e == x)
                    console.log(found)
                    if(found == -1){
                        featureArray.push(x)
                    }
                })
            })
            featureArray.sort((a, b) => a - b)
            featureArray.map((x, index) => {
                elementArray.push(<li key={index}>{x}</li>)
            })
        }
        return elementArray
    }

    function allSkills(){
        console.log('checking skills', characterData)
        let skillArray = []
        let elementArray = []
        if(characterData.classes.length > 0){
            characterData.classes.map(x => {
                const tempArray = x.baseClass ? x.baseClass.skills : []
                tempArray.map(x => {
                    let found = skillArray.findIndex(e => e == x)
                    console.log(found)
                    if(found == -1){
                        skillArray.push(x)
                    }
                })
            })
            skillArray.sort((a, b) => a - b)
            skillArray.map((x, index) => {
                elementArray.push(<li key={index}>{x}</li>)
            })
        }
        return elementArray
    }

    

    return ( 
        <Container className='mt-3 mb-3 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
            <NamePlate
                characterData={characterData}
                updateCharacterData={updateCharacterData}
                changeName={changeName}
                removeClass={removeClass}
                removeRace={removeRace}
            />
            
            <hr />
            <div className="d-flex">
                {/* <Container className='m-2 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                    <Container>Con: {allStatBonuses.con}</Container>
                    <Container>Str: {allStatBonuses.str}</Container>
                    <Container>Dex: {allStatBonuses.dex}</Container>
                    <Container>Wis: {allStatBonuses.wis}</Container>
                    <Container>Int: {allStatBonuses.int}</Container>
                    <Container>Cha: {allStatBonuses.cha}</Container>
                </Container> */}
                
                <Container className='m-2 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                    <h2>Features:</h2>
                    <ul>
                        {allFeatures()}
                    </ul>
                </Container>
                <Container className='m-2 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                    <h2>Class Skills:</h2>
                    <ul style={{columns:'2 auto'}}>
                        {allSkills()}
                    </ul>
                </Container>
            </div>

            <div className="d-flex">
                

                {/* <Container className='m-2 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                    <h2>Sources:</h2>
                    <ul>
                        {allSources}
                    </ul>
                </Container> */}
            </div>
            
            
        </Container>
    );
}

export default CharacterSheet;