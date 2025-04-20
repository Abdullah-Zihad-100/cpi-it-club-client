import { CiCalendar, CiMoneyBill } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import useRole from "../Hooks/useRole";

const EventCard = ({ event, handleDelete }) => {
  const {role}=useRole()
  return (
    <div className="flex flex-col lg:flex-row-reverse shadow-lg sm:p-10 p-4 gap-5 justify-between items-center space-y-6 md:space-y-0 mb-10">
      <img
        className="w-full md:w-[420px] mx-auto rounded-xl object-cover"
        src={event.image}
        alt={event.title}
      />
      <div className="space-y-4 w-full">
        <h2 className="text-blue-700 font-semibold text-2xl md:text-3xl">
          {event.title}
        </h2>
        <h2 className="text-white font-semibold rounded-3xl px-3 py-1 bg-blue-700 inline-block text-xs">
          Main Event
        </h2>
        <p className="text-gray-700">{event.description}</p>
        <div className="space-y-3">
          <div className="flex gap-3 items-center">
            <IoLocationOutline className="text-2xl text-gray-600" />
            <p className="text-gray-700">{event.location}</p>
          </div>
          <div className="flex gap-3 items-center">
            <CiCalendar className="text-2xl text-gray-600" />
            <p className="text-gray-700">{event.date}</p>
          </div>
          <div className="flex gap-3 items-center">
            <CiMoneyBill className="text-2xl text-gray-600" />
            <p className="text-gray-700">
              TK{" "}
              <span className="italic text-red-500">
                {event?.price?.original}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              to={`/event/${event?._id}`}
              className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-medium text-blue-700 transition duration-300 ease-out border-2 border-blue-700 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
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
            </Link>
            {role === "admin" && (
              <button
                onClick={() => handleDelete(event._id)}
                className="text-white bg-red-700 py-2 px-5 rounded"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
