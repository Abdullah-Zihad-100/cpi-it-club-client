import { IoIosNotifications, IoMdCloseCircle } from "react-icons/io";
import { FaChalkboardTeacher, FaBook, FaCalendarAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router";
const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6 space-y-6">
        <div className="flex items-center gap-2 text-xl font-bold mb-6">
          <MdDashboard size={24} /> Dashboard
        </div>
        <nav className="space-y-3">
          <NavLink
            to="manage-notice"
            className={({ isActive }) =>
              `flex items-center gap-2 pb-1 transition ${
                isActive ? "border-b-2 border-white " : "hover:text-blue-300"
              }`
            }
          >
            <IoIosNotifications /> Notice
          </NavLink>
          <NavLink
            to="manage-classes"
            className={({ isActive }) =>
              `flex items-center gap-2 pb-1 transition ${
                isActive ? "border-b-2 border-white " : "hover:text-blue-300"
              }`
            }
          >
            <FaChalkboardTeacher /> Classes
          </NavLink>
          <NavLink
            to="manage-events"
            className={({ isActive }) =>
              `flex items-center gap-2 pb-1 transition ${
                isActive ? "border-b-2 border-white " : "hover:text-blue-300"
              }`
            }
          >
            <FaCalendarAlt /> Events
          </NavLink>
          <NavLink
            to="manage-courses"
            className={({ isActive }) =>
              `flex items-center gap-2 pb-1 transition ${
                isActive ? "border-b-2 border-white " : "hover:text-blue-300"
              }`
            }
          >
            <FaBook /> Courses
          </NavLink>
          <div className="mt-10">
            <Link to={"/"} className="border px-3 rounded  py-2">
              Back Home{" "}
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
