import { FaLocationArrow } from "react-icons/fa";
import Title from "./Title";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar, CiMoneyBill } from "react-icons/ci";

const FeaturedEventSec = () => {
  return (
    <div className="pt-10 px-5 max-w-7xl mx-auto">
      <Title
        heading="Featured Events"
        title="Check out our workshops and sessions"
      />
      <div className="md:flex flex-row-reverse gap-5 justify-between items-center space-y-10">
        <img
          className="w-[420px] mx-auto"
          src="https://img.freepik.com/free-psd/black-friday-poster-template_23-2150825440.jpg"
          alt=""
        />
        <div className="space-y-4">
          <h2 className="text-blue-700 font-semibold text-3xl lg:w-2/4">
            Typing Contest Event CPI IT CLUB
          </h2>
          <h2 className="text-white font-semibold rounded-3xl px-3 py-1 bg-blue-700 inline-block text-xs">
            Main Event
          </h2>
          <p className="text-gray-700 lg:w-3/4">
            The CPI IT Club-sponsored ICT Cup is not your typical futsal
            competition. It's a special occasion that motivates IT pros to take
            a break from their typical tech routine and get moving while
            mingling with others in a laid-back and enjoyable
          </p>
          <div className="space-y-1">
            <div className="flex gap-5 items-center">
              <IoLocationOutline className="text-3xl text-gray-600" />
              <p className="text-gray-700">Academy Rode, Feni ,Bangladesh </p>
            </div>
            <div className="flex gap-5 items-center">
              <CiCalendar className="text-3xl text-gray-600" />
              <p className="text-gray-700">June 12, 2025</p>
            </div>
            <div className="flex gap-5 items-center">
              <CiMoneyBill className="text-3xl text-gray-600" />
              <p className="text-gray-700">
                TK <del className="italic text-red-500 ">199</del>
              </p>
            </div>

            <a
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-12 py-3 overflow-hidden font-medium text-blue-700 transition duration-300 ease-out border-2 border-blue-700 rounded-full shadow-md group my-3"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-700 transition-all duration-300 transform group-hover:translate-x-full ease">
                Read More
              </span>
              <span className="relative invisible">Read More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedEventSec;
