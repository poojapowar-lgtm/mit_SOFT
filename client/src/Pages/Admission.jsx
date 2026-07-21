import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const Admission = () => {
    const location = useLocation();

    const menu = [
        { name: "Amission Annoucement", path: "annoucement" },
        { name: "Amission Schedule", path: "schedule" },
        { name: "Eligibility", path: "eligibility" },
        { name: "Admission Procedure", path: "procedure" },
        // { name: "Entrance Exams Updates", path: "entrance" },
        { name: "Fee Sturcture", path: "fee-structure" },
        { name: "Scholarship Details", path: "scholarship" },
        { name: "FAQ's", path: "faq" },
        // { name: "Merit/Selection List", path: "merit-list" },
        // { name: "Counselling & seat allotment", path: "counselling" },
        // { name: "Spot admissions/vacancy notices", path: "vacancy" },
        // { name: "Cancellation and withdrawal notices", path: "withdrawal" },
        // { name: "How to Apply", path: "apply" },
    ];

    // Title mapping
    const titleMap = {
        "annoucement": "Amission Annoucement",
        "schedule": "Amission Schedule",
        "eligibility": "Eligibility",
        "procedure": "Amission Procedure",
        // "entrance": "Entrance Exams Updates",
        "fee-structure": "Fee Structure",
        "scholarship": "Scholarship Details",
        "faq": "FAQ's",

        // "merit-list": "Merit/Selection List",
        // "counselling": "Counselling & seat allotment",
        // "vacancy": "Spot admissions/vacancy notices",
        // "withdrawal": "Cancellation and withdrawal notices",
        // "apply": "How to Apply",

    };

    // Get dynamic title based on route
    const getTitle = () => {
        const matchedKey = Object.keys(titleMap).find((key) =>
            location.pathname.includes(key),
        );

        return matchedKey ? titleMap[matchedKey] : "Amission Procedure";
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

export default Admission;
