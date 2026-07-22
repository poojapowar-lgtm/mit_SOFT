import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from "axios";
import "./Banner.css";

const EnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/enquiries",
        formData
      );
      alert(res.data);
      setFormData({ name: "", email: "", mobile: "", course: "" });
      onClose(); // ✅ close modal after submit
    } catch (err) {
      console.error(err);
      alert("Error submitting enquiry");
    }
  };

  return (
    <div className="enquiry-container">

      {/* ✅ ONLY CLOSE BUTTON */}
      <IoIosCloseCircleOutline
        className="close-btn"
        onClick={onClose}
      />

      <div className="enquiry-top">
        <h2 className="enquiry-title">Enquiry Form</h2>
      </div>

      <form onSubmit={handleSubmit} className="enquiry-form">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email ID *"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Phone Number *"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">Select Course *</option>
          <option value="B.Tech">B. Tech. (Food Technology)</option>
          <option value="Direct.2nd.year">Direct 2nd Year B. Tech.</option>
          <option value="M.Tech"> M. Tech. (Food Technology)</option>
          <option value="Food_Safety"> M. Tech. (Food Safety)</option>
          <option value="Working_Professional">M. Tech. Working Professional</option>
          <option value="Ph.D">Ph. D. (Food Technology)</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnquiryForm;