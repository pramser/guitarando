const TIMES = ["2/4", "3/4", "4/4"]

function Time(props) {
    return <div className="Time">
        <div className="vertical-title">
            TIME
        </div>
        <div className="time-info">
            {TIMES[props.time]}
        </div>
    </div>
}

export default Time;