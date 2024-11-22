import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const KANBAN_API = `${REMOTE_SERVER}/api/enrollments`;
export const fetchAllEnrollments = async () => {
    const { data } = await axios.get(KANBAN_API);
    return data;
};
export const deleteEnrollment = async (id: string) => {
    const { data } = await axios.delete(`${KANBAN_API}/${id}`);
    return data;
}
export const addEnrollment = async (enrollment: any) => {
    const { data } = await axios.post(KANBAN_API, enrollment);
    return data;
}