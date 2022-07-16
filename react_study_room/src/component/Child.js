import React, { memo } from "react";

const Child = ({ name, telMe }) => {
  console.log("자식 컴포넌트가 렌더링 되었습니다");
  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>👨‍👩‍👧‍👦자녀</h3>
      <p>이름: {name}</p>
      <button onClick={telMe}>love check</button>
    </div>
  );
};

export default memo(Child);
// memo : props가 변화가 있는지 체크를 하여, 변화가 있으면 수행 없으면 리랜더링 하는것을 막아준다.
