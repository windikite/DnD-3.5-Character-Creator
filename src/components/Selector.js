import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';

function Selector({
        data, 
        menuName, 
        selectedData, 
        setSelectedData
}) {
    function addSelected(category, newData){
        let oldData = [...selectedData];
        oldData[category] = [...oldData[category], newData];
        setSelectedData(oldData);
    }

    function changeSelected(newData){
        console.log(newData)
        if(newData !== "none"){
            // document.get
            setSelectedData(newData);
        }
    }
    
    function CheckMenu(data){
        if(data.length > 0){
            return ( 
                <label>
                    Choose a {menuName}
                    <select className="form-select form-select-sm" aria-label="Small select example" onChange={e => changeSelected(e.target.value)} defaultValue={null}>
                        <option value="none">Choose a {menuName}</option>
                        {data.map((x) => 
                            <option 
                                key={x._id}
                                value={x._id}
                                >{x.name} - {x.helpText}</option>
                        )}
                    </select>
                </label>
            );
        }else{
            return (
                <h1>loading...</h1>
            )
        }
    }
    return ( 
        <Container>
            {CheckMenu(data)}
        </Container>
     );
}

export default Selector;