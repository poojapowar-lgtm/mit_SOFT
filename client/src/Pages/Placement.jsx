import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const Placement = () => {
    const location = useLocation();

    const menu = [
        { name: "Placement Cell", path: "placement-cell" },
        { name: "Recruiters", path: "recruiters" },
        { name: "Placed Students", path: "placed-students" },
        { name: "Placement Statistics", path: "placement-statistics" },
        { name: "Skill Development Programs", path: "skill-development" },
        { name: "MOU's", path: "mou" },
        { name: "Internship Policy", path: "internship-policy" },
    ];

    // Title mapping
    const titleMap = {
        "placement-cell": "Placement Cell",
        "recruiters": "Recruiters",
        "placed-students": "Placed Students",
        "placement-statistics": "Placement Statistics",
        "skill-development": "Skill Development Programs",
        "mou": "MOU's",
        "internship-policy": "Internship Policy",
    };

    // Get dynamic title based on route
    const getTitle = () => {
        const matchedKey = Object.keys(titleMap).find((key) =>
            location.pathname.includes(key),
        );

        return matchedKey ? titleMap[matchedKey] : "Placement Cell";
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

export default Placement;
