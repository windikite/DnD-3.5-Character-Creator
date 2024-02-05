import Container from 'react-bootstrap/esm/Container';


function SelectedInfo({data, selectedData}) {
    function CheckData(data){
        if(data.length > 0 && selectedData.length > 0){
            const foundData = data.find(x => x._id === selectedData);
            return ( 
                <Container>
                    <h1>{foundData.name}</h1>

                    <h2>This will increase your level by {foundData.levelMod}</h2>

                    {foundData.fort ? <h2>
                        Saves: Fort({foundData.fort}) || 
                        Will({foundData.will}) || 
                        Ref({foundData.ref})</h2> : null}

                    {!foundData.con === null ? <h2>
                        Stat Bonuses: 
                        Con({foundData.con}) || 
                        Str({foundData.str}) || 
                        Wis({foundData.wis}) || 
                        Int({foundData.int}) || 
                        Cha({foundData.cha})</h2> : <h2>No stat bonuses</h2>}
                    
                    <h2>Source: {foundData.source[0]} pg.{foundData.source[1]}</h2>

                    
                </Container>
            );
        }else{
            return (
                <Container className='container-lg mh-100'>
                    <div className='container-lg'>
                        <h1>no data</h1>
                    </div>
                    
                </Container>
            )
        }
    }
    return ( 
        <Container>
            {CheckData(data)}
        </Container>
    )
}

export default SelectedInfo;