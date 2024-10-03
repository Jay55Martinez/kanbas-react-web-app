import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiNotebookLight } from "react-icons/pi";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentButton from "./AssignmentButtons";
import { Link } from "react-router-dom";

export default function AssignmentTable() {
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
            {["A1", "A2", "A3"].map((assignment, index) => (
              <li key={index} className="wd-lesson list-group-item d-flex align-items-center p-3">
                <Link className="btn w-100 text-start d-flex align-items-center" to="/Kanbas/Courses/1234/Assignments/:aid">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotebookLight className="text-success fs-4" />
                  <div className="ms-2 flex-grow-1">
                    <span className="d-block font-size-1">{assignment}</span>
                    <span className="d-block font-size-small">
                      <span className="text-danger">Multiple Modules</span>
                      <span className="text-black"> | Not available until May 6 at 12:00 am |</span>
                    </span>
                    <span className="d-block font-size-small">Due May 13 at 11:59pm | 100 pts</span>
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
