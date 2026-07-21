import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const Programs = () => {
  const location = useLocation();
  const { programId } = useParams();

  // Sidebar Menu (dynamic)
  const menu = [
    { name: "About Programs", to: `/programs/${programId}/about-programs` },
    { name: "Future Scope", to: `/programs/${programId}/future-scope` },
    { name: "Eligibility", to: `/programs/${programId}/eligibility` },
    { name: "Syllabus & Notes", to: `/programs/${programId}/syllabus-notes` },
    // { name: "Admission Procedure", to: `/programs/${programId}/admission-procedure` },
    // { name: "Facilities", to: `/programs/${programId}/facilities` },
    // { name: "Placements", to: `/programs/${programId}/placements` },
    // { name: "FAQ", to: `/programs/${programId}/faq` },
  ];

  // Page titles
  const titleMap = {
    "about-programs": "About Programs",
    "future-scope": "Future Scope",
    eligibility: "Eligibility",
    "syllabus-notes": "Syllabus & Notes",
    // facilities: "Facilities",
    // placements: "Placements",
    // faq: "FAQ",
  };

  // Dynamic Banner Title
  const getTitle = () => {
    const matchedKey = Object.keys(titleMap).find((key) =>
      location.pathname.includes(key),
    );

    return matchedKey ? titleMap[matchedKey] : "Programs";
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

export default Programs;
