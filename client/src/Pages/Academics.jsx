import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const Academics = () => {
    const location = useLocation();

    const menu = [
        { name: "Programme Outcomes", path: "programme-outcomes" },
        { name: "Academic Calendar", path: "academic-calendar" },
        { name: "Faculty Information", path: "faculty-information" },
        { name: "Value Added Courses", path: "vac" },
        { name: "MOU’s", path: "mou" },
        { name: "NEP-2020", path: "nep-2020" },
        { name: "VAP-2022", path: "vap-2022" },
        { name: "Curriculum Feedback", path: "curriculum-feedback" },
        { name: "Student Grievance", path: "student-grievance" },
        { name: "Laboratory Facilities", path: "lab-facilities" },
        { name: "Achievements", path: "achievements" },

    ];

    // Title mapping
    const titleMap = {
        "academic-calendar": "Academic Calendar",
        "programme-outcomes": "Programme Outcomes",
        "faculty-information": "Faculty Information",
        "vac": "Value Added Courses",
        "mou": "MOU’s",
        "nep-2020": "NEP-2020",
        "vap-2022": "VAP-2022",
        "curriculum-feedback": "Curriculum Feedback",
        "student-grievance": "Student Grievance",
        "lab-facilities": "Laboratory Facilities",
        "achievements": "Achievements",
    };

    // Get dynamic title based on route
    const getTitle = () => {
        const matchedKey = Object.keys(titleMap).find((key) =>
            location.pathname.includes(key),
        );

        return matchedKey ? titleMap[matchedKey] : "Academics Report";
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

export default Academics;
