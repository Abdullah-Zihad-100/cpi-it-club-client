import { FaRegCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoPin } from "react-icons/io5";

const ServiceCard = ({classData}) => {
  return (
    <section className="mx-auto antialiased w-full relative my-10">
        <IoPin size={30} color="red"  className="absolute z-10 -top-4 rotate-40 -right-2" />
      {/* Card Container */}
      <article className="md:flex shadow-md mx-auto group cursor-pointer transform duration-500 hover:-translate-y-1 rounded-l-2xl w-full">
        {/* Image Section */}
        <img
          className="w-full max-h-[400px] object-cover md:w-52 md:rounded-l-xl"
          src={classData?.img}
        />

        {/* Content Section */}
        <div className="flex-1">
          {/* Main Content */}
          <div className="p-5 pb-10">
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
              <span className="text-blue-700">Class Subject :</span> {classData?.classSubject}
            </h1>
            <p className="text-gray-600 mt-2 leading-relaxed text-sm">
              <span className="font-semibold text-blue-700">Topics : </span>
             {classData?.topics}
            </p>

            <p className="text-gray-600 mt-2 leading-relaxed text-sm">
              <span className="text-blue-700 font-semibold">Description : </span>
             {classData?.description}
            </p>
          </div>

          {/* Footer Section */}
          <div className="bg-blue-50 p-5">
            <div className="sm:flex sm:justify-between">
              {/* Mentor and Time/Date */}
              <div className="w-full">
                <div className="text-gray-700">
                  <span className="text-gray-900 font-bold">Mentor : </span> {classData?.mentor}
                </div>
                <div className="flex justify-between mt-3">
                  {/* Time */}
                  <div className="flex gap-2 items-center">
                    <FaClock color="gray" size={20} />
                    <p className="text-gray-600 text-sm">{classData?.classDuration}</p>
                  </div>
                  {/* Date */}
                  <div className="flex gap-2 items-center">
                    <FaRegCalendarAlt color="gray" size={20} />
                    <p className="text-gray-600 text-sm">{classData?.classDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ServiceCard;