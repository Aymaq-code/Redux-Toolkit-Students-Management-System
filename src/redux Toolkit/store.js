import { configureStore } from "@reduxjs/toolkit";
import StudentsSlice from "./studentsSlice";

const store = configureStore({
  reducer: StudentsSlice.reducer,
});

export default store;
