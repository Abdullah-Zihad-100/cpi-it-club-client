import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router"; // Correct import
import useAuth from "../Hooks/useAuth";
import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown
  const { user, logOut } = useAuth();

  const handleToggle = () => {
    setIsToggle(!isToggle); // Corrected to toggle isToggle
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard/manage-notice"
        className={({ isActive }) =>
          isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
        }
      >
        About Us
      </NavLink>

      {/* Info Dropdown */}
      <div className="relative">
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
          <div
            className={`absolute top-8 left-0 w-48 bg-white shadow-lg rounded-lg space-y-2 py-2 z-10 ${
              isScrolled ? "text-gray-800" : "text-black"
            }`}
          >
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

      <NavLink
        to="/members"
        className={({ isActive }) =>
          isActive ? "border-b-2 font-semibold" : "hover:text-blue-500"
        }
      >
        Members
      </NavLink>
      {user?.email ? (
        <button onClick={logOut} className="cursor-pointer">
          Logout
        </button>
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
    </>
  );

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-white/60 backdrop-blur-lg" // Glass effect
          : "bg-blue-700"
      } p-5 fixed w-full z-10 transition-all duration-300`}
    >
      <div className="flex justify-between items-center poppins-regular max-w-7xl mx-auto">
        <div>
          <img
            className="bg-white rounded-full"
            width={50}
            src="/It-Club-Logo.png"
            alt="IT Club Logo"
          />
        </div>
        <div
          className={`space-x-7 text-lg font-[400] ${
            isScrolled ? "text-gray-800" : "text-white"
          } sm:flex hidden`}
        >
          {Links}
        </div>
        <div className="sm:hidden block">
          {!isToggle ? (
            <IoMdMenu
              onClick={handleToggle}
              className="cursor-pointer"
              size={30}
              color={isScrolled ? "black" : "white"}
            />
          ) : (
            <RxCross2
              onClick={handleToggle}
              className="cursor-pointer"
              size={30}
              color={isScrolled ? "black" : "white"}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isToggle && (
        <div
          className={`sm:hidden ${
            !isScrolled ? "bg-white/60" : "bg-white shadow-2xl shadow-blue-300 "
          } w-full p-5 space-y-3 flex flex-col rounded-sm`}
        >
          {Links}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
