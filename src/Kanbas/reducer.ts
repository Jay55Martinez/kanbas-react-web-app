import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        Enroll: (state, { payload: enrollment }) => {
            const newEnrollment = { 
                "_id": enrollment._id, 
                "user": enrollment.user, 
                "course": enrollment.course };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        unEnroll: (state, { payload: courseId }) => {
            state.enrollments = state.enrollments.filter((enrollment) => enrollment.course !== courseId);
            localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
        },
    }
});

export const { Enroll, unEnroll } =
    enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;