import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const AboutUs = () => {
  const location = useLocation();

  const menu = [
    { name: "About MIT-ADT", path: "about-mit" },
    { name: "Leadership Message", path: "leadership-message" },
    { name: "About SoFT", path: "about-soft" },
    { name: "Principal Message", path: "principal-message" },
    { name: "Board of Management", path: "board-of-management" },
    { name: "Governing Body", path: "governing-body" },
  ];

  // Title mapping
  const titleMap = {
    "about-mit": "About MIT-ADT",
    "leadership-message": "Leadership Message",
    "about-soft": "About SoFT",
    "principal-message": "Principal Message",
    "board-of-management": "Board of Management",
    "governing-body": "Governing Body",
  };

  // Get dynamic title based on route
  const getTitle = () => {
    const matchedKey = Object.keys(titleMap).find((key) =>
      location.pathname.includes(key),
    );

    return matchedKey ? titleMap[matchedKey] : "About MIT-ADT";
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

export default AboutUs;
