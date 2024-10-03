import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <span className="border rounded-pill border-dark">
                40% of Total
            </span>
            <FaPlus className="fs-4 ms-2" />
            <IoEllipsisVertical className="fs-4 ms-2" />
        </div>
    );
}