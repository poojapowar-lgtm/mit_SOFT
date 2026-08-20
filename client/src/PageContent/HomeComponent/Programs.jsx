import React from "react";
import "./Programs.css";
import { Link } from "react-router-dom";

const Programs = () => {
  const programData = [
    {
      image: "/assets/images/programs/B.Tech.jpg",
      title: "B. Tech. (Food Technology)",
      link: "/programs/btech-food-technology/about-programs"
    },
    {
      image: "/assets/images/programs/Direct_2nd_Year.jpg",
      title: "B. Tech. (Food Technology) Direct 2nd Year",
      link: "/programs/direct-2nd-year-btech/about-programs"
    },
    {
      image: "/assets/images/programs/m.tech.png",
      title: "M. Tech. (Food Technology)",
      link: "/programs/mtech-food-technology/about-programs"
    },
    {
      image: "/assets/images/programs/food_safety.jpg",
      title: "M. Tech. (Food Safety & Quality Management)",
      link: "/programs/mtech-foodsafety/about-programs"
    },
    {
      image: "/assets/images/programs/Working_Professionals.jpg",
      title: "M. Tech. (Food Technology) (Working Professionals)",
      link: "/programs/mtech-food-technology-working-professional/about-programs"
    },
    {
      image: "/assets/images/programs/P.hd.jpg",
      title: "Ph. D. (Food Technology)",
      link: "/programs/phd-food-technology/about-programs"
    }
  ];

  return (
    <section className="programs-section">
      <h2 className="title">Our Programs</h2>

      <div className="programs-slider">
        <div className="programs-track">
          {programData.concat(programData).map((program, index) => (
            <Link
              to={program.link}
              className="program-cards"
              key={index}
            >
              <img src={program.image} alt={program.title} title={program.title} />

              <div className="pg-card">
                <h3 className="pg-title">{program.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;