import React, { useState } from "react";
import { IoIosArrowDropdownCircle  } from "react-icons/io";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

const data = [
    {
        title: "Which are the Under graduate and Post graduate degree programs offered by School of Food Technology and what are their durations for completion and Intake Capacities?",
        content: (
            <>
                <p>The School of Food Technology offers industry-aligned programs, state-of-the-art laboratories, pilot plants, strong industry linkages, and experiential learning, preparing students for diverse careers in food processing, safety, research and entrepreneurship.</p>
            </>
        ),
    },
    {
        title: "What courses are offered by the School of Food Technology?",
        content: (
            <>
                <p>The School offers B.Tech in Food Technology, M.Tech in Food Technology, M.Tech in Food Safety & Quality Management, M.Tech in Food Technology for Working Professionals and Ph.D. in Food Technology.</p>
            </>
        ),
    },
    {
        title: "What is the intake capacity for Food Technology programs?",
        content: (
            <>
                <p>The intake capacity is 120 students for B.Tech in Food Technology, 18 for M.Tech Food Technology, 6 for M.Tech Food Safety & Quality Management, 12 for M.Tech Food Technology for Working Professionals and as per vacancy for Ph.D. program.</p>
            </>
        ),
    },
    {
        title: "Which entrance exams are accepted for admission?",
        content: (
            <>
                <p>Admissions are based on MHT-CET, JEE, NEET, CUET, GATE, or PERA-CET scores, depending on the program applied for.</p>
            </>
        ),
    },
    {
        title: "Is Chemistry compulsory for B. Tech Food Technology admission?",
        content: (
            <>
                <p>Yes. Chemistry is a mandatory subject as per the eligibility criteria for B.Tech Food Technology.</p>
            </>
        ),
    },
    {
        title: "Are industry exposure and expert lectures part of the program?",
        content: (
            <>
                <p>Yes. Students benefit from visiting professors, expert lectures, industry collaborations, exposure visits and applied industry projects.</p>
            </>
        ),
    },
    {
        title: "Does the School support research and innovation?",
        content: (
            <>
                <p>
                    Yes. The School encourages research-oriented projects, innovation, entrepreneurship and offers postgraduate and Ph.D. programs in Food Technology.
                </p>
            </>
        ),
    },
    {
        title: "What training and placement support is available?",
        content: (
            <>
                <p>The School has a dedicated Training & Placement Cell. Students receive Industrial In-Plant Training (IPT), industry projects, expert lectures, and placement assistance through collaborations with food industries, MSMEs and public-sector organizations.</p>
            </>
        ),
    },
    {
        title: "What are the job prospects after Food Technology programs?",
        content: (
            <>
                <p>Graduates can pursue careers in food processing industries, quality assurance and control, research and development, food safety and regulatory organizations, public sector units, consultancy and entrepreneurship in food and agro-processing sectors.</p>
            </>
        ),
    }
];

    return (
        <div>
            <h2 className="innerpage-title">FAQ's</h2>

            {data.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className={`faq-header ${activeIndex === index ? "active" : ""
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <h4 className="accordion-title">{item.title}</h4>
                        <span className="faq-icon">
                            <IoIosArrowDropdownCircle  />
                        </span>
                    </div>

                    {activeIndex === index && (
                            <div className="accordion-content-wrapper">
                                <div className="accordion-content">
                                    {item.content}
                                </div>
                            </div>

                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;