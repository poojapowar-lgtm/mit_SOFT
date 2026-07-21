import React from "react";
import "./programs.css";

const Syllabus = ({ title, file, description }) => {
  return (
    <div>
      <h2 className="innerpage-title">{title}</h2>
      <h3 className="innerpage-subtitle">Syllabus:</h3>

      <div className="syllabus-section">
        <p>{description}</p>

        <a href={file} target="_blank" rel="noopener noreferrer" className="btn2">
          View Syllabus
        </a>
      </div>
    </div>
  );
};

export default Syllabus;