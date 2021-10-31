function Chord(props) {
    return <div className="Chord">
        <div className="vertical-title">
            CHORD
        </div>
        <div className="chord-info">
            {props.name}
        </div>
    </div>
}

export default Chord;