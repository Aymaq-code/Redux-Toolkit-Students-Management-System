import { useState } from "react";
import { useDispatch } from "react-redux";
import userSlice from "../redux Toolkit/studentsSlice";
import "./addingUsers.css";

export default function AddingStudents() {
  const [studentName, setstudentName] = useState("");
  const [studentCourse, setStudentCourse] = useState("");
  const dispatch = useDispatch();
  const { addStudentName, addStudentCourse } = userSlice.actions;

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          type="text"
          placeholder="User Name"
          value={studentName}
          onChange={(e) => setstudentName(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setstudentName("");
            dispatch(addStudentName(studentName));
          }}
          disabled={!studentName}>
          Add user name
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="User Course"
          value={studentCourse}
          onChange={(e) => setStudentCourse(e.target.value)}
        />
        <button
          onClick={() => {
            setStudentCourse("");
            dispatch(addStudentCourse(studentCourse));
          }}
          disabled={!studentCourse}>
          Add user course
        </button>
      </div>
    </form>
  );
}
