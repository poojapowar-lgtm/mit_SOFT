import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const FAQdata = [
        {
            title: "Which are the Under graduate and Post graduate degree programs offered by School of Food Technology and what are their durations for completion and Intake Capacities?",
            content: "The School of Food Technology offers industry-aligned programs, state-of-the-art laboratories, pilot plants, strong industry linkages, and experiential learning, preparing students for diverse careers in food processing, safety, research and entrepreneurship.",
        },
        {
            title: "What courses are offered by the School of Food Technology?",
            content: "The School offers B.Tech in Food Technology, M.Tech in Food Technology, M.Tech in Food Safety & Quality Management, M.Tech in Food Technology for Working Professionals and Ph.D. in Food Technology.",
        },
        {
            title: "What is the intake capacity for Food Technology programs?",
            content: "The intake capacity is 120 students for B.Tech in Food Technology, 18 for M.Tech Food Technology, 6 for M.Tech Food Safety & Quality Management, 12 for M.Tech Food Technology for Working Professionals and as per vacancy for Ph.D. program.",
        },
        {
            title: "Which entrance exams are accepted for admission?",
            content: "Admissions are based on MHT-CET, JEE, NEET, CUET, GATE, or PERA-CET scores, depending on the program applied for.",
        },
        {
            title: "Is Chemistry compulsory for B. Tech Food Technology admission?",
            content: "Yes. Chemistry is a mandatory subject as per the eligibility criteria for B.Tech Food Technology.",
        },
        {
            title: "Are industry exposure and expert lectures part of the program?",
            content: "Yes. Students benefit from visiting professors, expert lectures, industry collaborations, exposure visits and applied industry projects.",
        },
        {
            title: "Does the School support research and innovation?",
            content: "Yes. The School encourages research-oriented projects, innovation, entrepreneurship and offers postgraduate and Ph.D. programs in Food Technology.",
        },
        {
            title: "What training and placement support is available?",
            content: "The School has a dedicated Training & Placement Cell. Students receive Industrial In-Plant TrainingIPT), industry projects, expert lectures, and placement assistance through collaborations with food industries, MSMEs and public-sector organizations.",
        },
        {
            title: "What are the job prospects after Food Technology programs?",
            content: "Graduates can pursue careers in food processing industries, quality assurance and control, research and development, food safety and regulatory organizations, public sector units, consultancy and entrepreneurship in food and agro-processing sectors.",
        }
    ];

    return (
        <div>
            <h2 className="innerpage-title">FAQ's</h2>

            <div className="accordion-container">
                {FAQdata.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <div
                            className={`faq-header ${activeIndex === index ? "active" : ""
                                }`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h4 className="accordion-title">{item.title}</h4>
                            <span className="faq-icon">
                                <RiArrowDownSLine />
                            </span>
                        </div>

                        {activeIndex === index && (
                            <div className="accordion-content-wrapper">
                                <div className="accordion-content">
                                    <p>{item.content}</p>
                                </div>
                            </div>

                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;