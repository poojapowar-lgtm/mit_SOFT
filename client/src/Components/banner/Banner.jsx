import React, { useEffect, useState } from "react";
import "./Banner.css";
import EnquiryForm from "../EnquiryForm";

const bannerData = [
  {
    image: "/assets/banner_gif/bnr1.jpg",
    title: (
      <>
        A Better Sound Through <br />
        Food Technology Research
      </>
    ),
  },
  {
    image: "/assets/banner_gif/bnr2.png",
    title: (
      <>
        Advancing Food Technology<br /> Through Knowledge & Innovation
      </>
    ),
  },
  {
    image: "/assets/banner_gif/bnr3.jpg",
    title: (
      <>
        Innovating for a Safer <br />and Sustainable Food Future
      </>
    ),
  },
  {
    image: "/assets/banner_gif/bnr4.jpg",
    title: (
      <>
        Turning Curiosity  <br /> into Food Innovation.
      </>
    ),
  },
  {
    image: "/assets/banner_gif/bnr5.png",
    title: (
      <>
        Exploring Science<br />  Behind Every Bite
      </>
    ),
  },
  {
    image: "/assets/banner_gif/bnr7.jpg",
    title: (
      <>
        Innovating Food.<br />  Inspiring the Future.
      </>
    ),
  },
  {
    image: "/assets/banner_gif/bnr6.jpg",
    title: (
      <>
        Growing Knowledge.   <br /> Transforming Food. Shaping Tomorrow.
      </>
    ),
  },
];

const Banner = () => {
  const [showForm, setShowForm] = useState(false);

  const [currentBanner, setCurrentBanner] = useState(0);


  /* PRELOAD ALL BANNER IMAGES */
  useEffect(() => {
    bannerData.forEach((banner) => {
      const img = new Image();
      img.src = banner.image;
    });
  }, []);


  /* CHANGE BANNER EVERY 5 SECONDS */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) =>
        (prev + 1) % bannerData.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="banner-container">
        {/* <div className="banner-image">
          <div className="banner-card">
            <h2 className="banner-title">
              A Better Sound Through <br /> Food Technology Research
            </h2>
          </div>
        </div> */}
        <div className="banner-image">

          {bannerData.map((banner, index) => (
            <img
              key={index}
              src={banner.image}
              alt={banner.title}
              className={`banner-background ${index === currentBanner ? "active" : ""
                }`}
            />
          ))}

          <div
            key={currentBanner}
            className="banner-card"
          >
            <h2 className="banner-title">
              {bannerData[currentBanner].title}
            </h2>
          </div>

        </div>
      </div>

      {/* Vertical Button */}
      {!showForm && (
        <button
          className="enquiry-btn"
          onClick={() => setShowForm(true)}
        >
          Enquiry
        </button>
      )}

      {/* Popup Form */}
      {showForm && (
        <div className="enquiry-modal">
          <div className="enquiry-content">
            <EnquiryForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;