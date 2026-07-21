import React, { useState } from "react";
import "./alumni.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const AlumniStory = () => {
    const [index, setIndex] = useState(0);

    const cards = [
        {
            id: 1,
            image: "https://via.placeholder.com/300x200",
            title: "Pooja Eranna (2016-20)",
            desc: "As a proud alumnus of MIT ADT University, Pune, I had the privilege of completing both my B.Tech and M.Tech degrees in a highly inspiring academic environment. The university provided excellent infrastructure, advanced laboratories, and strong industry oriented learning."
        },
        {
            id: 2,
            image: "https://via.placeholder.com/300x200",
            title: "Rupesh Kale (2008-12)",
            desc: "My time at the MIT Food Technology, was a transformative phase where theory met practical application. From mastering core concepts in food safety, quality assurance and processing technologies to engaging in lab-scale trials and industrial exposure visits, the learning environment was industry-oriented."
        },
        {
            id: 3,
            image: "https://via.placeholder.com/300x200",
            title: "Tejas Dongare (2016-20)",
            desc: "My time at MIT was one of the most defining phases of my life. It shaped not only my professional direction, but also my personality, my values, and the friendships I carry with me even today. I say this without hesitation- MIT gave me an environment that genuinely helped me grow into the person I am."
        },
        {
            id: 4,
            image: "https://via.placeholder.com/300x200",
            title: "Sneha Joshi",
            desc: "UI/UX Designer"
        },
        {
            id: 5,
            image: "https://via.placeholder.com/300x200",
            title: "Amit Shah",
            desc: "Product Manager"
        }
    ];

    const nextSlide = () => {
        if (index < cards.length - 3) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <>
            <div className="alumni-container">
                <h2 className="innerpage-title">Alumni Report</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lorem ipsum, non tincidunt nibh efficitur sed. Nunc ac mattis quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lorem ipsum, non tincidunt nibh efficitur sed. Nunc ac mattis quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lorem ipsum, non tincidunt nibh efficitur sed. Nunc ac mattis quam.</p>
                <div className="carousel-wrapper">
                    <button className="nav-btn" onClick={prevSlide} disabled={index === 0}>
                        <FaArrowLeft />
                    </button>

                    <div className="carousel">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${index * 33.33}%)`
                            }}
                        >
                            {cards.map((card) => (
                                <div className="alumni-card" key={card.id}>
                                    <img src={card.image} alt="" />
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="nav-btn" onClick={nextSlide} disabled={index >= cards.length - 3}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </>

    );
};

export default AlumniStory;