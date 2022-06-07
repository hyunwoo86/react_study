// import { send } from "process";
import { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(true);
  // const someFunction = () => {
  //   console.log("somFunc : number " + number);
  //   return;
  // };

  const someFunction = useCallback(() => {
    console.log("somFunc : number " + number);
    return;
  }, [number]);

  useEffect(() => {
    console.log("useEffect");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>

      <button onClick={someFunction}>call someFunc</button>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle.toString()}
      </button>
    </div>
  );
}

export default App;
