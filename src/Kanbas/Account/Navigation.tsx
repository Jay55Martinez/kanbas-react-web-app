import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" style={{ width: 120 }} className="wd list-group rounded-0 d-none d-md-block">
      {links.includes("Signin") && (
        <Link className="list-group-item border-0 active" to="/Kanbas/Account/Signin">
          Signin
        </Link>
      )}
      {links.includes("Signup") && (
        <Link className="list-group-item border-0 text-danger" to="/Kanbas/Account/Signup">
          Signup
        </Link>
      )}
      {links.includes("Profile") && (
        <Link className="list-group-item border-0 text-danger" to="/Kanbas/Account/Profile">
          Profile
        </Link>
      )}
    </div>
  );
}
