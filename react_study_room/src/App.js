import "./App.css";
import { useState } from "react";

function App() {
  const [names, setName] = useState(["홍길동", "김민수"]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setName((preStat) => {
      console.log("이전 state: " + preStat);
      return [input, ...preStat];
    });

    setInput("");
  };
  return (
    <div className="test">
      <input type="text" value={input} onChange={handleInputChange}></input>
      <button onClick={handleUpload}>Uploasd</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
