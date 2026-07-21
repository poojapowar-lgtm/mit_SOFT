import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./StudentSpeak.css";

const StudentSpeak = () => {
    const [data, setData] = useState([]); // dynamic data
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Fetch from API
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/student-speak")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching student speak:", err);
            });
    }, []);

    const getItemsPerView = () => {
        return window.innerWidth <= 768 ? 1 : 3;
    };

    const nextSlide = () => {
        const itemsPerView = getItemsPerView();
        if (index + itemsPerView < data.length) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const itemsPerView = getItemsPerView();
    const visibleData = data.slice(index, index + itemsPerView);

    // Auto scroll
    useEffect(() => {
        if (isPaused || data.length === 0) return;

        const interval = setInterval(() => {
            const itemsPerView = window.innerWidth <= 768 ? 1 : 3;

            setIndex((prevIndex) => {
                if (prevIndex + itemsPerView >= data.length) {
                    return 0;
                }
                return prevIndex + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused, data]); // IMPORTANT

    return (
        <section className="student-speak">
            <h2 className="title">Student Speak</h2>

            <div className="slider-wrapper">
                <button className="nav-btn left" onClick={prevSlide}>
                    <FaArrowLeft />
                </button>

                <div
                    className="slider"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {visibleData.length > 0 ? (
                        visibleData.map((item) => (
                            <div className="speak-card" key={item.id}>
                                <img
                                    className="speak-img"
                                    src={`http://localhost:5000/uploads/${item.image}`}
                                    alt={item.name}
                                />
                                <div className="speak-content">
                                    <h3 className="dep-name" style={{ marginTop: "0px" }}>{item.name} {" "} ({item.year})</h3>
                                    <p >{item.message}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>

                <button className="nav-btn right" onClick={nextSlide}>
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export default StudentSpeak;


