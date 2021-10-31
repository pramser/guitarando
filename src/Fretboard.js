const TUNINGS = [{ key: "E", notes: "EADGBE" }];

const NUM_OF_FRETS = 22;
const NUM_OF_STRINGS = 6;
const TUNING_KEY = "E";

function getStringByIndex(index) {
  const TUNING = TUNINGS.find((t) => t.key === TUNING_KEY);
  return TUNING.notes[index];
}

function resolveFret(chord, string, fret) {
  if(fret === 0) {
    return getStringByIndex(string)
  }

  if(chord[string] === fret) {
    return "⬤"
  }

  return <hr />;
}

function Fretboard(props) {
  const CHORD = props.chord;

  return (
    <div>
      Fretboard
      <table className="Fretboard">
        <tr>
          {Array.from(Array(NUM_OF_FRETS + 1)).map((x, fret) => (
            <th key={fret}>{fret === 0 ? "" : fret}</th>
          ))}
        </tr>
        {Array.from(Array(NUM_OF_STRINGS)).map((y, string) => (
          <tr>
            {Array.from(Array(NUM_OF_FRETS + 1)).map((z, fret) => (
              <td>
                {resolveFret(CHORD, string, fret)}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Fretboard;
