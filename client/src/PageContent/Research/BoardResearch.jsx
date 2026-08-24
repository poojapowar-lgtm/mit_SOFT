import React from "react";
import "../../Pages/board_body.css";

const BoardResearch = () => {
  const ResearchBoardData = [
    {
      title: "Chairman",
      name: "Dr. Anjali A Bhoite",
      desgination: "Associate Dean SoFT, MIT ADT University, Pune",
    },
    {
      title: "Member 1",
      name: "Dr. Yogita Chavan",
      desgination: "Associate Professor, FPPT Dept., SoFT, MIT ADT University, Pune",
    },
    {
      title: "Member 2",
      name: "Dr. Amit Kulthe",
      desgination: "Associate Professor, APO Dept., SoFT, MIT ADT University, Pune",
    },
    {
      title: "Member 3",
      name: "Dr. Vaibhav Patil",
      desgination: "Associate Professor &amp; I/c Head, ESFT Dept., SoFT, MIT ADT University, Pune",
    },
    {
      title: "External Member 1",
      name: "Dr. Renu Vyas",
      desgination: "Head, School of Bioengineering &amp; Dean",
    },
    {
      title: "External Member 2",
      name: "Dr. Bhushan Chaudhari",
      desgination: "Sr. Expert, Formulation, Research &amp; Development, Omni Active Health Technologies Ltd., Mumbai",
    },
    {
      title: "External Member 3",
      name: "Dr. Ahammed Shabeer",
      desgination: "Scientist, Agriculture Chemistry, NRCG, Pune",
    },
  ];

  return (
    <div>
      <h2 className="innerpage-title">School Research Committee</h2>
      <div className="board-body-container">
        {ResearchBoardData.map((item, index) => (
          <div className="board-card" key={index}>
            <h3 className="board-name">{item.title}</h3>
            <p style={{ margin: "5px 0" }}><strong>{item.name}</strong></p>
            <p className="board-desg">{item.desgination}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardResearch;
