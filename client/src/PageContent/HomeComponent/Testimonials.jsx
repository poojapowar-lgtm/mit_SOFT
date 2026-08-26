import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./testimonials.css";


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const sliderRef = useRef(null);

  //  SCROLL
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  //  YOUTUBE EMBED FIX
  const getEmbedUrl = (url) => {
    if (!url) return null;

    const videoId =
      url.includes("v=")
        ? url.split("v=")[1]?.split("&")[0]
        : url.split("/").pop();

    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/testimonials")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="testimonials">

      <div className="testimonials-wrapper">
        <h2 className="title"> Faculty & Student Testimonials</h2>
        <div className="testimonials-slider">
          {/*  ADD REF HERE */}
          <div className="testimonials-track" ref={sliderRef}>
            {[...testimonials, ...testimonials].map((item, index) => (
              <div className="testimonials-card" key={index}>
                <div className="video-box">
                  {item.video_url ? (
                    <iframe
                      src={getEmbedUrl(item.video_url)}
                      title={item.alt_tag || item.title}
                      loading="lazy"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      controls
                      title={item.alt_tag || item.title}
                    >
                      <source
                        src={`http://localhost:5000${item.video_path}`}
                        type="video/mp4"
                      />
                    </video>
                  )}
                </div>

                {/* <div className="testimonials-info">
                  <h3 className="testimonials-name">
                    {item.title || "Video Testimonial"}
                  </h3>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;