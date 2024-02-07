function ProgressBar({
    stage
}) {
    const completion = stage * 20;
    return ( 
        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow={completion} aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-info" style={{width: `${completion}%`}}></div>
        </div>
     );
}

export default ProgressBar;