import Container from 'react-bootstrap/Container';


function SelectedInfo({
    data, 
    selectedData
}) {
    function checkRace(r){

    }
    function CheckData(data){
        if(data.length > 0 && selectedData.length > 0){
            const foundData = data.find(x => x._id === selectedData);
            return ( 
                <Container className='row'>
                    <div className='col-5'>
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
                    </div>
                    
                    <div className='col-7'>
                        <h1>Info</h1>
                        <h2>{foundData.helpText}</h2>
                    </div>    
                    
                </Container>
            );
        }else{
            return (
                <Container className='container-lg mh-100'>
                    <div className='container-lg'>
                        <div className="row">
                            <div className="col">
                            1 of 3
                            </div>
                            <div className="col-md-auto">
                            Variable width content
                            </div>
                            <div className="col col-lg-2">
                            3 of 3
                            </div>
                        </div>
                        <div>
                            <h1>Info</h1>
                            <h2></h2>
                        </div>
                    </div>
                    
                </Container>
            )
        }
    }
    return ( 
        <Container style={{height: "300px"}}>
            {CheckData(data)}
        </Container>
    )
}

export default SelectedInfo;