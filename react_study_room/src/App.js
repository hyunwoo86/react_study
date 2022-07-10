// import { send } from "process";
import { useState, useReducer } from "react";
import "./App.css";
import Student from "./component/Student";

// reducer - state를 업데이트를 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const reducer = (state, action) => {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHear: false,
      };
      console.log(name);
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };

    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };

    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHear: !student.isHear };
          }
          return student;
        }),
      };

    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};
function App() {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해라"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button
        onClick={() => dispatch({ type: "add-student", payload: { name } })}
      >
        추가
      </button>
      {studentInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHear={student.isHear}
          ></Student>
        );
      })}
    </div>
  );
}

export default App;
