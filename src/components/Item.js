
function Item({
    item,
    c1,
    c2,
    c3,
    c4,
    c5,
    setSelectedData
}) {
    function checkVariable(c){
        if(typeof c === 'string' || c instanceof String){
            return <td>{item[c]}</td> 
        }else if(typeof c === 'array' || c instanceof Array){
            let spreadVar = [];
            function convert(i){
                spreadVar.push(`${i}: ${item[i]}, `)
            }
            c.map(x => convert(x));
            let fullvar = <td>{spreadVar}</td>
            return fullvar;
        }
        
    }
    const column1 = c1 ? checkVariable(c1) : null;
    const column2 = c2 ? checkVariable(c2) : null;
    const column3 = c3 ? checkVariable(c3) : null;
    const column4 = c4 ? checkVariable(c4) : null;
    const column5 = c5 ? checkVariable(c5) : null;

    function changeSelected(newData){
        if(newData !== "none"){
            // document.get
            setSelectedData(newData);
            console.log(`new data`, newData)
        }
    }
    return ( 
        <>
            <tr className="table-striped">
                <th scope="row">{item.name}</th>
                {column1}
                {column2}
                {column3}
                {column4}
                {column5}
                {/* <td>{item.totalParams.find(e => e.name === "Damage (Expected)").value}</td>
                <td>{gearArray.find(e => e.slotName === "weapon").name}</td> */}
                <td><button className="btn btn-outline-success me-2" type="button" ><b>Q</b></button>
                </td>
                <td><button 
                    className="btn btn-outline-success me-2" 
                    type="button" 
                    onClick={e => changeSelected(item)}
                    ><b>+</b></button></td>
                
                
            </tr>
        </>
     );
}

export default Item;