import FAQComponent from "../Components/FQAcomponent";
import ShereBanner from "../Components/ShereBanner";

const About = () => {
  return (
    <div className="">
      <ShereBanner title={"About Us"} />

      <div className="mx-auto max-w-7xl ">
        <div className="sm:flex space-y-3 px-5 my-20 justify-between gap-10 items-center">
          <div className="space-y-5 flex-1">
            <h2 className="text-4xl font-semibold ">
              Who are <span className="text-blue-700">We?</span>
            </h2>
            <p className="text-gray-700 text-[18px]">
              {" "}
              <span className="text-blue-700">CPI IT CLUB </span>is one of the
              student-run clubs at CPI College. It is run by a group of creative
              and tech-savvy students. With our goal in mind, we organize a
              series of sessions, seminars, training programs and competitions.
              Since our founding in 2004, we have been and still are looking for
              opportunities to help students in any way possible and all we have
              set out is to strive to guide students in the right direction.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://i.ibb.co.com/9mx2pC5z/482010626-122108626790770054-7155150234283418046-n.jpg"
              className="object-cover h-[450px] rounded-lg w-[600px]"
              alt=""
            />
          </div>
        </div>

        <div className="sm:flex flex-row-reverse space-y-3 px-5 my-20 justify-between gap-10 items-center">
          <div className="space-y-5 flex-1">
            <h2 className="text-4xl font-semibold ">
              Our <span className="text-blue-700">Objective</span>
            </h2>
            <p className="text-gray-700 text-[18px]">
              {" "}
              The main objective of our club is to develop the IT skills amongst
              the students demanded in the current market. For this, we organize
              different workshops, seminars, and training programs. Some of our
              recent events/sessions include IT fundamentals, Cisco Networking,
              Cryptocurrency, Graphics designing, Programming, and Web
              designing.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://i.ibb.co.com/0RXYQ12k/482016561-122108626724770054-4079713465887516837-n.jpg"
              className="object-cover h-[450px] rounded-lg w-[600px]"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* image section */}

      <img src="src/assets/faq-team.png" className="my-10 mx-auto" alt="" />

      <div className="max-w-7xl mx-auto">
        <FAQComponent />
      </div>
    </div>
  );
};
export default About;
