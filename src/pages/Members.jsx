import Title from "../Components/Title";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

const Members = () => {
  const executiveMembers = [
    {
      name: "Arafat Uddin",
      semester: "7th",
      post: "PRESIDENT",
      description: "App developer with 2y experience",
      fbLink: "#",
      instagramLink: "#",
      linkedinLink: "#",
      profile:
        "https://i.ibb.co.com/qMX9Z4GD/481656519-122112992774723526-91852898477958294-n.jpg",
      isPresident: true,
    },
    {
      name: "Abdullah Zihad",
      semester: "7th",
      post: "CO-PRESIDENT",
      description: "MERN stack web developer with 3y experience",
      fbLink: "#",
      instagramLink: "#",
      linkedinLink: "#",
      profile: "https://i.ibb.co.com/DP7GcPRz/picofme.png",
      isPresident: false,
    },
  ];

  const members = [
    {
      name: "Shah Paran",
      post: "Finance Editor",
      fbLink: "",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Kaosar Uddin Joy",
      semester: "5th",
      post: "Senior Joint General Secretary",
      fbLink: "http://facebook.com/kaosaruddin.joy",
      profile:
        "https://i.ibb.co.com/Sw5r2T1L/4576a120-01a3-493f-a3ab-bc8e104a2c9e.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Israt Jahan",
      semester: "5th",
      post: "Media Secretary",
      fbLink: "https://i.ibb.co.com/H1F2J3q/download.jpg",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Tanzim Aziz",
      semester: "3rd",
      post: "Media Secretary",
      fbLink: "",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Rahim Khan",
      semester: "4th",
      post: "Treasurer",
      fbLink: "",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Fatima Akter",
      semester: "6th",
      post: "Vice President",
      fbLink: "",
      profile:
        "https://i.ibb.co.com/MxSxc3Hr/8d52c5c35382908832ffedb21c1e63b0.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Abdullah Al Mamun",
      semester: "5th",
      post: "General Secretary",
      fbLink: "",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Nusrat Jahan",
      semester: "4th",
      post: "Cultural Secretary",
      fbLink: "",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Kamal Hossain",
      semester: "3rd",
      post: "Sports Secretary",
      fbLink: "",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Ayesha Siddika",
      semester: "5th",
      post: "Academic Secretary",
      fbLink: "",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Abdul Alim Mohin",
      semester: "",
      post: "General Secretary",
      fbLink: "https://www.facebook.com/mohin.sheikh.184881",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <Title
        heading={"Our Team Members"}
        title={"Meet our dedicated team of professionals"}
      />

      {/* Executive Members */}
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 gap-y-18">
          {executiveMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 w-full md:w-80 text-center shadow-xl transition-all duration-300 transform hover:scale-105
                ${
                  member.isPresident
                    ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white"
                    : "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                }`}
            >
              <div
                className={`relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 shadow-lg ${
                  member.isPresident
                    ? "border-yellow-300 ring-4 ring-yellow-300"
                    : "border-white ring-4 ring-blue-300"
                } -mt-16`}
              >
                <img
                  src={member.profile}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4">
                <span
                  className={`inline-block text-xs font-bold px-4 py-1 rounded-full ${
                    member.isPresident
                      ? "bg-yellow-400 text-blue-900"
                      : "bg-blue-300 text-blue-900"
                  }`}
                >
                  {member.post}
                </span>
              </div>
              <h2 className="text-2xl font-bold mt-3">{member.name}</h2>
              <h2 className="text-sm opacity-90  mt-2">
                Semester: {member.semester}
              </h2>
              <p className="text-sm opacity-80 mt-2 px-4">
                {member.description}
              </p>
              <div className="flex justify-center gap-4 mt-5">
                {member.fbLink && (
                  <a
                    href={member.fbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 text-xl transition-colors"
                  >
                    <FaFacebook />
                  </a>
                )}
                {member.instagramLink && (
                  <a
                    href={member.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 text-xl transition-colors"
                  >
                    <FaInstagram />
                  </a>
                )}
                {member.linkedinLink && (
                  <a
                    href={member.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 text-xl transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Members */}
      <div className="mt-16  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
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
              <p className="text-xs text-gray-500 mt-2">{member.description}</p>

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
