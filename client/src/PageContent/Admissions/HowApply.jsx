import React from "react";
import "./admission.css";

const HowApply = () => {

  const cardData = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
      title: "Fulfil academic eligibility as per program requirements",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
      title: "Appear for accepted entrance examinations (MHT-CET/JEE/NEET/CUET/GATE/PERA-CET as applicable).",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/1828/1828906.png",
      title: "Apply through the university admission portal (www.mituniversity.ac.in)",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/1828/1828925.png",
      title: "Shortlisted candidates appear for interviews.",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/1828/1828940.png",
      title: "Merit list published based on 12th /UG/PG marks, entrance score and interview performance (depends upon the program applied and university norms).",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/1828/1828961.png",
      title: "Complete document verification and fee payment.",
    },
  ];

  return (
    <div className="howapply-container">
      <h2 className="innerpage-title">How To Apply</h2>

      <div className="card-grid">
        {cardData.map((card, index) => (
          <div className="apply-card" key={index}>
            <img src={card.logo} alt={card.title} className="card-logo" />
            <h3 className="card-title">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowApply;