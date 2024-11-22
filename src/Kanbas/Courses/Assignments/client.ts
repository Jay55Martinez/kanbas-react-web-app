import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/assignments`;

export const fetchAllAssignments = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const deleteAssignment = async (id: string) => {
    const { data } = await axios.delete(`${COURSES_API}/${id}`);
    return data;
};

export const updateAssignment = async (id: string, assignment: any) => {
    const { data } = await axios.put(`${COURSES_API}/${id}`, assignment);
    return data;
}

export const addAssignment = async (id: string, assignment: any) => {
    const { data } = await axios.post(`${COURSES_API}/${id}`, assignment);
    return data;
};