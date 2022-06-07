// import { send } from "process";
import { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";
import Box from "./component/Box";

function App() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);
  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor: "pink",
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // };
  return (
    <div
      style={{
        background: isDark ? "black" : "white",
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        change back color
      </button>
      <Box createBoxStyle={createBoxStyle}></Box>
    </div>
  );
}

export default App;
