import React from "react";
import Faq from "react-faq-component";
import Title from "./Title";

const data = {
  rows: [
    {
      title: "What does CPI IT CLUB do?",
      content:
        "Prime IT Club is a student-run club working towards the goal of bridging the gap between academia and industry. Provide students with a thorough knowledge of the prospect of IT jobs in Nepal",
    },
    {
      title: "How can I join the CPI IT CLUB",
      content:
        "New general members will be recruited annually, once the club orientation has been officially organized. All the candidates for general membership should be interviewed and distributed among the internal departments after the selection.",
    },
    {
      title: "How can I become an Executive member?",
      content:
        "All of the general members who have more than 1 year of experience in the club are eligible to apply for executive membership.",
    },
    {
      title: "How many departments are there in the clubs?",
      content:
        "There are 5 departments in the clubs. Marketing, Human Resources, Event Management, Finance and Account, and Public Relation.",
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
          rowTitleTextSize: "23px",
          transitionDuration: "0.3s",
          timingFunc: "linear",
          rowContentColor: "#333030",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "20px",
          rowContentPaddingRight: "150px",
        }}
      />
    </div>
  );
};

export default FAQComponent;
