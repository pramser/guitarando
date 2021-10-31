import "./App.css";
import Fretboard from "./Fretboard";
import { useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chords, setChords] = useState([0]);
  const [words, setWords] = useState(["random"]);

  const clickRandomize = () => {
    setIsLoaded(false);
    fetch("https://random-word-api.herokuapp.com/word?number=3")
      .then((res) => res.json())
      .then((fetchedWords) => {
        setWords(fetchedWords);
      });
  };

  return (
    <div className="App">
      <header className="App-header">Randomizer</header>
      <body>
        <div>
          <Fretboard />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <ol>
              {words.map((word) => (
                <li>{word}</li>
              ))}
            </ol>
          </div>
          <div>
            Timing
            4/4
            </div>
        </div>
        <div style={{textAlign: "center"}}>
          <button className="randomize" onClick={clickRandomize}>Randomize</button>
        </div>
      </body>
    </div>
  );
}

export default App;
