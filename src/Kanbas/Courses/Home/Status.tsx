import GreenCheckmark from "../Modules/GreenCheckmark";
import { RxCircleBackslash } from "react-icons/rx";
import { CiImport, CiBellOn } from "react-icons/ci";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="wd d-none d-lg-block p-3" style={{ width: "325px" }}>
      <h2>Course Status</h2>

      {/* First row with two buttons */}
      <div id="wd-unpublish-publish" className="row mt-3">
            <button className="btn btn-lg btn-secondary w-50 d-flex align-items-center">
            <RxCircleBackslash />
            Unpublish
            </button>
          <button className="btn btn-lg bg-success text-white w-50">
            <GreenCheckmark />
            Publish
          </button>
      </div>

      {/* Subsequent rows with single buttons */}
      <div id="wd-course-settings" className="btn-group-vertical">
            <button className="btn btn-lg btn-secondary mt-3 d-flex justify-content-left">
            <CiImport />
            <span className="ms-2">Import Existing Content</span>
            </button>
          <button className="btn btn-lg btn-secondary mt-3 d-flex justify-content-left">
            <LiaFileImportSolid />
            <span className="ms-2">Import from Commons</span>
          </button>
          <button className="btn btn-lg btn-secondary mt-3 d-flex justify-content-left">
            <FaHome />
            <span className="ms-2">Choose Home Page</span>
          </button>
          <button className="btn btn-lg btn-secondary mt-3 d-flex justify-content-left">
            <IoMdStats />
            <span className="ms-2">View Course Stream</span>
          </button>
          <button className="btn btn-lg btn-secondary mt-3 d-flex justify-content-left">
            <TfiAnnouncement />
            <span className="ms-2">New Announcement</span>
          </button>
          <button className="btn btn-lg btn-secondary mt-3 d-flex justify-content-left">
            <IoMdStats />
            <span className="ms-2">New Analytics</span>
          </button>
          <button className="btn btn-lg btn-secondary mt-3 d-flex justify-content-left">
            <CiBellOn />
            <span className="ms-2">View Course Notifications</span>
          </button>
      </div>
    </div>
  );
}
