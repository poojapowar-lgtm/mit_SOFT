import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const email = localStorage.getItem("email") || "admin@soft.com";

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/admin/dashboard":
        return "Dashboard";
      case "/admin/news":
        return "News Management";
      case "/admin/events":
        return "Events Management";
      case "/admin/enquiry":
        return "Student Enquiries";
      case "/admin/members":
        return "Members";
      case "/admin/student-speak":
        return "Student Speak";
      case "/admin/recruiters":
        return "Recruiters";
      case "/admin/faculty":
        return "Faculty Infromation";
      case "/admin/contact":
        return "Contact Form";
      default:
        return "Admin Panel";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div className="admin-topbar">

      <h2 className="page-title">{getPageTitle()}</h2>

      <div className="admin-info">
        <IoPersonCircleSharp />
        <span>{email}</span>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Topbar;