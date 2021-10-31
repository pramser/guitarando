function Words(props) {
  return (
    <div className="Words">
      <div className="vertical-title">WORDS</div>
      <div className="word-info">
        {props.words.map((word) => (
          <div className="word">{word}</div>
        ))}
      </div>
    </div>
  );
}

export default Words;
