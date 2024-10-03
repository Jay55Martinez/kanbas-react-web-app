import { Link } from "react-router-dom";
import { LuCalendarDays } from "react-icons/lu";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" value="alice" placeholder="username" className="form-control mb-2"/>
      <input id="wd-password" value="123" placeholder="password"
             type="password" className="form-control mb-2"/>
      <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-2"/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-2"/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input id="wd-dob" value="2000-01-01" type="date" className="form-control mb-2" />
        <LuCalendarDays style={{ marginLeft: '8px' }} />
      </div>
      <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-2"/>
      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100 mb-2">Sign out</Link>
    </div>
);}

