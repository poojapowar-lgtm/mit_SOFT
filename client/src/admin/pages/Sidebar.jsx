import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "News & Notices", path: "/admin/news" },
    { name: "Events", path: "/admin/events" },
    { name: "Enquiry Form", path: "/admin/enquiry" },
    { name: "Board Members", path: "/admin/members" },
    { name: "Student Speak", path: "/admin/student-speak" },
    { name: "Recruiters", path: "/admin/recruiters" },
    { name: "Faculty Information", path: "/admin/faculty" },
    { name: "Research Data", path: "/admin/research" },
    { name: "MOU Data", path: "/admin/mou" },
    { name: "Placed Students", path: "/admin/placed-students" },
    { name: "Alumni Startup", path: "/admin/alumni-startup" },
    { name: "Contact Form", path: "/admin/contact" },
  ];

  return (
    <div className="admin-sidebar">
      <h2 className="admin-logo">
        <MdAdminPanelSettings />
        Admin</h2>

      <ul>
        {menu.map((item) => (
          <li
            key={item.path}
            onClick={() => navigate(item.path)}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;