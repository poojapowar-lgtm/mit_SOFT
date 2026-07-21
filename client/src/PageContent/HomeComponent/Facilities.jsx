import React, { useEffect, useState } from "react";
import "./facilities.css";
import { FaArrowRight } from "react-icons/fa";

const Facilities = () => {
  const images = [
    {
      src: "/assets/images/facilites/fac4.jpg",
      title: "World Food Day Celebration",
      text: "World Food Day celebration is one of the remarkable activities of MIT SoFT to contribute in nation building with organization of seminar and competitions.",
    },
    {
      src: "/assets/images/facilites/Industrial_Visit.jpg",
      title: "Industrial Visit",
      text: "As a part of degree program and an exposure towards the industrial world students at MIT SoFT visits to food.",
    },
    {
      src: "/assets/images/facilites/Seminars.jpg",
      title: "Seminars & Group Discussion",
      text: "It is not enough to be knowledge along with that students should have abilities to express it out. Seminars and discussions are organized keeping the same objective in mind.",
    },
    {
      src: "/assets/images/facilites/Learning.jpg",
      title: "Practical Based Project Learning",
      text: "MIT School of Food Technology is a effectual partial applied aspect for third year B. Tech (Food Technology) Students. It is a real-world challenges and problems through application of laboratory learned practical's.",
    },
    {
      src: "/assets/images/facilites/fac3.jpg",
      title: "Placement",
      text: "placement cell",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="facilities-section">
      <h2 className="title">Our Facilities</h2>

      <div className="facility-image-container">
        <img src={images[currentIndex].src} alt={images[currentIndex].title} />

        <div className="facility-overlay">
          <div className="facility-title-box">
            <h3 className="facility-title">{images[currentIndex].title}</h3>
            <FaArrowRight className="arrow-icon" />
          </div>

          <p className="facility-text">{images[currentIndex].text}</p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
