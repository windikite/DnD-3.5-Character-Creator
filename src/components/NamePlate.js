function NameInput({
    characterData,
    updateCharacterData,
    changeName,
    removeClass,
    removeRace
}) {

    let primaryClass = characterData.classes[0] ? characterData.classes[0].className : '';
    let race = characterData.races[0] ? characterData.races[0] : '';
    let string = (primaryClass != '' || race != '') ? (' the ' + race + ' ' + primaryClass) : null

    let buttons = characterData.classes.map(x => <button value={x.className} onClick={e => removeClass(e.target.value)}>{x.className} X</button>)

    return ( 
        <>
            <div className="input-group mt-3">
                <span className="input-group-text">Name</span>
                <input 
                    type="text" 
                    aria-label="First name" 
                    className="form-control" 
                    onChange={e => changeName(e.target.value)}
                />
            </div>
            <span 
                className="input-group-text">{characterData.name} {string}</span>
            {buttons}
        </>
     );
}

export default NameInput;