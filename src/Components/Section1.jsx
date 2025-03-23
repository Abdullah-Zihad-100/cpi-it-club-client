import Lottie from "lottie-react";
import Robot from "../robot.json"
const Section1 = () => {
    return (
      <div className="mt-20 mx-auto max-w-7xl px-6 mb-10">
        <div className="md:flex flex-row-reverse  justify-between  items-center gap-10">
          <div className="w-full mx-auto">
            <Lottie
              animationData={Robot}
              className="md:w-[400px] w-[300px] mx-auto my-5"
              loop={true}
            />
          </div>
          <div>
            <p className="text-blue-800 font-semibold">
              We're a dynamic team of
            </p>
            <h3 className="sm:text-5xl text-3xl font-semibold leading-13">
              Innovative, <span className="text-blue-800">Tech </span>{" "}
              Enthusiastic People
            </h3>
            <hr className="w-[80px] border-3 border-blue-700 my-5" />
            <p className="text-gray-600 text-lg">
              CPI IT club is a student-managed club at CPI led by creative
              and tech enthusiastic students.
            </p>{" "}
            <br />
            <p className="text-gray-600 text-lg">
              Established in 2025, the club organizes different workshops,
              seminars, training programs, etc.
            </p>
            <a
              href="#_"
              className="relative inline-flex my-4 items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-700 rounded-full shadow-md group bg-blue-700 hover:bg-transparent hover:text-blue-700"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-blue-700 duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
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
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                Learn More
                <svg
                  className="w-5 h-5 ms-2"
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
                  />
                </svg>
              </span>
              <span className="relative invisible">Learn More</span>
            </a>
          </div>
        </div>
      </div>
    );
}
export default Section1;