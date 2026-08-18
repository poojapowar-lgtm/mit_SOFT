import React from "react";
import { ImArrowDown } from "react-icons/im";
import "./internship.css";

const stepsData = [
    {
        title: "Step 1: Internship Planning as per Academic Schedule",
        points: [
            "As per the approved academic curriculum, final-year (Sem-VII) B.Tech.Food Technology students are permitted to undergo a 4-month industrial internship."
        ]
    },
    {
        title: "Step 2: Industry Identification & Internship Permission",
        points: [
            "The Training & Placement Cell formally communicates with respective food processing industries through official email to seek industrial internship permission for institute students."
        ]
    },
    {
        title: "Step 3: Confirmation from Industry",
        points: [
            "Internship slots, duration, domain, mentor details, and terms are finalized after receiving confirmation from the industry."
        ]
    },
    {
        title: "Step 4: Domain-Wise Student Preference Mapping",
        points: [
            "Students are allotted internships based on their domain-wise interests such as QA/QC, R&D, Production, Food Safety, and Regulatory Affairs."
        ]
    },
    {
        title: "Step 5: Student & Parent Undertaking",
        points: [
            "Prior to commencement, undertaking forms are collected from students and parents, confirming adherence to institute and industry guidelines."
        ]
    },
    {
        title: "Step 6: Commencement of Industrial Internship",
        points: [
            "Students are deputed to the allotted food industries to gain hands-on practical exposure and enhance their practical and professional skills."
        ]
    },
    {
        title: "Step 7: Monthly Progress Reporting",
        points: [
            "Students are required to submit monthly progress reports of their assigned work and learning outcomes during the internship period."
        ]
    },
    {
        title: "Step 8: Industry Mentorship & Monitoring",
        points: [
            "Each student works under the guidance of an industry mentor/supervisor, who monitors performance and skill development."
        ]
    },
    {
        title: "Step 9: Assessment Sheet Submission",
        points: [
            "At the completion of the internship, students submit an assessment sheet:",
            "50% evaluation by industry mentor/authority",
            "Remaining evaluation conducted internally as per academic norms"
        ]
    },
    {
        title: "Step 10: Industrial Internship Report Submission",
        points: [
            "Students submit a detailed 4-month industry internship report covering work profile, projects, skills gained, and learning outcomes."
        ]
    },
    {
        title: "Step 11: Internship Completion & Certification",
        points: [
            "Internship completion certificates are collected from the respective industries."
        ]
    },
    {
        title: "Step 12: Internship-to-Placement Opportunity",
        points: [
            "Based on performance and evaluation, some students receive immediate job offers from the same industry after internship completion."
        ]
    }
];

const Internship = () => {
    return (
        <div className="internship-section">
            <h2 className="innerpage-title">Internship Policy (Food Industry Internship Process)</h2>
            <div className="timeline">
                {stepsData.map((step, index) => (
                    <div key={index} className="timeline-item">

                        <div className="internship-card">
                            <h3 className="internship-title">{step.title}</h3>
                            <ul>
                                {step.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Arrow (not after last item) */}
                        {index !== stepsData.length - 1 && (
                            <div className="arrow">
                                <ImArrowDown />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Internship;