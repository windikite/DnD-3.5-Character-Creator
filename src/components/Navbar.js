function Navbar({
    stage,
    start,
    nextStage,
    previousStage
}) {
    
    return ( 
        <nav className="navbar bg-body-tertiary">
            <form className="container-fluid justify-content-start">
                <button className="btn btn-outline-success me-2" type="button" onClick={() => start()}>New Character</button>
                <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => previousStage()}>Previous</button>
                <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => nextStage()}>Next</button>
            </form>
        </nav>
     );
}

export default Navbar;