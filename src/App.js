import "./App.css";
import chords from "./chords.json";
import { useState } from "react";
import Chord from "./Chord";
import Fretboard from "./Fretboard";
import Time from "./Time";
import Words from "./Words";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chord, setChord] = useState({ name: "A", notes: [0, 0, 2, 2, 2, 0] });
  const [words, setWords] = useState(["random"]);
  const [time, setTime] = useState(0);

  const clickRandomize = () => {
    setIsLoaded(false);
    fetch("https://random-word-api.herokuapp.com/word?number=3")
      .then((res) => res.json())
      .then((fetchedWords) => {
        setWords(fetchedWords);
      });

    const randomChord = chords[getRandomInt(chords.length)];
    setChord(randomChord);
    setTime(getRandomInt(3));
    setIsLoaded(true);
  };

  return (
    <div className="App">
      <header className="App-header">Guitarando</header>
      <body>
        <div>
          <Fretboard notes={chord.notes} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Chord name={chord.name} />
          <Words words={words} />
          <Time time={time} />
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="randomize" onClick={clickRandomize}>
            Randomize
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;
