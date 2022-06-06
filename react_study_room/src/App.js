import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  // const [render, setRender] = useState(1);
  const renderUserCount = useRef(1);

  useEffect(() => {
    renderUserCount.current += 1;
    console.log("무한 반복 탈출: " + renderUserCount.current);
  });

  // useEffect(() => {
  //   console.log("무한 반복, 랜더링");
  //   setRender(render + 1);
  // });

  return (
    <div className="starcoding">
      <p>count: {count}</p>
      <button type="text" onClick={() => setCount(count + 1)}>
        up
      </button>
    </div>
  );
}

export default App;
