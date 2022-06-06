import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [render, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  console.log("rendering...");
  const handleIncreaseCount = () => {
    countVar += 1;
    console.log("Var : " + countVar);
  };
  const handleRefCount = () => {
    countRef.current += 1;
    console.log("ref : " + countRef.current);
  };

  const handleRender = () => {
    setRenderer(1);
  };
  return (
    <div className="starcoding">
      <p>Var: {countVar}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={handleIncreaseCount}>Var 출력</button>
      <button onClick={handleRefCount}>Ref 출력</button>
      <button onClick={handleRender}>Rendering</button>
    </div>
  );
}

export default App;
