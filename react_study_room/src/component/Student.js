import React from "react";

const Student = ({ name, dispatch, id, isHear }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHear ? "line-through" : "none",
          color: isHear ? "gray" : "black",
        }}
        onClick={() => {
          dispatch({ type: "mark-student", payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: "delete-student", payload: { id } });
        }}
      >
        {" "}
        삭제
      </button>
    </div>
  );
};

export default Student;
