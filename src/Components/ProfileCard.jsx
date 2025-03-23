import React from "react";

const ProfileCard = ({teamMember}) => {
  console.log(teamMember);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-sm w-full overflow-hidden transition-all duration-300 hover:shadow-indigo-500/50 dark:hover:shadow-blue-900/50 mb-16">
      <div className="relative h-32 bg-gradient-to-r from-indigo-600 to-blue-700">
        <img
          src={teamMember?.profileImg}
          alt={teamMember?.name}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-28 h-28 rounded-full border-4 border-white dark:border-gray-800 transition-transform duration-300 hover:scale-105 object-cover"
        />
      </div>
      <div className="pt-16 pb-6 px-6 text-center bg-white">
        <h1 className="text-2xl font-bold mb-1">{teamMember?.name}</h1>
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
          {teamMember?.post}
        </p>
        <p className="text-gray-600 dark:text-gray-600 mb-4">
          Passionate about creating user-friendly web applications and solving
          complex problems.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          {/* Email Icon */}
          <a
            href="mailto:example@example.com" // Replace with the actual email
            className="text-gray-600 hover:text-indigo-800 dark:text-gray-500 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/example" // Replace with the actual Facebook link
            className="text-gray-600 hover:text-indigo-800 dark:text-gray-500 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/example" // Replace with the actual LinkedIn link
            className="text-gray-600 hover:text-indigo-800 dark:text-gray-500 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
