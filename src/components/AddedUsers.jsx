import { useDispatch, useSelector } from "react-redux";
import userSlice from "../redux Toolkit/studentsSlice";

import "./addedUsers.css";

export default function StudentsList() {
  const TheName = useSelector((state) => state.studentName);
  const TheCourse = useSelector((state) => state.studentCourse);

  const dispatch = useDispatch();
  const { removeStudentName, removeStudentCourse } = userSlice.actions;
  return (
    <div className="students__data">
      {/*User name*/}
      <h2>Students Data</h2>
      <div className="added__students">
        <div className="students_nameList">
          <ul>
            <h3>Student Name</h3>
            {TheName.map((item) => (
              <li key={item.id}>
                <p>
                  {item.id}. {item.studentName}
                </p>
                <button onClick={() => dispatch(removeStudentName(item.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/*User course*/}
        <div className="students_courseList">
          <ul>
            <h3>Student Course</h3>
            {TheCourse.map((item) => (
              <li>
                <p>
                  {item.id}. {item.studentCourse}
                </p>
                <button onClick={() => dispatch(removeStudentCourse(item.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
