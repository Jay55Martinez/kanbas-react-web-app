import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        Enroll: (state, { payload: enrollment }) => {
            const newEnrollment = { 
                "_id": enrollment._id, 
                "user": enrollment.user, 
                "course": enrollment.course };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        unEnroll: (state, { payload: courseId }) => {
            state.enrollments = state.enrollments.filter((enrollment: any) => enrollment._id !== courseId);
        },
    }
});

export const { Enroll, unEnroll, setEnrollments } =
    enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;