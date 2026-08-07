import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const Alumni = () => {
  const location = useLocation();

  const menu = [
    { name: "Alumni Report", path: "alumni-report" },
    { name: "Alumni Startup", path: "alumni-startup" },
    { name: "Alumni Success Stories", path: "alumni-testimonials" },
  ];

  // Title mapping
  const titleMap = {
    "alumni-report": "Alumni Report",
    "alumni-testimonials": "Alumni Success Stories",
    "alumni-startup": "Alumni Startup"
  };

  // Get dynamic title based on route
  const getTitle = () => {
    const matchedKey = Object.keys(titleMap).find((key) =>
      location.pathname.includes(key),
    );

    return matchedKey ? titleMap[matchedKey] : "Alumni Report";
  };

  const title = getTitle();

  const bgImage = "/assets/images/home/inner_bnr.jpg";

  return (
    <>
      <InnerBanner bgImage={bgImage} title={title} />

      <div className="page-layout">
        <div className="page-content">
          <Outlet />
        </div>

        <Sidebar menuItems={menu} />
      </div>
    </>
  );
};

export default Alumni;
