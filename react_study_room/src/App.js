import { useCallback, useState } from "react";
import Child from "./component/Child";

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const telMe = useCallback(() => {
    console.log("사랑한다 ;)");
  }, []); // useCallback을 통하여 해당 함수에 대해서 자녀 컴포넌트 재 랜더링 되는것을 막아준다.

  //   const telMe = () => {
  //     console.log("사랑한다 ;)");
  //   };

  console.log("부모 컴퍼넌트가 랜더링 되었습니다.");
  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>😍부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"홍길동"} telMe={telMe}></Child>
    </div>
  );
}

export default App;
