import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const course_name = pathname.split("/")[4];
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }}
      className="wd list-group rounded-0 d-none d-md-block">
      {links.map((link) => (
        <Link key={link} to={`${pathname.substring(0, pathname.lastIndexOf(course_name)) + link}`} className={`list-group-item border-0 bg-white 
        ${pathname.includes(link) ? "text-black active" : "text-danger"}`}>
          {link}
        </Link>
      ))}
    </div>
);}
