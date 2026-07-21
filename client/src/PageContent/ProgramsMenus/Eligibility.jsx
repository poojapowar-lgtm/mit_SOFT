import React from "react";
import "./programs.css";

const Eligibility = ({ title, description, duration, requirement, exam }) => {
  return (
    <div>
      <h2 className="innerpage-title">{title}</h2>

      <div className="eligibility-container">
        <h3 className="innerpage-subtitle">Eligibility Criteria:</h3>
        {Array.isArray(description) ? (
          description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))
        ) : (
          <p>{description}</p>
        )}

        <div className="row-lists">

          {/* duration*/}
          {duration && (
            <div>
              <h4 className="names">Duration</h4>
              {duration.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}

          {/* Specific Requirement */}
          {requirement && (
            <div>
              <h4 className="names">Specific Requirement</h4>
              {requirement.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}

          {/* Entrance Exam */}
          {exam && (
            <div>
              <h3 className="names">Entrance Exam</h3>
              {exam.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}


        </div>
        <div className="download-row">
          <h4 className="names">Download PDF (AY 2026-27)</h4>

          <div className="eligibility-btns">
            <button className="btn">Admission Handbook</button>
            <button className="btn2">Brochure</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Eligibility;
