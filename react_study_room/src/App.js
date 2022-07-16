import { useState } from "react";
import Child from "./component/Child";

function App() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("부모 컴퍼넌트가 랜더링 되었습니다.");
  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>😍부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={incrementChildAge}>자녀 나이 증가</button>
      <Child name={"자녀"} age={childAge}></Child>
    </div>
  );
}

export default App;
