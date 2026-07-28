import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";


const PlacementCell = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const Placementdata = [
        {
            title: "1. Identification of Student Interest & Domain Mapping",
            content: (
                <ul className="page-list">
                    <li>
                        Collect domain-wise industry placement preferences of final-year
                        B.Tech. & M.Tech. Food Technology students (e.g., Fruit &
                        Vegetables Processing, Bakery and Confectionary Industry, Dairy
                        Processing Industry, Spice Industry, Meat & Poultry Processing,
                        Wine Processing Industry, Carbonated Beverages industry, Edible
                        oil Processing Industry, Rice mills etc.).
                    </li>
                    <li>
                        Analyze student interest to align industry requirements with
                        student career goals.
                    </li>
                </ul>
            )
        },
        {
            title: "2. Recruiter Identification & Job Description Collection",
            content: (
                <>
                    <ul className="page-list">
                        <li>
                            Identify and approach suitable recruiters based on student
                            domain preferences.
                        </li>
                        <li>Collect complete recruiter details including:</li>
                    </ul>
                    <ol>
                        <li>Organization profile</li>
                        <li>Job Title / Designation</li>
                        <li>Detailed Job Description (JD)</li>
                        <li>Eligibility criteria</li>
                        <li>CTC / stipend</li>
                        <li>Location and joining details</li>
                    </ol>
                </>
            )
        },
        {
            title: "3. Placement Drive Approval & Scheduling",
            content: (
                <ul className="page-list">
                    <li>Obtain approval from competent authorities.</li>
                    <li>
                        Finalize date, time, venue, and mode (online/offline).
                    </li>
                    <li>
                        Confirm participation with the recruiting organization.
                    </li>
                </ul>
            )
        },
        {
            title: "4. Upload of Drive Details on Calyx Pod AI Platform",
            content: (
                <>
                    <ul className="page-list">
                        <li>
                            Upload complete placement drive details on the Calyxy Pod AI
                            platform, where all placement-preference students are registered.
                        </li>
                        <li>Ensure the platform includes:</li>
                    </ul>
                    <ol>
                        <li>Company profile</li>
                        <li>Job role & JD</li>
                        <li>Eligibility criteria</li>
                        <li>Drive schedule</li>
                        <li>Registration deadline</li>
                    </ol>
                    <ul className="page-list">
                        <li>
                            Enable student registration and track applications digitally.
                        </li>
                    </ul>
                </>
            )
        },
        {
            title: "5. Student Notification & Registration",
            content: (
                <ul className="page-list">
                    <li>
                        Notify eligible students through official channels and the Calyxy
                        Pod AI platform.
                    </li>
                    <li>
                        Verify student eligibility and confirm participation.
                    </li>
                </ul>
            )
        },
        {
            title: "6. Pre-Placement Preparation Activities",
            content: (
                <>
                    <ul className="page-list">
                        <li>Conduct Pre-Placement Talk (PPT) by the recruiter.</li>
                        <li>Organize preparatory sessions:</li>
                    </ul>
                    <ul>
                        <li>Resume writing (Food Industry specific)</li>
                        <li>Group Discussion & Interview Skills</li>
                        <li>Behavioral & Soft Skills Training</li>
                        <li>
                            Technical orientation (GMP, HACCP, FSSAI, QA/QC, R & D basics)
                        </li>
                    </ul>
                </>
            )
        },
        {
            title: "7. Shortlisting of Candidates",
            content: (
                <ul className="page-list">
                    <li>
                        Share registered student profiles with the recruiter.
                    </li>
                    <li>
                        Publish shortlisted candidate list through official notice and
                        platform.
                    </li>
                </ul>
            )
        },
        {
            title: "8. Placement Drive Execution",
            content: (
                <>
                    <ul className="page-list">
                        <li>Coordinate and conduct selection rounds:</li>
                    </ul>
                    <ol>
                        <li>Aptitude / Technical Test</li>
                        <li>Group Discussion</li>
                        <li>Technical Interview</li>
                        <li>HR Interview</li>
                    </ol>
                    <ul className="page-list">
                        <li>
                            Provide logistical and administrative support to recruiters.
                        </li>
                    </ul>
                </>
            )
        },
        {
            title: "9. Selection & Offer Communication",
            content: (
                <ul className="page-list">
                    <li>Receive selection results from the recruiter.</li>
                    <li>
                        Communicate final selection, offer details, and joining
                        information to students.
                    </li>
                </ul>
            )
        },
        {
            title: "10. Documentation & Reporting",
            content: (
                <>
                    <ul className="page-list">
                        <li>Maintain structured records of:</li>
                    </ul>
                    <ul>
                        <li>Registered vs. selected students</li>
                        <li>Offer letters and CTC details</li>
                        <li>Recruiter and student feedback</li>
                    </ul>
                    <ul className="page-list">
                        <li>
                            Submit consolidated placement report to the institute.
                        </li>
                    </ul>
                </>
            )
        },
        {
            title: "11. Post-Placement Support & Feedback",
            content: (
                <ul className="page-list">
                    <li>
                        Support students during joining and onboarding.
                    </li>
                    <li>
                        Collect feedback from recruiters and placed students for
                        continuous improvement.
                    </li>
                </ul>
            )
        }
    ];

    const CoOrdinator = [
        {
            name: "Mr. Rupesh J. Saindane",
            title: "Training and Placement Officer",
            desgination: "School of Food Technology, MIT ADT University, Pune",
        },
    ]
    return (
        <div className="placement-container">

            <h2 className="innerpage-title">Placement Cell</h2>
            <ul className="page-list">
                <li>A dedicated Training & Placement Cell facilitates internships and final placements through on-campus and virtual recruitment drives.</li>
                <li>Students are trained through industry interaction, resume building, aptitude tests, soft-skill development, and interview preparation through the SCIL.</li>
                <li>Placement opportunities are provided in Production, Quality Assurance/Quality Control, R&D, Food Safety, Regulatory Affairs, Certification, Supply Chain, and NAPS programs.</li>
                <li>The School also supports international placements, industrial training, and internship-to-placement pathways.</li>
            </ul>


            <h2 className="innerpage-title">Placement Drive Conduction Process/SOP</h2>
            <div className="placement-grid">

                {Placementdata.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <div
                            className={`faq-header ${activeIndex === index ? "active" : ""
                                }`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h4 className="accordion-title">{item.title}</h4>
                            <span className="faq-icon">
                                <IoIosArrowDropdownCircle />
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

            <h2 className="innerpage-title">Placement Co-Ordinator</h2>
            <div className="board-body-container">
                {CoOrdinator.map((item, index) => (
                    <div className="board-card" key={index}>
                        <h3 className="board-name">{item.name}</h3>
                        <p style={{ margin: "5px 0" }}><strong>{item.title}</strong></p>
                        <p className="board-desg">{item.desgination}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PlacementCell;