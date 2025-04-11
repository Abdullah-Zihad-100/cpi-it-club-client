import React from "react";

const EventDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-white pt-36">
      {/* Combined Event Card */}
      <div className="bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl md:flex">
        {/* Left Image Side */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/free-psd/black-friday-poster-template_23-2150825440.jpg"
            alt="Event Poster"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content Side */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">
            Typing Contest Event CPI
          </h1>
          <h2 className="text-xl font-semibold text-blue-300 mb-4">IT CLUB</h2>

          <p className="mb-4 text-gray-300">
            The CPI IT Club-sponsored ICT Cup is not your typical competition.
            It's a special occasion that motivates IT pros to take a break from
            their typical tech routine and enjoy mingling in a laid-back and fun
            environment.
          </p>

          <div className="grid grid-cols-1 gap-3 text-gray-300 mb-4">
            <div>
              <strong className="text-blue-400">Location:</strong> Academy Rode,
              Feni, Bangladesh
            </div>
            <div>
              <strong className="text-blue-400">Date:</strong> June 12, 2025
            </div>
            <div>
              <strong className="text-blue-400">Participation Fee:</strong> TK{" "}
              <span className="text-red-400">199</span>
            </div>
            <div>
              <strong className="text-blue-400">Winning Prizes:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>1st Prize: Trophy + 3000 TK</li>
                <li>2nd Prize: Medal + 2000 TK</li>
                <li>3rd Prize: Medal + 1000 TK</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 italic underline hover:text-blue-600 text-blue-500">
           For Register Message Our Facebook Page
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
