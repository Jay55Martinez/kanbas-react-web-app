import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { pathname } = useLocation();
  const assignmentId = pathname.substring(pathname.lastIndexOf('/') + 1);
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentReducer.assignments);

  const existingAssignment = assignments.find((a: any) => a._id === assignmentId);
  const defaultAssignment = { "_id": assignmentId, "title": "Empty", "description": "Empty", "course": cid };
  const usingDefault = !existingAssignment;
  const [localAssignment, setLocalAssignment] = useState(existingAssignment || defaultAssignment);
  console.log(localAssignment);

  // Update localAssignment only if the assignment changes
  useEffect(() => {
    if (existingAssignment) {
      setLocalAssignment(existingAssignment);
    }
  }, [existingAssignment]);

  const handleButtonReturn = () => {
    navigate(pathname.substring(0, pathname.lastIndexOf(assignmentId)));
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input 
          id="wd-name" 
          className="form-control" 
          value={localAssignment.title} 
          onChange={(e) => setLocalAssignment({ ...localAssignment, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <textarea 
          id="wd-description"
          className="form-control" 
          rows={5} 
          value={localAssignment.description}
          onChange={(e) => setLocalAssignment({ ...localAssignment, description: e.target.value })} 
        />
      </div>
      <div className="mb-3 row align-items-center">
        <div className="col-md-3">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input 
            id="wd-points" 
            className="form-control" 
            type="number" 
            value={localAssignment.points} 
            onChange={(e) => setLocalAssignment({ ...localAssignment, points: e.target.value })}
          />
        </div>
      </div>
      <div className="mb-3 row align-items-center">
        <div className="col-md-3">
          <label htmlFor="wd-assignment-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-9">
          <select id="wd-assignment-group" className="form-select">
            <option value="1">Group 1</option>
            <option value="2">Group 2</option>
            <option value="3">Group 3</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row align-items-center">
        <div className="col-md-3">
          <label htmlFor="wd-display-grade" className="form-label">Display Grade</label>
        </div>
        <div className="col-md-9">
          <select id="wd-display-grade" className="form-select">
            <option value="1">Percentage</option>
            <option value="2">Complete/Incomplete</option>
            <option value="3">Letter Grade</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row align-items-top">
        <div className="col-md-3">
          <label className="form-label">Submission Type</label>
        </div>
        <div className="border col-md-9">
          <select className="form-select form-select-lg mb-3">
            <option value="online" selected>Online</option>
            <option value="external" selected>External</option>
          </select>
          <div className="fw-bold">Online Entry Options</div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="entry-option-text" />
            <label className="form-check-label" htmlFor="entry-option-text">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="entry-option-web" checked />
            <label className="form-check-label" htmlFor="entry-option-web">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="entry-option-rec" />
            <label className="form-check-label" htmlFor="entry-option-rec">Media Recordings</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="entry-option-annotation" />
            <label className="form-check-label" htmlFor="entry-option-annotation">Student Annotation</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="entry-option-file" />
            <label className="form-check-label" htmlFor="entry-option-file">File Uploads</label>
          </div>
        </div>
      </div>
      <div className="mb-3 row align-items-top">
      <div className="col-md-3">
        <label htmlFor="wd-assign" className="form-label">Assign</label>
      </div>
      <div className="border p-3 col-md-9 rounded">
        <div className="mb-3">
          <label htmlFor="wd-assign" className="form-label">Assign to</label>
          <div className="input-group">
            <input id="wd-assign" className="form-control" value="Everyone" readOnly />
            <button className="btn btn-light border">X</button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="wd-assign" className="form-label">Due</label>
          <div className="input-group">
            <input id="wd-assign" className="form-control" value="Everyone" readOnly />
            <button className="btn btn-light border"><LuCalendarDays /></button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-available-date" className="form-label">Available From</label>
            <div className="input-group">
              <input 
                id="wd-available-date" 
                type="datetime-local" 
                className="form-control" 
                value={localAssignment.available}
                onChange={(e) => setLocalAssignment({ ...localAssignment, available: e.target.value })} 
              />
              <button className="btn btn-light border"><LuCalendarDays /></button>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="wd-until-date" className="form-label">Until</label>
            <div className="input-group">
              <input 
                id="wd-until-date" 
                type="datetime-local" 
                className="form-control" 
                value={localAssignment.due}
                onChange={(e) => setLocalAssignment({ ...localAssignment, due: e.target.value })} />
              <button className="btn btn-light border"><LuCalendarDays /></button>
            </div>
          </div>
          </div>
        </div>
        <div className="d-flex justify-content-end p-3">
          <button id="wd-cancel" className="btn btn-secondary me-2" 
          onClick={() => {
            if (usingDefault) {
              dispatch(deleteAssignment(assignmentId));
            }
            else {
            setLocalAssignment({ ...localAssignment });
            }
            handleButtonReturn()}}>
              Cancel
            </button>
          <button id="wd-save" className="btn btn-danger" 
             onClick={() => {
              if (!usingDefault) {
              dispatch(updateAssignment(localAssignment));
              }
              else {
              console.log("here");
              dispatch(addAssignment(localAssignment));
              }
              handleButtonReturn();}}
            >
              Save
            </button>
        </div>
      </div>
    </div>
  );
}