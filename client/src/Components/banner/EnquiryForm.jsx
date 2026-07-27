import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
import "./Banner.css";

const EnquiryForm = ({ onClose }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    captchaAnswer: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/enquiry",
        formData
      );
      alert(res.data);
      setFormData({ name: "", email: "", mobile: "", course: "" });
      onClose(); // 
      // close modal after submit
    } catch (err) {
      console.error(err);
      alert("Error submitting enquiry");
    }
  };

  return (
    <div className="enquiry-container">

      {/* 
      ONLY CLOSE BUTTON */}
      <IoMdCloseCircle
        className="close-btn"
        style={{ color: "white" }}
        onClick={onClose}
      />

      <div className="enquiry-top">
        <h2 className="enquiry-title">Quick Enquiry</h2>
        <h4 className="enquiry-subtitle">Get information about our courses</h4>
      </div>

      <form onSubmit={handleSubmit} className="enquiry-form">
        <label>Name *</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email *</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number *</label>
        <input
          type="text"
          name="mobile"
          placeholder="Enter 10-digit mobile number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <label>Course *</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">---Select Course---</option>
          <option value="B. Tech. (Food Technology)">B. Tech. (Food Technology)</option>
          <option value="Direct 2nd Year B. Tech">Direct 2nd Year B. Tech.</option>
          <option value="M. Tech. (Food Technology)"> M. Tech. (Food Technology)</option>
          <option value=" M. Tech. (Food Safety)"> M. Tech. (Food Safety)</option>
          <option value="M. Tech. Working Professional">M. Tech. Working Professional</option>
          <option value="Ph. D. (Food Technology)">Ph. D. (Food Technology)</option>
        </select>



        <button type="submit" className="btn" style={{ display: "block", width: "100%", margin: "8px 0" }}>Submit</button>
      </form>
    </div>
  );
};

export default EnquiryForm;