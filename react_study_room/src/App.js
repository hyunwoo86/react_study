import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log("rendering...");
  const handleIncreaseCount = () => {
    setCount(count + 1);
  };
  const handleRefCount = () => {
    countRef.current += 1;
    console.log("ref : " + countRef.current);
  };

  return (
    <div className="starcoding">
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={handleIncreaseCount}>state 출력</button>
      <button onClick={handleRefCount}>Ref 출력</button>
    </div>
  );
}

export default App;
