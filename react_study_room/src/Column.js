import React from "react";

const Column = (props) => {
  const todoList = ["밥먹기", "일하기", "잠자기"];

  return (
    <>
      {todoList.map((todo, idx) => (
        <React.Fragment key={idx}>
          <td>{todo}</td>
        </React.Fragment>
      ))}
    </>
  );
};

export default Column;
