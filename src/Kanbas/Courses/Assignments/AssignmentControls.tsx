import { FaSearch } from "react-icons/fa";

export default function AssignmentControls() {
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
                <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary">
                    + Group
                </button>
                <button id="wd-add-assignment" className="btn btn-lg btn-danger">
                    + Assignment
                </button>
            </div>
        </div>
    );
}
