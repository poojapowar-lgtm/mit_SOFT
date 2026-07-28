import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const Research = () => {
  const location = useLocation();

  const menu = [
    { name: "School Research Committee", path: "board-of-research" },
    { name: "Research Paper Publication", path: "research-paper-publication" },
    { name: "PHD Admissions", path: "phd-admissions" },
    { name: "Pentant & Publications", path: "pentant-publications" },
    { name: "Funded Projects", path: "funded-projects" },
    { name: "Consultancy & Training", path: "consultancy-training" },
    // { name: "Student Research", path: "student-research" },
  ];

  // Title mapping
  const titleMap = {
    "board-of-research": "Board of Research",
    "research-paper-publication": "Research Paper Publication",
    "phd-admissions": "PHD Admissions",
    "pentant-publications": "Pentant & Publications",
    "funded-projects": "Funded Projects",
    "consultancy-training": "Consultancy & Training",
    // "student-research": "Student Research",
  };

  // Get dynamic title based on route
  const getTitle = () => {
    const matchedKey = Object.keys(titleMap).find((key) =>
      location.pathname.includes(key),
    );

    return matchedKey ? titleMap[matchedKey] : "Board of Research";
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

export default Research;
