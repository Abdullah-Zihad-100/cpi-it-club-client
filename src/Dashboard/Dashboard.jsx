import { useState } from "react";
import { IoIosNotifications, IoMdPhotos } from "react-icons/io";
import { FcStatistics } from "react-icons/fc";
import {
  FaChalkboardTeacher,
  FaBook,
  FaCalendarAlt,
  FaBars,
  FaBookOpen,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { Link, NavLink, Outlet } from "react-router";
import { IoMdCloseCircle } from "react-icons/io";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-50 overflow-x-hidden">
      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-3  bg-blue-700 text-white shadow">
        <div className="flex items-center gap-2 text-lg font-bold">
          <MdDashboard size={22} /> Dashboard
        </div>
        <button onClick={toggleSidebar}>
          <FaBars size={22} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-40 top-0 md:h-auto h-full left-0 w-64 bg-blue-700 text-white p-6 space-y-6 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block`}
      >
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleSidebar}>
            <IoMdCloseCircle size={28} className="text-white" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-xl font-bold mb-6">
          <MdDashboard size={24} /> Dashboard
        </div>

        <nav className="space-y-3">
          <NavLink
            to="statistics"
            className={({ isActive }) =>
              `flex items-center gap-2 pb-1 transition ${
                isActive ? "border-b-2 border-white " : "hover:text-blue-300"
              }`
            }
          >
            <FcStatistics />
            statistics
          </NavLink>
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
            to="manage-assignments"
            className={({ isActive }) =>
              `flex items-center gap-2 pb-1 transition ${
                isActive ? "border-b-2 border-white " : "hover:text-blue-300"
              }`
            }
          >
            <FaBookOpen /> Assignments
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

          <NavLink
            to="manage-gallery"
            className={({ isActive }) =>
              `flex items-center gap-2 pb-1 transition ${
                isActive ? "border-b-2 border-white " : "hover:text-blue-300"
              }`
            }
          >
            <IoMdPhotos /> Gallery
          </NavLink>
          <NavLink
            to="manage-members"
            className={({ isActive }) =>
              `flex items-center gap-2 pb-1 transition ${
                isActive ? "border-b-2 border-white " : "hover:text-blue-300"
              }`
            }
          >
            <FaUsersCog /> Members
          </NavLink>
          <NavLink
            to="manage-users"
            className={({ isActive }) =>
              `flex items-center gap-2 pb-1 transition ${
                isActive ? "border-b-2 border-white " : "hover:text-blue-300"
              }`
            }
          >
            <LuUsers /> Users
          </NavLink>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-block bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-100 transition"
            >
              Back Home
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
