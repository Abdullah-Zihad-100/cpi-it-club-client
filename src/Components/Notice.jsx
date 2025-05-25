import { MdNotificationsActive } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { axiosSecure } from "../Apis/axios";
import { useQuery } from "@tanstack/react-query";

const Notice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSeen, setIsSeen] = useState(true);

const { data: noticeData = [] } = useQuery({
  queryKey: ["notice"],
  queryFn: async () => {
    const res = await axiosSecure.get("/notice");
    return res?.data;
  },
});

  return (
    <div>
      {/* 🔔 Floating Notification Icon */}
      <div className="fixed bottom-5 right-5 z-20">
        <div className="relative">
          {isSeen && (
            <span className="absolute z-10 -top-1.5 -right-1.5 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow">
              {noticeData?.length}
            </span>
          )}

          <MdNotificationsActive
            size={60}
            className="text-blue-700 bg-blue-300 p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {/* 🔮 Modal Animation Styles */}
      <style>
        {`
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fadeInScale {
            animation: fadeInScale 0.6s ease-out;
          }
        `}
      </style>

      {/* 🟣 Glassy Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-30 backdrop-blur-sm bg-black/30 flex items-center justify-center w-full">
          <div className="bg-white max-w-md sm:max-w-lg w-full p-3 sm:p-6 rounded-2xl shadow-2xl relative text-blue-800 animate-fadeInScale sm:mx-0 mx-2">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-blue-500 hover:text-red-500 text-2xl"
            >
              <IoClose />
            </button>

            <h2 className="sm:text-2xl font-bold mb-4 text-blue-700">
              📢 IT Club Notices
            </h2>

            <ul className="list-disc list-inside space-y-2 text-blue-600 sm:text-base text-xs">
              {noticeData?.length > 0
                ? noticeData?.map((not) => (
                    <li key={not?._id}>{not?.title} </li>
                  ))
                : "Notice Not Found"}
            </ul>

            <button
              onClick={() => {
                setIsModalOpen(false), setIsSeen(false);
              }}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full transition duration-300"
            >
              Close Notice
            </button>
          </div>
        </div>
      )}

      {/* 🔻 Main Sections */}
    </div>
  );
};
export default Notice;
