import { useState, useMemo, useEffect } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);
  // const location = isKorea ? "한국" : "외국";
  // const location = { country: isKorea ? "한국" : "외국" }; // 객체는 주소가 저징됨으로, 렌더링 할 때마다, 주소가 바뀌어 useEffect가 계속 호출 된다.
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루에 얼마나 먹니?</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>

      <hr></hr>

      <h2>어느 나라에서 왔니?</h2>
      <p>나라: {location.country}</p>
      <button
        onClick={() => {
          setIsKorea(!isKorea);
        }}
      >
        비행기 타자
      </button>
    </div>
  );
}

export default App;
