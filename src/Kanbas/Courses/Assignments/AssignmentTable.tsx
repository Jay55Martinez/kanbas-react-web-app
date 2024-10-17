import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiNotebookLight } from "react-icons/pi";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentButton from "./AssignmentButtons";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentTable() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const { pathname } = useLocation();
  return (
    <div>
      <AssignmentControls />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown />
            Assignments
            <AssignmentControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
              <li className="wd-lesson list-group-item d-flex align-items-center p-3">
                <Link className="btn w-100 text-start d-flex align-items-center" to={`${pathname + '/' + assignment._id}`}>
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotebookLight className="text-success fs-4" />
                  <div className="ms-2 flex-grow-1">
                    <span className="d-block font-size-1">{assignment.title}</span>
                    <span className="d-block font-size-small">
                      <span className="text-danger">Multiple Modules</span>
                      <span className="text-black"> | Not available until {new Date(assignment.available).toLocaleDateString("en-US", { month: "long", day: "numeric" })} |</span>
                    </span>
                    <span className="d-block font-size-small">Due {new Date(assignment.due).toLocaleDateString("en-US", { month: "long", day: "numeric" })} | {assignment.points} pts</span>
                  </div>
                  <AssignmentButton />
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
