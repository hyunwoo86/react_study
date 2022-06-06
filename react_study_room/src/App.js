import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    console.log("랜더: ");
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert("환영한다" + inputRef.current.value);
    inputRef.current.focus();
  };
  return (
    <div className="starcoding">
      <input ref={inputRef} type="text" placeholder="user name"></input>
      <button onClick={login}>login</button>
    </div>
  );
}

export default App;
