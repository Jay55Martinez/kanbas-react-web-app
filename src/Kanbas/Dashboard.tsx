import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as db from "./Database";
import { Enroll, unEnroll } from "./reducer";



export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  console.log(currentUser);
  if (currentUser.role === "FACULTY") {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
          <input
            value={course.name} // Changed to value
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number} // Changed to value
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            type="date"
            value={course.startDate} // Changed to value
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
          />
          <input
            type="date"
            value={course.endDate} // Changed to value
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <input
            value={course.image} // Changed to value
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, image: e.target.value })}
          />
          <textarea
            value={course.description} // Changed to value
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </h5>
        <hr />
        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
        <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {courses.filter((course) =>
            enrollments.some(
            (enrollment) =>
              enrollment.user === currentUser._id &&
              enrollment.course === course._id
            ))
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <img src="/images/reacts.png" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  // student view
  else {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button
          className="btn btn-info float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollment
        </button>
        {showAllCourses && (
          <div id="wd-all-courses" className="row mt-3">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses.map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                    >
                      <img src="/images/reacts.png" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name}
                        </h5>
                        <p
                          className="wd-dashboard-course-title card-text overflow-y-hidden"
                          style={{ maxHeight: 100 }}
                        >
                          {course.description}
                        </p>
                        <button className="btn btn-primary">Go</button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {courses.filter((course) =>
            enrollments.some(
            (enrollment) =>
              enrollment.user === currentUser._id &&
              enrollment.course === course._id
            ))
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <img src="/images/reacts.png" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
