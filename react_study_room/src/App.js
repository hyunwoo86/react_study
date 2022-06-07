import { useState, useMemo } from "react";
import "./App.css";

const hardCalculate = (number) => {
  console.log("어려운 계산 함수");
  for (let i = 0; i < 99999999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("쉬운 계산 함수");
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [esayNumber, setEsayNumber] = useState(1);
  const hardSum = useMemo(() => {
    hardCalculate(hardNumber);
  }, [hardNumber]);
  const esaySum = easyCalculate(esayNumber);
  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => {
          setHardNumber(parseInt(e.target.value));
        }}
      ></input>
      <span>+10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={esayNumber}
        onChange={(e) => {
          setEsayNumber(parseInt(e.target.value));
        }}
      ></input>
      <span>+1 = {esaySum}</span>
    </div>
  );
}

export default App;
