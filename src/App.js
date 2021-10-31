import "./App.css";
import { useState } from "react";
import Fretboard from "./Fretboard";
import Time from "./Time";
import Words from "./Words";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chord, setChord] = useState([0]);
  const [words, setWords] = useState(["random"]);
  const [time, setTime] = useState(0);

  const clickRandomize = () => {
    setIsLoaded(false);
    fetch("https://random-word-api.herokuapp.com/word?number=3")
      .then((res) => res.json())
      .then((fetchedWords) => {
        setWords(fetchedWords);
      });
    setTime(getRandomInt(3));
    setIsLoaded(true);
  };

  return (
    <div className="App">
      <header className="App-header">Guitarando</header>
      <body>
        <div>
          <Fretboard />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <Words words={words} />
          </div>
          <div>
            <Time time={time} />
          </div>
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
