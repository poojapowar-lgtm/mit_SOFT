import React from "react";
import "./about_mit.css";
import {
  FaEye,
  FaLeaf,
  FaBullseye,
} from "react-icons/fa6";

const SOFT = () => {
  const visionData = [
    {
      title: "Vission",
      paragraphs: [
        `To be a center of excellence in training, research, outreach, and  
      consultancy services in Food Science and Technology with emphasis  
      on value addition of agricultural produce, processing technology  
      driven conservation of food, nutritional goodness, food security  
      and safety assurance through stake holder sensitization.`,
      ],
    },
    {
      title: "Mission",
      paragraphs: [
        `The fundamental mission of MIT-SoFT is to emerge out as a global  
      competitive center (Institute) of excellence to impart graduation,  
      post-graduation and Doctoral education programs (B. Tech, M. Tech.  
      and Ph.D.) in the discipline of Food Science and Technology to  
      satisfy futuristic new generation aspirations.`,
      ],
    },
  ];



  return (
    <div className="aboutmit-container">
      <h2 className="innerpage-title">School of Food Technology</h2>

      <div className="aboutsoft-content">

        {/* Left - Image */}
        <div className="aboutsoft-image">
          <img
            src="/assets/images/home/soft1.jpg"
            alt="MIT School of Food Technology - About SoFT"
            title="About MIT School of Food Technology"
          />
        </div>

        {/* Right - Content */}
        <div className="aboutsoft-text">

          <p>
            The institute has a mandate to develop need base and global competitive
            students' entrepreneurship. The three-phase higher education system
            comprising Graduation (B. Tech), Post-graduation (M. Tech) and Ph. D.
            Tech. (Food Tech) is one of its kind in the private education domain of
            Food Science and Technology discipline.
          </p>

          <p>
            Lot of career opportunities in the Government sector like Food and Drug
            Administration, Food Corporation of India, Food Safety and Standards
            Authority of India etc., as well as techno-commercial opportunities in
            public and private sectors such as manufacturing, quality control and
            research and development.
          </p>

        </div>

      </div>

      <section className="vision-mission-section">
        <div className="vm-container">

          {/* VISION */}
          <div className="vision-card">

            {/* Content */}
            <div className="vision-main-content">

              <div className="vm-heading">
                <h2>{visionData[0].title}</h2>
                <span></span>
              </div>

              <div className="vision-paragraph">
                {visionData[0].paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

            </div>

          </div>


          {/* MISSION */}
          <div className="mission-card">


            {/* Mission Content */}
            <div className="mission-main-content">

              <div className="vm-heading">
                <h2>{visionData[1].title}</h2>
                <span></span>
              </div>

              <div className="mission-content">
                {visionData[1].paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SOFT;
