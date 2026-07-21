import React from "react";

const BoardResearch = () => {
  const ResearchBoardData = [
    {
      title: "Chairman",
      desgination: "Dr. Anjali A Bhoite<br/>Associate Dean SoFT, MIT ADT University, Pune",
    },
    {
      title: "Member 1",
      desgination: "Dr. Yogita Chavan<br/>Associate Professor, FPPT Dept., SoFT, MIT ADT University, Pune",
    },
    {
      title: "Member 2",
      desgination: "Dr. Amit Kulthe<br/>Associate Professor, APO Dept., SoFT, MIT ADT University, Pune",
    },
    {
      title: "Member 3",
      desgination: "Dr. Vaibhav Patil<br/>Associate Professor &amp; I/c Head, ESFT Dept., SoFT, MIT ADT University, Pune",
    },
    {
      title: "External Member 1",
      desgination: "Dr. Renu Vyas<br/>Head, School of Bioengineering &amp; Dean",
    },
    {
      title: "External Member 2",
      desgination: "Dr. Bhushan Chaudhari<br/>Sr. Expert, Formulation, Research &amp; Development, Omni Active Health Technologies Ltd., Mumbai",
    },
    {
      title: "External Member 3",
      desgination: "Dr. Ahammed Shabeer<br/>Scientist, Agriculture Chemistry, NRCG, Pune",
    },
  ];

  return (
    <div>
      <h2 className="innerpage-title">School Research Committee</h2>
      <div className="board-body-container">
        {ResearchBoardData.map((item, index) => (
          <div className="board-card" key={index}>
            <h3 className="board-name">{item.title}</h3>

            <p
              className="board-desg"
              dangerouslySetInnerHTML={{ __html: item.desgination }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardResearch;
