import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Notices = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("admission");
    const [newsList, setNewsList] = useState([]);
    const [shouldScroll, setShouldScroll] = useState(false);

    const scrollRef = useRef(null);

    // Fetch data based on active tab
    const fetchNews = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5000/api/news?type=${activeTab}`
            );

            setNewsList(res.data);
        } catch (err) {
            console.error("Error fetching news", err);
            setNewsList([]);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [activeTab]);

    // Check if news content requires scrolling
    useEffect(() => {
        const container = scrollRef.current;

        if (!container) return;

        // Reset scroll position when tab/news changes
        container.scrollTop = 0;

        // Wait for DOM to render
        const checkOverflow = () => {
            setShouldScroll(
                container.scrollHeight > container.clientHeight
            );
        };

        checkOverflow();

        // Also check after a short delay in case content/images
        // need time to render
        const timeout = setTimeout(checkOverflow, 100);

        return () => clearTimeout(timeout);
    }, [newsList]);

    // Automatic seamless scrolling
    useEffect(() => {
        const container = scrollRef.current;

        if (!container || !shouldScroll) return;

        const scrollSpeed = 0.5;
        let animationFrame;

        const scrollStep = () => {
            container.scrollTop += scrollSpeed;

            // Because the list is duplicated,
            // reset after the first list has passed.
            if (container.scrollTop >= container.scrollHeight / 2) {
                container.scrollTop = 0;
            }

            animationFrame = requestAnimationFrame(scrollStep);
        };

        animationFrame = requestAnimationFrame(scrollStep);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [shouldScroll, newsList]);

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) {
            return {
                day: "--",
                month: "---",
            };
        }

        const date = new Date(dateString);

        const day = date
            .getDate()
            .toString()
            .padStart(2, "0");

        const month = date
            .toLocaleString("en-US", {
                month: "short",
            })
            .toUpperCase();

        return {
            day,
            month,
        };
    };

    // Routes
    const noticeRoute =
        activeTab === "admission"
            ? "/examinations/admission-notice"
            : "/examinations/exam-notice";

    // Render individual notice
    const renderNotice = (item, index, prefix) => {
        const { day, month } = formatDate(item.date);

        return (
            <div
                className="notice-card"
                key={`${prefix}-${item.id}-${index}`}
            >
                <div className="date-card">
                    <span className="day">{day}</span>
                    <span className="month">{month}</span>
                </div>

                <div className="notice-content">
                    <p className="notice-text">
                        {item.title}
                    </p>

                    {item.file_path && (
                        <a
                            href={`http://localhost:5000${item.file_path}`}
                            target="_blank"
                            rel="noreferrer"
                            className="notice-link"
                            aria-label={`View PDF: ${item.title}`}
                        >
                            {item.link_text || "View PDF"}
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
    };

    return (
        <div className="notices">

            {/* Header */}
            <div className="section-header">
                <h2 className="title">
                    News & Notices
                </h2>

                <div className="news-btn">
                    <button
                        className={`btn ${activeTab === "admission"
                            ? "active"
                            : ""
                            }`}
                        onClick={() =>
                            setActiveTab("admission")
                        }
                    >
                        Admission
                    </button>

                    <button
                        className={`btn ${activeTab === "examination"
                            ? "active"
                            : ""
                            }`}
                        onClick={() =>
                            setActiveTab("examination")
                        }
                    >
                        Examination
                    </button>
                </div>
            </div>

            {/* Notices */}
            <div
                className="notices-list"
                ref={scrollRef}
            >
                {newsList.length === 0 ? (
                    <p style={{ padding: "10px" }}>
                        No notices available
                    </p>
                ) : (
                    <>
                        {/* Original notices */}
                        {newsList.map((item, index) =>
                            renderNotice(
                                item,
                                index,
                                "original"
                            )
                        )}

                        {/* Duplicate ONLY when scrolling is required */}
                        {shouldScroll &&
                            newsList.map((item, index) =>
                                renderNotice(
                                    item,
                                    index,
                                    "duplicate"
                                )
                            )}
                    </>
                )}
            </div>

            {/* View All */}
            <div className="view-all-container">
                <button
                    className="btn"
                    onClick={() =>
                        navigate(noticeRoute)
                    }
                >
                    View All
                </button>
            </div>

        </div>
    );
};

export default Notices;