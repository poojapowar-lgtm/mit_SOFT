import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ menuItems }) => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item, index) => {
          const link = item.to || item.path; // support both and to
          const isActive = location.pathname.includes(link);

          return (
            <li key={index} className={isActive ? "active" : ""}>
              <Link to={link}>
                <span className="menu-arrow"></span>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
