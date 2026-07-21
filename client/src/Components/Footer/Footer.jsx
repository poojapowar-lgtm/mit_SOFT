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

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            alt="Logo 1"
          />
          <div className="footer-brand">
            <img
              className="ft-logo2"
              src="/assets/images/home/SoFT_Logo.png"
              alt="Logo 2"
            />
            <div className="footer-title">
              <h1 className="ft-logo-title">MIT-SoFT</h1>
              <p className="ft-logo-subtitle">School of Food Techonolgy</p>
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
            <li>Download Brochure</li>
            <li>Admission co-ordinators</li>
            <li>Fee Structure</li>
          </ul>
          <h4> Latest Happenings</h4>
          <ul>
            <li>Events & Activities</li>
          </ul>

          <h4> Alumni</h4>
          <ul>
            <li>Alumni Committee</li>
            <li>Achievements</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4> Student Centric</h4>
          <ul>
            <li>Bus Routes</li>
            <li>Hostel</li>
            <li>Cafeteria</li>
            <li>Alumni</li>
            <li>Student Grievance</li>
          </ul>

          <h4> Exams</h4>
          <ul>
            <li> Exam Schedule </li>
            <li> Result Login </li>
            <li>Convocations</li>
            <li>Student Services</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4> Contact Us</h4>
          <ul>
            <li>Admission Enquiry</li>
            <li>Admin Office</li>
            <li>Enquire Now</li>
            <li>Plan your Campus Visit</li>
          </ul>

          <h4> Other Links</h4>
          <ul>
            <li>Academic Calendar</li>
            <li>Download Brochure</li>
            <li>Student ERP Connect</li>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8228655029525!2d74.02029187595625!3d18.49168107005449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9784f39a613%3A0x189ffd59802ec685!2sMIT%20School%20of%20Food%20Technology%2C%20MIT%20ADT%20University%2C%20Pune!5e0!3m2!1sen!2sin!4v1773135364412!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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
      </div>
    </footer>
  );
};

export default Footer;
