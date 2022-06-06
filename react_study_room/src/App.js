import "./App.css";
import React, { useState, useEffect } from "react";
import Timer from "./component/Timer";

function Out_function() {
  // console.log("outFunction");
}

function App() {
  // useEffect(Out_function);

  // const [count, setCount] = useState(1);
  // const [name, setName] = useState("");

  // // useEffect(() => {
  // //   console.log("count rendering");
  // // }, [count]);

  // useEffect(() => {
  //   console.log("first rendering");
  // }, []);

  // const handleCountUpdate = () => {
  //   setCount(count + 1);
  // };

  // const handleInputName = (e) => {
  //   console.log();
  //   setName(e.target.value);
  // };
  const [showTimer, setShowTimer] = useState(false);

  const handleShowTimer = () => {
    setShowTimer(!showTimer);
  };
  return (
    <div className="starcoding">
      {showTimer && <Timer></Timer>}
      <button onClick={handleShowTimer}>Toggle Timer</button>
      {/* <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}< /span>
      <br></br>
      <input type="text" onChange={handleInputName}></input>
      name: {name} */}
    </div>
  );
}

export default App;
