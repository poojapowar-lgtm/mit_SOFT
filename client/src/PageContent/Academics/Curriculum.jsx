import React, { useState } from "react";
import "./pg_outcomes.css";

const Curriculum = () => {
    const [activeTab, setActiveTab] = useState("2019");

    //  Tabs with file attached
    const tabs = [
        {
            id: "2024",
            label: "A.Y. 2024-25",
            file: "/docs/2021.pdf",
        },
        {
            id: "2025",
            label: "A.Y. 2025-26",
            file: "/docs/2022.pdf",
        },
    ];

    //  Get active tab data
    const activeData = tabs.find((tab) => tab.id === activeTab);

    return (
        <div>
            <h2 className="innerpage-title">Curriculum Feedback</h2>

            <div className="top-bar">

                {/* Left Buttons */}
                <div className="tab-buttons">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`btn ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Right File Button (Dynamic) */}
                <div className="file-btn-wrapper">
                    <p style={{ textAlign: "center" }}><strong >click below for:</strong></p>
                    {activeData && (
                        <a
                            href={activeData.file}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="file-btn">
                                Curriculum feedback Report {activeData.label}
                            </button>
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Curriculum;