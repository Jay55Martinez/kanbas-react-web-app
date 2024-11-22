import { createSlice } from "@reduxjs/toolkit";
import { get } from "http";

const initialState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        getAssignments: (state, { payload: assignments }) => {
            state.assignments = assignments;
        },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                due: assignment.due,
                available: assignment.available,
            }
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
    }
});

export const { addAssignment, deleteAssignment, updateAssignment, getAssignments } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;