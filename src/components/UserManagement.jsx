import StudentsList from "./AddedUsers";
import AddingStudents from "./AddingUsers";

import "./userManagement.css";

export default function StudentsManagement() {
  return (
    <div className="students__managements">
      <h1>
        <span>Redux</span> Toolkit Students Management App
      </h1>
      <div className="student__contents">
        <AddingStudents />
        <StudentsList />
      </div>
    </div>
  );
}
