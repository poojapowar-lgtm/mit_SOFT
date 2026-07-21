import React from "react";
import "./NationalRank.css";

const NationalRank = () => {
  return (
    <section className="national-rank">
      <h2 className="title">National Ranking & Recognition</h2>

      <div className="rank-content">
        {/* Left Side Text */}
        <div className="rank-text">
          <p>
            The institute has a mandate to develop need base and global
            competitive students entrepreneurship. The three-phase higher
            education system comprising Graduation (B. Tech), Post-graduation
            (M. Tech) and Ph. D. Tech. (Food Tech) is one of its kind in the
            private education domain of Food Science and Technology discipline.
          </p>
          <p>
            lot of career opportunities in the Government sector like Food and
            Drug Administration, Food Corporation of India, Food Safety and
            Standards Authority of India etc., as well as techno-commercial
            opportunities in public and private sectors such as manufacturing,
            quality control and research and development.
          </p>
        </div>

        {/* Right Side Logos */}
        <div className="rank-logos">
          <img
            src="/assets/images/home/NAAC_Logo.png"
            alt="Logo 1"
            className="RLogo"
          />
          <img
            src="/assets/images/home/Ranking1.png"
            alt="Logo 2"
            className="RLogo"
          />
          <img
            src="/assets/images/home/Ranking2.png"
            alt="Logo 3"
            className="RLogo"
          />
          <img
            src="/assets/images/home/Ranking3.png"
            alt="Logo 4"
            className="RLogo"
          />
          <img
            src="/assets/images/home/Ranking4.png"
            alt="Logo 5"
            className="RLogo"
          />
        </div>
      </div>
    </section>
  );
};

export default NationalRank;
