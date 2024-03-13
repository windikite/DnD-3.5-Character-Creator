function ProgressBar({
    stage,
    increments
}) {
    const completion = stage * increments;
    return ( 
        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow={completion} aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-info" style={{width: `${completion}%`}}></div>
        </div>
     );
}

export default ProgressBar;