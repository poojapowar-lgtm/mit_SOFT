import React from "react";
import "./global.css";

const Global = () => {
  const globalData = [
    {
      icon: "/assets/images/icons/hunger.png",
      title: "Zero Hunger",
    },
    {
      icon: "/assets/images/icons/heart.png",
      title: "Good health & well being",
    },
    {
      icon: "/assets/images/icons/global-warming.png",
      title: "Climate Change",
    },
    {
      icon: "/assets/images/icons/responsible-consumption.png",
      title: "Responsible Consumption & Production",
    },
     {
      icon: "/assets/images/icons/ecosystem.png",
      title: "Life on Land",
    },
  ];

  return (
    <section className="global-section">
      <h2 className="title">Advancing Global Sustainability Through Food Technology Education & Research</h2>

      <div className="global-container">
        {globalData.map((item, index) => (
          <div className="global-card" key={index}>
            <div className="global-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <h4 className="global-title">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Global;