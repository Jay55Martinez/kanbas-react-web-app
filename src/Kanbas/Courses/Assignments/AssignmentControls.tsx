import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function AssignmentControls() {
    const { pathname } = useLocation();
    return (
        <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center mb-3">
            {/* Search bar */}
            <div className="input-group" style={{ width: "300px" }}>
                <span className="input-group-text">
                    <FaSearch />
                </span>
                <input
                    id="wd-search-assignment"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search..."
                />
            </div>
            
            {/* Buttons */}
            <div className="d-flex gap-2">
                <Link 
                    id="wd-add-assignment" 
                    className="btn btn-lg btn-secondary btn-danger"
                    to={`${Math.floor(10000 + Math.random() * 90000)}`}
                >
                    + Assignment
                </Link>
            </div>
        </div>
    );
}
