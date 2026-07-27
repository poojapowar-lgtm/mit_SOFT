import React, { useState } from "react";
import "./pg_outcomes.css";

const PgOutcomes = () => {
    const [activeTab, setActiveTab] = useState("outcomes");

    // Outcomes Data (ARRAY)
    const outcomesData = [
        {
            list: [
                {
                    title: "Discipline Specific Knowledge",
                    desc: "Capability enhancement through learning fundamentals and cutting-edge aspect related to food technology by gaining knowledge in food science and allied specialized courses."
                },
                {
                    title: "Problem Solving",
                    desc: "Capacity to identify, analyze and resolve food industry need base problems and design solutions for complex problems that meet the specified needs with appropriate consideration for the food sustainability."
                },
                {
                    title: "Critical Thinking",
                    desc: "Competency development to think ‘out of the box’ and generate solutions for complex problems in unfamiliar contexts to resolve the challenges."
                },
                {
                    title: "Communication Skills",
                    desc: "Enhanced communication skills for effective transmission of technical knowledge to stockholders (farmers, industry, society) through development of vibrant ecosystem with face to face communication, research and review articles or social media."
                },
                {
                    title: "Analytical Reasoning / Thinking",
                    desc: "Ability to analyze and synthesize data from a variety of sources; draw valid conclusions and support them with evidence and examples, and address conflicting viewpoints."
                },
                {
                    title: "Research-related Skills",
                    desc: "Efficacy development of the students to plan, execute and report the results of an experiment or investigation as well as projects with articulation of societal benefit-based thought process."
                },
                {
                    title: "Multicultural Competency and Inclusive Spirit",
                    desc: "Capability to work effectively with multidisciplinary teams/ multicultural team and facilitate coordinated effort as a group or a team in the interests of a common cause and work efficiently as a member of a team. Gender sensitivity and adopting a gender-neutral approach, as also empathy for the less advantaged and the differently-abled including those with learning disabilities. Adoption of multicultural groups with demonstrations of values for betterment of diverse culture society."
                },
                {
                    title: "Digital and Technolo",
                    desc: "Capacity building technical skills to handle modern and sophisticated equipment, software, and IT tools for generation of need base products and processes."
                },
                {
                    title: "Value Inculcation",
                    desc: "Generation of holistic technocrats through inculcation of life skills, ethical practices to create vibrant human value systems-based thought process driven technological knowledge application mind set, exclusively for human welfare with due conservation of existing moral dimensions in every aspect of modern technology-based wealth generation."
                },
                {
                    title: "Environment and Sustainability",
                    desc: "Awareness about environmental issues related to food industries (pollution, climate change, hunger, and malnutrition) and trouble shoot them with effective suitable food processing, waste management, conservation and management of biological resources and work towards sustainable development."
                },
                {
                    title: "Community Engagement and Services",
                    desc: "Capability enhancement of student as food technologist, sharing the responsibility as an Indian citizen in community- engagement services and activities for promoting the wellbeing of society."
                },

                {
                    title: "Life-long Learning",
                    desc: "Ability to demonstrate the skills necessary to continually educate oneself and engage in independent and life-long learning in the broadest context of technological change and also to build the capacity to emerge out as an entrepreneur."
                },

            ],
        },
        {
            // subtitle: "Program Specific Outcomes",
            list: [
                {
                    desc: "Comprehensive knowledge of various areas related to Food Science and Technology and a coherent understanding to process, preserve, package, store, and market finished food products with industrial-level perfection.",
                },
                {
                    desc: "Practical knowledge required for resolving industry-based problems, along with skills for self-employment and an entrepreneurial mindset to excel in a professional career in Food Technology.",
                },
                {
                    desc: "Skills and attitude required to contribute effectively in processing, packaging, and preservation of food products using a multidisciplinary approach while ensuring food safety and quality.",
                },
                {
                    desc: "Ability to apply critical thinking and scientific principles to address societal needs through the development of next-generation and value-added food products.",
                },
            ],
        },
    ];

    // Table Data (ARRAY)
    const tableData = [
        {
            headers: ["Program Outcome No.", "Program Outcome Description", "needs"],
            rows:
                [
                    {
                        outcome: "PO1-Discipline specific knowledge",
                        desc: "Development of the students in food science and technology with special reference to capability enhancement through cutting edge knowledge of fundamentals in mathematics, science, engineering, management and food science base specialized courses to resolve complex food technology challenges and also to formulate need based innovative processed food products.",
                        needs: "Global"
                    },
                    {
                        outcome: "PO2-Problem analysis and solution",
                        desc: "Transformation of the students capable enough to identify demand and supply base marketing trends, through literature cited as a base to formulate innovative ideas, verifying scaling driven conclusions, over mathematics, science, and engineering base applications.",
                        needs: "National"
                    },
                    {
                        outcome: "PO3-Design/development of solutions",
                        desc: "Design capability enhancement of students for creative solutions of food industry need base problems through introduction of food technology driven new ideas that may compensate with appropriate innovation of consumer-based food products in coordination with regulatory authority notified context of food safety, cultural, societal, and environmental transition considerations.",
                        needs: "Regional"
                    },
                    {
                        outcome: "PO4-Conduction of investigations for complex problems",
                        desc: "Efficacy development of the students coiling around independent applied research undertaking capability with specialty design of experimental set up, unique utility of analytical tool and data interpretation to enable synthesis of information for valid conclusions.",
                        needs: "Local"
                    },
                    {
                        outcome: "PO5-Modern tool usage",
                        desc: "Innate motivation of students for capacity building to handle modern and sophisticated equipment’s, software’s and IT tools for prediction and modelling of food formulation to compensate with regulatory mechanism of food safety through understanding of limitations of said equipment’s and software’s.",
                        needs: "National"
                    },
                    {
                        outcome: "PO6-Food technologist and Society",
                        desc: "Students’ upliftment as food technologists sharing the responsibility as an Indian citizen updated with quality and sustainability of food products for building up of unique society as a healthy citizen. Enrichment with recent technologies capable to elicit views of others, mediate conflicts and lead in drawing conclusions as a group activity.",
                        needs: "National"
                    },
                    {
                        outcome: "PO7-Ethics",
                        desc: "Specialty grooming of the students with ethical practices to generate vibrant value systems coiling around application of technological knowledge exclusively for human welfare with due conservation of existing moral dimensions in every aspect of either process and product development driven decisions.",
                        needs: "Local"
                    },
                    {
                        outcome: "PO8-Environment and sustainability",
                        desc: "Food technology enriched entrepreneurship based on skill, expertise and mindset change of students capable enough to entrap global environmental transition as a key factor to rejuvenate food technological innovations exclusively in the interest of food processing sector for far sighted sustainability mission.",
                        needs: "Global"
                    },
                    {
                        outcome: "PO9-Communication",
                        desc: "Holistic development of the students with special reference to enhanced communication skill to transfer science and technology base technical knowledge to stockholders (farmers, industry, society) through development of vibrant ecosystem with social media (articles, blogs, face to face communication and by writing research and review articles).",
                        needs: "Regional"
                    },
                    {
                        outcome: "PO10-Individual and team work",
                        desc: "Personalized development of the students as a lead manager to coordinate in inhouse and outsource research projects to stimulate multidisciplinary mode of application.",
                        needs: "Regional"
                    },
                    {
                        outcome: "PO11-Life-long learning",
                        desc: "New edge leaning capacity building of students as a new generation food technologist jointly based on self-motivation and innovative technology to counteract any type of pandemic situation through robust food technology development.",
                        needs: "National"
                    },
                    {
                        outcome: "PO12-Start-up skills and management",
                        desc: "Three-dimensional development of the student through entrepreneurship capability for skill- based start-up initiation in coordination with zero error managerial ecosystem.",
                        needs: "Local"
                    },
                ]

        },
    ];

    return (
        <div className="pg-container">
            <h2 className="innerpage-title">Programme Outcomes</h2>
            {/* Buttons */}
            <div className="tab-buttons">
                <button
                    className={`btn ${activeTab === "outcomes" ? "active" : ""}`}
                    onClick={() => setActiveTab("outcomes")}
                >
                    Program Outcomes
                </button>

                <button
                    className={`btn ${activeTab === "psos" ? "active" : ""}`}
                    onClick={() => setActiveTab("psos")}
                >
                    Program Specific Outcomes
                </button>
            </div>

            {/* Content */}
            <div className="tab-content">

                {/* Outcomes TAB */}
                {activeTab === "outcomes" &&
                    outcomesData.map((data, index) => (
                        <div key={index}>
                            <h3 className="innerpage-subtitle">Outcomes-based approach in B. Tech. (Food Technology)</h3>
                            {/* <p className="subtitle">{data.subtitle}</p> */}

                            <ul className="page-list">
                                {data.list?.map((item, i) => (
                                    <li key={i}>
                                        {item.title ? (
                                            <>
                                                <strong>{item.title}:</strong> {item.desc}
                                            </>
                                        ) : (
                                            item.desc
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                {/* PSO TAB */}
                {activeTab === "psos" &&
                    tableData.map((table, index) => (
                        <div key={index}>
                            <h2>{table.title}</h2>
                            <div className="table-responsive">
                                <table className="common-table">
                                    <thead>
                                        <tr>
                                            <th>Sr. No.</th>
                                            {table.headers?.map((head, i) => (
                                                <th key={i}>{head}</th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {table.rows?.map((row, i) => (
                                            <tr key={i}>
                                                <td>{i + 1}</td>

                                                <td>
                                                    {row.outcome.split("-")[0]} <br />
                                                    {row.outcome.split("-")[1]}
                                                </td>
                                                <td>{row.desc}</td>
                                                <td>{row.needs}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    ))}
            </div>
        </div>
    );
};

export default PgOutcomes;