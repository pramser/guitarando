const TUNINGS = [{ key: "E", notes: "EADGBE" }];

const NUM_OF_FRETS = 22;
const NUM_OF_STRINGS = 6;
const TUNING_KEY = "E";

function getStringByIndex(index) {
  const TUNING = TUNINGS.find(t => t.key === TUNING_KEY)
  return TUNING.notes[index]
}

function Fretboard() {
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
              <td>{fret !== 0 ? <hr /> : getStringByIndex(string)}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Fretboard;
