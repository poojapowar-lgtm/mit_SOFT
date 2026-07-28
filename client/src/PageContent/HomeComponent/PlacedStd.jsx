import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./PlacedStd.css";

const PlacedStd = () => {
    const [students, setStudents] = useState([]);
    const [index, setIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);
    const trackRef = useRef();

    // Fetch Data
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/placed-students")
            .then((res) => setStudents(res.data))
            .catch(() => console.log("Error fetching data"));
    }, []);

    // Responsive cards count
    const getCardsToShow = () => {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        if (window.innerWidth <= 1200) return 3;
        return 3;
    };

    // Resize handler
    useEffect(() => {
        const handleResize = () => {
            setCardsToShow(getCardsToShow());
            setIndex(0);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto slide
    useEffect(() => {
        if (!students.length) return;

        const interval = setInterval(() => {
            const maxIndex = Math.ceil(students.length / cardsToShow) - 1;
            setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [students, cardsToShow]);

    // Move slider (FIXED)
    useEffect(() => {
        if (!trackRef.current) return;
        trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }, [index]);

    return (
        <div className="placed-section">
            <h2 className="title">Our Placed Students</h2>

            <div className="slider-wrapper">
                <div className="slider-track" ref={trackRef}>
                    {Array.from({
                        length: Math.ceil(students.length / cardsToShow),
                    }).map((_, slideIndex) => (
                        <div className="slide" key={slideIndex}>
                            {students
                                .slice(
                                    slideIndex * cardsToShow,
                                    slideIndex * cardsToShow + cardsToShow
                                )
                                .map((item, i) => (
                                    <div
                                        key={i}
                                        className="home-placed-std-card"
                                    >
                                        <div className="card-overlay">
                                            <div className="card-left">
                                                <img
                                                    src={`http://localhost:5000/uploads/${item.photo}`}
                                                    alt={item.name}
                                                />
                                            </div>

                                            <div className="card-right">
                                                <h3>{item.name}</h3>
                                                <p>{item.discipline}</p>
                                                <p>{item.organization}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>


            </div>
            {/* Dots */}
            <div className="slider-dots">
                {Array.from({
                    length: Math.ceil(students.length / cardsToShow),
                }).map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default PlacedStd;