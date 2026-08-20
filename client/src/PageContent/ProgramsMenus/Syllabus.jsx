import React from "react";
import "./programs.css";

const Syllabus = ({ title, file, description }) => {

  const syllabusData = [
    {
      title: "Open Elective Courses Offered:",
      link: "/assets/docs/Open Elective Courses Offered by SoFT.pdf",
    },
    {
      title: "MDM Courses:",
      link: "/assets/docs/MDM Courses for other schools_4 credits.docx",
    },
    {
      title: "SHD NEP aligned Syllabus AY 2023-24 Onwards:",
      link: "/assets/docs/_SHD NEP aligned Syllabus AY 2023-24 Onwards.docx.pdf",
    },
  ];


  return (
    <div>
      <h2 className="innerpage-title">{title}</h2>

      {/* <div className="syllabus-section">
        <h3 className="innerpage-subtitle">Syllabus:</h3>

        <p>{description}</p>

        <a href={file} target="_blank" rel="noopener noreferrer" className="btn2">
          View Syllabus
        </a>

      </div> */}


      {/* <div className="syllabus-section">
        <h3 className="innerpage-subtitle">Open Elective Courses Offered:</h3>

        <a href={"/assets/docs/Open Elective Courses Offered by SoFT.pdf"} target="_blank" rel="noopener noreferrer" className="btn2">
          View Syllabus
        </a>
      </div>



      <div className="syllabus-section">
        <h3 className="innerpage-subtitle">MDM Courses:</h3>

        <a href={"/assets/docs/MDM Courses for other schools_4 credits.docx"} target="_blank" rel="noopener noreferrer" className="btn2">
          View Syllabus
        </a>
      </div>



      <div className="syllabus-section">
        <h3 className="innerpage-subtitle">SHD NEP aligned Syllabus AY 2023-24 Onwards:</h3>
        <a href={"/assets/docs/_SHD NEP aligned Syllabus AY 2023-24 Onwards.docx.pdf"} target="_blank" rel="noopener noreferrer" className="btn2">
          View Syllabus
        </a>
      </div> */}

      <div className="board-body-container">
        <div className="board-card" style={{ padding: "10px" }}>
          <div className="syllabus-row">
            <h3 className="board-name">Syllabus AY 2026-27 : </h3>
            {/* <p>{description}</p> */}
            <a href={file} target="_blank" rel="noopener noreferrer" className="btn2" aria-label={`View Syllabus PDF: ${title}`}>
              View Syllabus
            </a>
          </div>
        </div>

        {syllabusData.map((item, index) => (
          <div className="board-card" key={index} style={{ padding: "10px" }}>
            <div className="syllabus-row">
              <h3 className="board-name">{item.title}</h3>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn2"
                aria-label={`Download ${item.title}`}
              >
                {item.link.endsWith(".pdf") ? "View PDF" : "Download"}
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Syllabus;