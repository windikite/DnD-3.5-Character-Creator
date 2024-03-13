function Navbar({
    changeStage
}) {
    
    return ( 
        <nav className="navbar">
            <form className="container-fluid justify-content-start">
                <button className="btn btn-outline-success me-2" type="button" onClick={() => changeStage(0)}>New Character</button>
                <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => changeStage(-1)}>Previous</button>
                <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => changeStage(1)}>Next</button>
            </form>
        </nav>
     );
}

export default Navbar;