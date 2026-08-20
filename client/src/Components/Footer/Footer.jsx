import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";
import socialIconsData from "../socialIconsData";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/visitors/track`, {
          method: "POST",
        });
        const data = await res.json();
        if (data.success) {
          setVisitorCount(data.count);
        }
      } catch (err) {
        console.error("Error tracking visitor:", err);
      }
    };
    trackVisitor();
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-logos">
          <img
            className="ft-logo1"
            src="/assets/images/home/mit_logo.webp"
            alt="MIT-ADT University Logo"
            title="MIT-ADT University"
          />
          <div className="footer-brand">
            <img
              className="ft-logo2"
              src="/assets/images/home/SoFT_Logo.png"
              alt="MIT School of Food Technology Logo"
              title="MIT School of Food Technology"
            />
            <div className="footer-title">
              <h1 className="ft-logo-title">MIT-SoFT</h1>
              <p className="ft-logo-subtitle">School of Food Technology</p>
            </div>
          </div>

        </div>

        <div className="footer-social">
          <div className="footer-social-icons">
            {socialIconsData.map(({ url, network, bgColor }, index) => (
              <SocialIcon
                key={index}
                className="foot-social-icons"
                url={url}
                network={network}
                bgColor={bgColor}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-links-container">
        <div className="footer-links">
          <h4> Quick Links</h4>
          <ul>
            <li>
              <a href="/assets/docs/SoFT_3_Fold_Brochure_A_Grade.pdf" target="_blank" rel="noopener noreferrer">
                Download Brochure
              </a>
            </li>
            <li><a href="/admissions/annoucement">Admission Annoucement</a></li>
            <li><a href="/admissions/fee-structure">Fee Structure</a></li>
            <li><a href="/academics/academic-calendar">Academic Calendar</a></li>
            <li><a href="/contact">Connect with Us</a></li>
          </ul>
          <h4> Latest Happenings</h4>
          <ul>
            <li><a href="/campus-life/events">Events & Activities</a></li>

          </ul>


        </div>

        <div className="footer-links">
          <h4> Student Centric</h4>
          <ul>
            <li><a href="/campus-life/facilities">Facilities</a></li>
            <li><a href="/academics/lab-facilities">Laboratories</a></li>
            <li><a href="/academics/student-grievance">Student Grievance</a></li>
          </ul>

          <h4> Exams</h4>
          <ul>
            <li><a href="/examinations/examinations-schedule"> Exam Schedule </a></li>
            <li><a href="/campus-life/events"> Result Login </a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4> Alumni</h4>
          <ul>
            <li><a href="/alumni/alumni-report">Alumni Report</a></li>
            <li><a href="/placement/placed-students">Placed Students</a></li>
            <li><a href="/academics/achievements">Achievements</a></li>
          </ul>

          <h4> Other Links</h4>
          <ul>
            <li><a href="https://sdgs.un.org/">United Nations</a></li>
            <li><a href="https://www.fssai.gov.in/">Fssai</a></li>
            <li><a href="https://www.mofpi.gov.in/">mofpi</a></li>
            <li><a href="https://swayam.gov.in/nc_details/NPTEL">swayam</a></li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="footer-links">
          <h4> Address</h4>
          <ul>
            <li>
              MIT-ADT Campus, Rajbaugh, Solapur – Pune Highway Near Bharat
              Petrol Pump, Loni-Kalbhor, Maharashtra – 412201
            </li>
          </ul>
          <iframe
            className="map"
            title="Map location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8228655029525!2d74.02029187595625!3d18.49168107005449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9784f39a613%3A0x189ffd59802ec685!2sMIT%20School%20of%20Food%20Technology%2C%20MIT%20ADT%20University%2C%20Pune!5e0!3m2!1sen!2sin!4v1773135364412!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>


        </div>
      </div>

      {/* back to top button */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      {/* FOOTER BOTTOM */}
<div className="footer-bottom">
    <p className="bottom-text">
        MIT-SoFT Pune © 2025. All Rights Reserved. Designed & Developed by
        MIT-ADT Website Department.
    </p>

    <div className="visitor-box">
        <h4>Site Visitors:</h4>

        <p className="visitor-count">
            {visitorCount.toString().split("").join(" ")}
        </p>
    </div>
</div>
    </footer>
  );
};

export default Footer;
