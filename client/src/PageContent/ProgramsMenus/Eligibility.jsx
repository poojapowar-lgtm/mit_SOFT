import React from "react";
import "./programs.css";

const Eligibility = ({ title, description, duration, requirement, exam }) => {
  const infoData = [
    {
      title: "Duration",
      data: duration,
    },
    {
      title: "Specific Requirement",
      data: requirement,
    },
    {
      title: "Entrance Exam",
      data: exam,
    },
  ];

  return (
    <div>
      <h2 className="innerpage-title">{title}</h2>

      <div>
        <h3 className="innerpage-subtitle">Eligibility Criteria:</h3>
        {Array.isArray(description) ? (
          description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))
        ) : (
          <p>{description}</p>
        )}

        <div className="download-row">
          <h4 className="names">Download PDF (AY 2026-27)</h4>

          <div className="eligibility-btns">
            <button className="btn">Admission Handbook</button>
            <button className="btn2">Brochure</button>
          </div>
        </div>

        {/* <div className="row-lists">
          {duration && (
            <div>
              <h4 className="names">Duration</h4>
              {duration.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}

          {requirement && (
            <div>
              <h4 className="names">Specific Requirement</h4>
              {requirement.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}


          {exam && (
            <div>
              <h3 className="names">Entrance Exam</h3>
              {exam.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
        </div> */}
        <div className="board-body-container">
          {infoData.map((section, index) => (
            section.data && (
              <div className="board-card" key={index} style={{ padding: "10px" }}>

                <h3 className="board-name">{section.title}</h3>

                <div className="syllabus-row" style={{ flexDirection: "column", alignItems: "flex-start",margin:"5px 0" }}>
                  {section.data.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>

              </div>
            )
          ))}
        </div>


      </div>
    </div >
  );
};

export default Eligibility;
