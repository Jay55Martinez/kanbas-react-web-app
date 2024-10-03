import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" style={{ width: 120 }}
      className="wd list-group rounded-0 d-none d-md-block">
      <Link className="list-group-item border-0 active" to="/Kanbas/Account/Signin"  > Signin  </Link> 
      <Link className="list-group-item border-0 text-danger" to="/Kanbas/Account/Signup"  > Signup  </Link> 
      <Link className="list-group-item border-0 text-danger" to="/Kanbas/Account/Profile" > Profile </Link> 
    </div>
);}
