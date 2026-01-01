import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentName: [],
  studentCourse: [],
};

const StudentsSlice = createSlice({
  name: "student",
  initialState,

  reducers: {
    addStudentName: (state, action) => {
      state.studentName.push({
        id: state.studentName.length + 1,
        sdudentName: action.payload,
      });
    },

    removeStudentName: (state, action) => {
      state.studentName = state.studentName.filter(
        (student) => student.id !== action.payload
      );
    },

    addStudentCourse: (state, action) => {
      state.studentCourse.push({
        id: state.studentCourse.length + 1,
        studentCourse: action.payload,
      });
    },

    removeStudentCourse: (state, action) => {
      state.studentCourse = state.studentCourse.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export default StudentsSlice;
