import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const LifeAtCampus = () => {
  const location = useLocation();

  const menu = [
    { name: "Events", path: "events" }, ,
    { name: "Facilities", path: "facilities" },
    { name: "Sports", path: "sports" },
  ];

  // Title mapping
  const titleMap = {
    "events": "Events",
    "facilities": "Facilities",
    "sports": "Sports"
  };

  // Get dynamic title based on route
  const getTitle = () => {
    const matchedKey = Object.keys(titleMap).find((key) =>
      location.pathname.includes(key),
    );

    return matchedKey ? titleMap[matchedKey] : "Activities";
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

export default LifeAtCampus;
