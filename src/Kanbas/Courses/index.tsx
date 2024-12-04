import { courses } from "../Database";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import * as client from "./client"
import { useEffect, useState } from "react";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    const [users, setUsers] = useState<any[]>([]);

    const fetchUsers = async () => {
        const users = await client.findUsersForCourse(course._id);
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
      }, [cid]);
    
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]} {pathname.split("/")[5] && ` > ${pathname.split("/")[5]}`}

            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<h2><Home /></h2>} />
                        <Route path="Modules" element={<h2><Modules /></h2>} />
                        <Route path="Assignments" element={<h2><Assignments /></h2>} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable users={users} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}