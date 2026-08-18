import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SOFT = () => {
  const visionData = [
    {
      title: "Vission",
      image: "/assets/images/home/vision.jpg",
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
      image: "/assets/images/home/mission.jpg",
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

      <div className="aboutmit-image">
        <img src="/assets/images/home/banner.jpg" alt="About MIT ADT" />
      </div>

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

      <div className="vision-cards">
        {visionData.map((item, index) => (
          <div className="vision-text" key={index}>

            <div
              className="vision-bg"
              style={{
                backgroundImage: `url("${item.image}")`,
              }}
            ></div>

            <div className="vision-overlay"></div>
            <div className="vision-inner">
                <h3 className="v-title">
                  {item.title}
                </h3>


              <div className="vision-content">
                {item.paragraphs.map((paragraph, i) => (
                  <p key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default SOFT;
