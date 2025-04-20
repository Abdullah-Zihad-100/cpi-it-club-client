import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../Apis/axios";
import ShereBanner from "../Components/ShereBanner";
import { MdOutlineMailOutline } from "react-icons/md";
import Title from "../Components/Title";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";

const Members = () => {
  const { data: members = [] } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosSecure.get("/members");
      return res.data;
    },
  });

  const presidents = members.filter((member) => member.isPresident);
  const generalMembers = members.filter((member) => !member.isPresident);

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <ShereBanner title={"Members"} />
      <Title
        heading={"Our Team Members"}
        title={"Meet our dedicated team of professionals"}
      />

      {/* President Card */}
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 gap-y-18">
          {presidents.map((member, index) => (
            <div
              key={index}
              className="rounded-xl p-6 w-full md:w-80 text-center shadow-xl transition-all duration-300 transform hover:scale-105
              bg-gradient-to-br from-blue-500 to-blue-700 text-white"
            >
              <div
                className={`relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 shadow-lg border-white ring-4 ring-yellow-500 -mt-16`}
              >
                <img
                  src={member.profile}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4">
                <span
                  className={`inline-block text-xs font-bold px-4 py-1 rounded-full bg-yellow-400 text-blue-900`}
                >
                  {member.post}
                </span>
              </div>
              <h2 className="text-2xl font-bold mt-3">{member.name}</h2>
              <h2 className="text-sm opacity-90  mt-2">
                Semester: {member.semester}
              </h2>
              <p className="text-sm opacity-80 mt-2 px-4">
                {member?.description?.slice(0,110)}
              </p>
              <div className="flex justify-center gap-4 mt-5">
                <a
                  href={member.fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 text-xl transition-colors"
                >
                  <FaFacebook />
                </a>

                <a
                  href={member.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 text-xl transition-colors"
                >
                  <MdOutlineMailOutline />
                </a>

              
                  <a
                    href={member.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 text-xl transition-colors"
                  >
                    <FaLinkedin />
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Members */}
      <div className="mt-16  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {generalMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-10"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-blue-400 -mt-12">
                <img
                  src={member.profile}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {member.post}
                </span>
              </div>
              <h2 className="text-lg font-semibold mt-3 text-gray-800">
                {member.name}
              </h2>
              {member.semester && (
                <h2 className="text-xs font-semibold text-blue-600 mt-1">
                  Semester: {member.semester}
                </h2>
              )}
              <p className="text-xs text-gray-500 mt-2">{member.description?.slice(0,100)}</p>

              <div className="flex justify-center gap-4 mt-5">
                <a
                  href={member.fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 text-xl transition-colors text-blue-500"
                >
                  <FaFacebook />
                </a>

                <a
                  href={member.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 text-xl transition-colors text-purple-700"
                >
                  <FaInstagram />
                </a>

                <a
                  href={member.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 text-xl transition-colors text-blue-500"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
