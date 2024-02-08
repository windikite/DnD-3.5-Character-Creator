import { all } from "axios";
import Container from "react-bootstrap/esm/Container";

function CharacterSheet({
    selectedRace,
    selectedClass
}) {
    const sources = [];
    const features = [];
    const race = checkIn(selectedRace);
    const startingClass = checkIn(selectedClass);
    

    const allSources = sources ? sources.map(x => <li>{x}</li>) : [];
    const allSkills = startingClass.skills ? startingClass.skills.split(", ").map(x => <li>{x}</li>) : null;
    const allStatBonuses = selectedRace ? getStatBonuses(selectedRace) : [];
    const allFeatures = features ? features.map(x => <li>{x[0]}</li>) : [];
    
    function checkIn(item){
        console.log('item', item)
        //handle books
        const page = (item.source.book !== null && item.source.book !== undefined) ? `${item.source.book} pg.${item.source.page}` : null;
        if(page !== null){
            sources.push(page)
        };
        console.log(`sources`, sources)
        //handle features
        if(item.features.lv1[0].name !== null && item.features.lv1[0].name !== undefined){
            item.features.lv1.forEach(x => {
                features.push([x.name, x.text]);
            })
        }
        return item
    }

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
            <div className="d-flex">
                <Container className='m-2 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                    <Container>Con: {allStatBonuses.con}</Container>
                    <Container>Str: {allStatBonuses.str}</Container>
                    <Container>Dex: {allStatBonuses.dex}</Container>
                    <Container>Wis: {allStatBonuses.wis}</Container>
                    <Container>Int: {allStatBonuses.int}</Container>
                    <Container>Cha: {allStatBonuses.cha}</Container>
                </Container>
                <Container className='m-2 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                    <h2>Features</h2>
                    <ul>
                        {allFeatures}
                    </ul>
                </Container>
            </div>

            <div className="d-flex">
                <Container className='m-2 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
                    <h2>Class Skills:</h2>
                    <ul>
                        {allSkills}
                    </ul>
                </Container>

                <Container className='m-2 p-3 bg-dark-subtle border border-dark-subtle rounded-3'>
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