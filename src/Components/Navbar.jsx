import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { NavLink, Link } from "react-router";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logOut } = useAuth();
  const { role } = useRole();
  console.log("User role------>", role);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsProfileOpen(false);
  };

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Links = (
    <>
      <NavLink
        to="/"
        onClick={() => setIsToggle(false)}
        className={({ isActive }) =>
          isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/members"
        onClick={() => setIsToggle(false)}
        className={({ isActive }) =>
          isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
        }
      >
        Members
      </NavLink>

      <NavLink
        to="/about-us"
        onClick={() => setIsToggle(false)}
        className={({ isActive }) =>
          isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => setIsToggle(false)}
        className={({ isActive }) =>
          isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
        }
      >
        Contact
      </NavLink>

      {/* Info Dropdown (Only shows on desktop) */}
      <div className="relative sm:block hidden">
        <button
          onClick={handleDropdownToggle}
          className={`${
            isScrolled ? "text-gray-800" : "text-white"
          } hover:text-blue-500 font-semibold`}
        >
          <span className="flex items-center gap-x-2">
            Info <FaChevronDown />
          </span>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-8 left-0 w-48 bg-white shadow-lg rounded-lg space-y-2 py-2 z-10 text-black">
            <NavLink to="/event" className="block px-4 py-2 hover:bg-gray-200">
              Events
            </NavLink>
            <NavLink
              to="/classes"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Classes
            </NavLink>
          </div>
        )}
      </div>

      {role === "admin" && (
        <NavLink
          to="/dashboard/statistics"
          onClick={() => setIsToggle(false)}
          className={({ isActive }) =>
            isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
          }
        >
          Dashboard
        </NavLink>
      )}

      {/* Mobile Info Links */}
      <div className="sm:hidden flex flex-col space-y-1">
        <NavLink
          to="/event"
          onClick={() => setIsToggle(false)}
          className="hover:text-blue-500"
        >
          Events
        </NavLink>
        <NavLink
          to="/classes"
          onClick={() => setIsToggle(false)}
          className="hover:text-blue-500"
        >
          Classes
        </NavLink>
      </div>
    </>
  );

  return (
    <nav
      className={`${
        isScrolled ? "bg-white/60 backdrop-blur-lg" : "bg-blue-700"
      } p-3 fixed w-full z-20 transition-all duration-300`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            {" "}
            <img
              className="bg-white rounded-full  border-blue-700 border-2"
              width={60}
              src="/It-Club-Logo.png"
              alt="IT Club Logo"
            />
           </Link>
        </div>

        {/* Desktop Links */}
        <div
          className={`space-x-7 text-lg font-[400] ${
            isScrolled ? "text-gray-800" : "text-white"
          } md:flex hidden items-center`}
        >
          {Links}

          {/* Profile Dropdown */}
          {user?.email ? (
            <div className="relative">
              <button
                onClick={handleProfileToggle}
                className="focus:outline-none"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-13 h-13 rounded-full border-2 border-white hover:border-blue-500 object-cover"
                  />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-sm z-20 text-gray-800">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    View Profile
                  </Link>
                  <Link
                    to="/assignments"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Assignments
                  </Link>
                  <button
                    onClick={logOut}
                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
              }
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden block">
          {!isToggle ? (
            <IoMdMenu
              className="cursor-pointer"
              size={30}
              color={isScrolled ? "black" : "white"}
              onClick={() => setIsToggle(true)}
            />
          ) : (
            <RxCross2
              className="cursor-pointer"
              size={30}
              color={isScrolled ? "black" : "white"}
              onClick={() => setIsToggle(false)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isToggle && (
        <div
          className={`md:hidden ${
            !isScrolled ? "bg-white/60" : "bg-white shadow-2xl"
          } w-full p-5 space-y-3 flex flex-col rounded-sm text-gray-800 text-lg`}
        >
          {Links}
          {user?.email ? (
            <div className="space-y-2 text-[14px] text-blue-500 flex flex-col">
              {" "}
              <hr />
              <Link
                to="/profile"
                onClick={() => setIsToggle(false)}
                className="hover:text-blue-500"
              >
                View Profile
              </Link>
              <Link
                to="/assignments"
                onClick={() => setIsToggle(false)}
                className="hover:text-blue-500"
              >
                Assignments
              </Link>
              <button
                onClick={() => {
                  logOut();
                  setIsToggle(false);
                }}
                className="text-red-500 hover:text-red-600 border border-red-500 rounded py-1 font-semibold cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setIsToggle(false)}
              className={({ isActive }) =>
                isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
