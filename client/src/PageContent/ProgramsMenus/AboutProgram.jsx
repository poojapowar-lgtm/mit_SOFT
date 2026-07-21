import React from "react";
import "./programs.css";

const AboutProgram = ({
  image,
  title,
  description,
  description2,
}) => {
  return (
    <section className="about-programme">
      <h2 className="innerpage-title">{title}</h2>
      {/* <h4 className="innerpage-subtitle">About Program :</h4> */}
<div className="about-pg-container">
  {image && (
    <div className="about-pg-img">
      <img src={image} alt={title} />
    </div>
  )}

  {description?.length > 0 && (
    <div className="about-pg-content">
      {description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  )}
</div>

{description2 && (
  <>
    <h3 className="innerpage-subtitle">Importance of Program :</h3>
    <p>{description2}</p>
  </>
)}
    </section>
  );
};

export default AboutProgram;
