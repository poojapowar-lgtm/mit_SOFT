import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Notices = () => {

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("admission");
    const [newsList, setNewsList] = useState([]);
    const scrollRef = useRef(null);


    // Fetch data based on tab
    const fetchNews = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5000/api/news?type=${activeTab}`
            );
            setNewsList(res.data);
        } catch (err) {
            console.error("Error fetching news", err);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [activeTab]);

 useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    let scrollSpeed = 0.5; // adjust speed
    let animationFrame;

    const scrollStep = () => {
        if (!container) return;

        // Scroll upward
        container.scrollTop += scrollSpeed;

        // If reached bottom → jump to top
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
            container.scrollTop = 0;
        }

        animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrame);
}, []);

    // Format date (optional)
    const formatDate = (dateString) => {
        if (!dateString) return { day: "--", month: "---" };

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = date
            .toLocaleString("en-US", { month: "short" })
            .toUpperCase();

        return { day, month };
    };

    // routes
    const noticeRoute =
        activeTab === "admission"
            ? "/examinations/admission-notice"
            : "/examinations/exam-notice";


    return (
        <div className="notices">
            <div className="section-header">
                <h2 className="title">News & Notices</h2>

                <div className="news-btn">
                    <button
                        className={`btn ${activeTab === "admission" ? "active" : ""}`}
                        onClick={() => setActiveTab("admission")}
                    >
                        Admission
                    </button>

                    <button
                        className={`btn ${activeTab === "examination" ? "active" : ""}`}
                        onClick={() => setActiveTab("examination")}
                    >
                        Examination
                    </button>
                </div>
            </div>
            <div className="notices-list" ref={scrollRef}>
                {newsList.length === 0 ? (
                    <p style={{ padding: "10px" }}>No notices available</p>
                ) : (
                    newsList.map((item) => {
                        const { day, month } = formatDate(item.date);

                        return (
                            <div className="notice-card" key={item.id}>
                                <div className="date-card">
                                    <span className="day">{day}</span>
                                    <span className="month">{month}</span>
                                </div>

                                <div className="notice-content">
                                    <p className="notice-text">{item.title}</p>

                                    {item.file_path && (
                                        <a
                                            href={`http://localhost:5000${item.file_path}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="notice-link"
                                        >
                                            {item.link_text || "View File"}
                                        </a>
                                    )}

                                    {!item.file_path && item.link_url && (
                                        <a
                                            href={item.link_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="notice-link"
                                        >
                                            {item.link_text || "Open Link"}
                                        </a>
                                    )}
                                </div>


                            </div>
                        );
                    })
                )}
            </div>
            <div className="view-all-container">
                <button className="btn" onClick={() => navigate(noticeRoute)}>
                    View All
                </button>
            </div>
        </div>
    );
};

export default Notices;