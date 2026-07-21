import React, { useState } from "react";
import "./Banner.css";
import EnquiryForm from "./EnquiryForm";

const Banner = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="banner-container">
        <div className="banner-image">
          <div className="banner-card">
            <h2 className="banner-title">
              A Better Sound Through <br /> Food Technology Research
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
            {/* ❌ REMOVED CLOSE BUTTON FROM HERE */}

            <EnquiryForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;