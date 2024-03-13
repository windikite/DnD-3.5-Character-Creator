
function Item({
    rowKey,
    item,
    c1,
    c2,
    c3,
    c4,
    c5,
    setSelectedData,
    symbol1,
    symbol2,
    params1,
    params2
}) {
    function checkVariable(property){
        let data
        if(property instanceof Array){
            let tempData = item
            for (let i = 0; i < property.length; i++) {
                if(property[i] instanceof Array){
                    let propertyArray = property[i]
                    // console.log('property array', propertyArray)
                    let tempArray = []
                    for (let x = 0; x < propertyArray.length; x++) {
                        if(typeof propertyArray[x] === 'object' && propertyArray[x] instanceof Object){
                            tempArray.push(`${propertyArray[x][0]}: ${tempData[i]} `)
                        }else{
                            tempArray.push(tempData[propertyArray[x]])
                        }
                    }
                    tempData = tempArray
                }else{
                    tempData = tempData[property[i]]
                }
            }
            // console.log(tempData)
            data = tempData
        }else{
            data = item[property]
        }

        const output = [];
        if(Array.isArray(data)){
            const array = [];
            data.forEach(arrayItem => {
                array.push(`${arrayItem}`);
            })
            output.push(array.map(x => {return <li>{x}</li>}))
        }else if(typeof data === 'object' && data instanceof Object){
            const keys = Object.keys(data);
            const values = Object.values(data);
            for (let i = 0; i < keys.length; i++) {
                output.push(`${keys[i]}: ${values[i]} `)
            }
        }else{
            return <td>{data}</td>
        }
        return <td>{output}</td>
    };
    const column1 = c1 ? checkVariable(c1) : null;
    const column2 = c2 ? checkVariable(c2) : null;
    const column3 = c3 ? checkVariable(c3) : null;
    const column4 = c4 ? checkVariable(c4) : null;
    const column5 = c5 ? checkVariable(c5) : null;

    function changeSelected(newData, location, action){
        if(newData !== "none"){
            setSelectedData(newData, location, action);
        }
    }
    return ( 
        <tr className="table-striped" key={rowKey}>
                <th scope="row" key={rowKey}>{item.className}</th>
                {column1}
                {column2}
                {column3}
                {column4}
                {column5}
                <td>
                    <button 
                        className="btn btn-outline-success me-2" 
                        type="button" 
                        // onClick={(e) => changeSelected()}
                    ><b>{symbol1}</b></button>
                    <button 
                        className="btn btn-outline-success me-2" 
                        type="button" 
                        onClick={(e) => changeSelected(item, params2)}
                    ><b>{symbol2}</b></button>
                </td>
            </tr>
     );
}

export default Item;