import React from "react";
import Faq from "react-faq-component";
import Title from "./Title";

const data = {
  rows: [
    {
      title: "What does CPI IT CLUB do?",
      content:
        "CPI IT Club is a student-led organization at Compact Polytechnic Institute that empowers students through technology. The club organizes various events, training programs, workshops, and competitions to enhance practical IT skills like web development, graphic design, app development, and more. It also plays a vital role in maintaining the institute's digital presence and managing technical activities.",
    },
    {
      title: "How can I join the CPI IT CLUB?",
      content:
        "Students of Compact Polytechnic can join the CPI IT Club by filling out the membership form when recruitment is open. Recruitment usually happens during the start of a new session or after club orientation programs. Interested students are evaluated based on their interest and basic IT knowledge before becoming a member.",
    },
    {
      title: "How can I become an Executive member?",
      content:
        "To become an Executive Member, a student must first be an active general member of the CPI IT Club. Executive members are selected based on their dedication, skill contribution, and involvement in club activities. Typically, selection is done by the club advisor and current executive team through interviews or evaluations.",
    },
    {
      title: "How many departments are there in the CPI IT CLUB?",
      content:
        "CPI IT Club consists of multiple departments including Web & App Development, Graphics & UI Design, Event Management, Public Relations, and Content & Documentation. Each department has specific responsibilities and contributes to the overall functioning of the club.",
    },
  ],
};

const FAQComponent = () => {
  return (
    <div className="px-5">
      <Title
        heading="FAQ"
        title="
Frequently asked questions"
      />
      <Faq
        data={data}
        styles={{
          rowTitleColor: "black",
          rowTitleTextSize: "21px",
          rowContentTextSize: "15px",
          transitionDuration: "0.3s",
          timingFunc: "linear",
          rowContentColor: "#333030",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "20px",
          rowContentPaddingRight: "20px",
        }}
      />
    </div>
  );
};

export default FAQComponent;
