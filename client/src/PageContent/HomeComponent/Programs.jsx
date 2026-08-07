import React from "react";
import "./Programs.css";

const Programs = () => {
  const programData = [
    {
      image: "/assets/images/programs/B.Tech.jpg",
      title: "B. Tech. (Food Technology)",
    },
    {
      image: "/assets/images/programs/Direct_2nd_Year.jpg",
      title: "B. Tech. (Food Technology) Direct 2nd Year",
    },
    {
      image: "/assets/images/programs/m.tech.png",
      title: "M. Tech. (Food Technology)",
    },
    {
      image: "/assets/images/programs/food_safety.webp",
      title: "M. Tech. (Food Safety & Quality Management)",
    },
    {
      image: "/assets/images/programs/Working_Professionals.jpg",
      title: "M. Tech. (Food Technology) (Working Professionals)",
    },
    {
      image: "/assets/images/programs/P.hd.jpg",
      title: "Ph. D. (Food Technology)",
    }
  ];

  return (
    <section className="programs-section">
      <h2 className="title">Our Programs</h2>

      <div className="programs-slider">
        <div className="programs-track">
          {programData.concat(programData).map((program, index) => (
            <div className="program-cards" key={index}>
              <img src={program.image} alt={program.title} />
              <div className="pg-card">
                <h3 className="pg-title">{program.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;