import { useMemo, useState } from "react";
import Child from "./component/Child";

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  //   const name = {
  //     lastName: "홍",
  //     firstName: "길동",
  //   }; // object,  랜더링 하면서 name의 주소 값이 변하여 child에 memo를 하였더라도 랜더링이 수행 된다

  const name = useMemo(() => {
    return {
      lastName: "홍",
      firstName: "길동",
    };
  }, []); // 따라서 useMemo를 통하여 메모리 주소를 고정하여 사용한다.

  console.log("부모 컴퍼넌트가 랜더링 되었습니다.");
  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>😍부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name}></Child>
    </div>
  );
}

export default App;
