import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import "./lab_facilities.css";

const labData = [
    {
        title: "Food Process and Product technology (FPPT)  ",
        image: "/assets/images/labs/FPPT1.jpg",
        details: [
            "The Department aims of promoting innovation in food sector and catalyzing the growth of food processing industry in India and in global context. The existing infrastructure of Food Product and Process Technology laboratory is competent enough to satisfy the need of undergraduate in various aspects. As a part of this the department has research programmes (M. Tech and Ph.D) in frontline areas of Food Science and Technology. ",
            "To pursue excellence in education and research in specialized areas of Food technology relevant to the sustainable development of process industries requires more competent technology in these core areas. With well-equipped laboratories, and active industry collaborations, the department emphasizes research, innovation, entrepreneurship, and the development of processed foods ex. functional and fortified foods to meet evolving consumer and industry needs.",
        ]
    },
    {
        title: "The Food Product Engineering Laboratory ",
        image: "/assets/images/labs/FPPA2.jpg",
        details: [
            "The Food Product Engineering Laboratory provides hands-on experience in understanding the principles of food processing operations and equipment. Through practical experiments, students gain knowledge of unit operations such as size reduction, mixing, heating, cooling, and mass transfer. ",
            "The lab emphasizes the relationship between engineering concepts and food quality, safety, and efficiency. It helps in developing practical skills, analytical thinking, and familiarity with industrial food processing systems",
        ]
    },

    {
        title: "PTSF (Patronage of Traditional and Specialty Foods laboratory)",
        image: "/assets/images/labs/PTSF.jpg",
        details: [
            "The Traditional and Specialty Foods Laboratory at the School of Food Technology is a dedicated facility for hands-on training in the preparation, processing, and evaluation of traditional, specialty, and heritage food products. It supports practical work for courses such as Traditional Foods, Specialty Foods, Indian Heritage Foods, and New Product Development. ",
            "The lab is equipped with modern food preparation and processing tools that enable students to standardize recipes, develop innovative products, and study region-specific food techniques. Students gain experiential learning in product formulation, sensory evaluation, and value addition while preserving traditional knowledge. This laboratory serves as a platform to integrate cultural food heritage with scientific product development approaches.",
            "Supports innovation in functional foods."
        ]
    },
    {
        title: "Agrobase Plant Operations ",
        image: "/assets/images/labs/Agrobase_Plant.jpg",
        details: [
            "The Department of Agrobase Plant Operations provides hands-on practical training in food processing and value addition of agricultural commodities. Students gain experiential learning through operations such as cleaning, grading, milling, extraction, fermentation, thermal processing, and innovative product formulation. ",
            "The department focuses on transforming raw materials into diversified, nutritionally enhanced, and market-ready food products. Emphasis is placed on quality control, process optimization, and pilot-scale production to simulate industrial practices. The facility bridges theoretical concepts with real-time applications while fostering technical competence and entrepreneurial skills.",
        ]
    },

    {
        title: "Food Chemistry Lab",
        image: "/assets/images/labs/Chemistry_Lab.jpg",
        details: [
            "A Food Chemistry Lab is a specialized facility where scientific experiments are conducted to understand the chemical composition and properties of food, as well as the effects of processing, storage, and other factors on food quality. These labs typically focus on analysing the nutrients and other compounds such as allergen, antinutritional factors that affect food safety, nutrition, and taste.",
            "As consumer demands for healthier, more natural, and environmentally conscious food options grow, food chemistry will continue to evolve to meet these needs.",
        ]
    },

    {
        title: "Research Laboratory ",
        image: "/assets/images/labs/Research_Lab2.jpg",
        details: [
            "An M.Tech and Ph.D. Research Laboratory is an advanced facility where postgraduate and doctoral students conduct research on food processing, preservation, quality control, safety, and product development. The lab is equipped with modern instruments such as HPLC, spectrophotometers, moisture analysers, texture analysers, and microbiological testing equipment.",
            "M.Tech students mainly work on applied research like developing new food products, improving shelf life, and analysing nutritional quality, while Ph.D. scholars focus on innovative research, advanced food analysis, functional foods, food safety standards, and emerging technologies such as food fortification and packaging solutions.",
            "The benefits of this research lab include development of practical and analytical skills, hands-on experience with advanced food testing instruments, contribution to safe and healthy food production, publication of scientific research, collaboration with food industries, and improved career opportunities in food processing industries, quality assurance labs, research institutes, and academia."
        ]
    },
    {
        title: "Food Business Management and Entrepreneurship Development (FBMED) ",
        image: "/assets/images/labs/FBMED1.jpg",
        details: [
            "The Department of Food Business Management and Entrepreneurship Development (FBMED) integrates business, management and entrepreneurial subjects within the food technology curriculum to equip students with skills in management, marketing, finance and startup planning specific to the food sector. ",
            "The department aim to foster entrepreneurship and startup mindset, leveraging pilot processing facilities, project work, industry collaborations and entrepreneurial modules so that graduates can pursue careers as food technologists, managers, innovators, or even launch their own food businesses or value-added food ventures.",
        ]
    },
        {
        title: "Computer Laboratory ",
        image: "/assets/images/labs/Computer_Lab1.jpg",
        details: [
            "The Computer Laboratory of the Food College is well-equipped with modern computer systems and high-speed internet connectivity to support academic and research activities. ",
            "The lab is designed to facilitate practical sessions related to data analysis, food process modelling, statistical software applications, and research work. It provides access to essential software tools required for food technology studies, project work, and report preparation. The laboratory offers a conducive learning environment that enhances students’ technical skills and digital proficiency in the field of food science and technology.",
        ]
    },
];

const LabFacilities = () => {
    const [selectedLab, setSelectedLab] = useState(null);

    return (
        <div>
            <h2 className="innerpage-title">Laboratory Facilities</h2>

            <div className="lab-grid">
                {labData.map((lab, index) => (
                    <div className="lab-card" key={index}>
                        <h3 className="innerpage-subtitle">{lab.title}</h3>

                        <div className="lab-img">
                            <img src={lab.image} alt={lab.title} title={lab.title} />
                        </div>

                        <button className="btn" onClick={() => setSelectedLab(lab)}>
                            Read More
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedLab && (
                <div className="lab-modal-overlay" onClick={() => setSelectedLab(null)}>
                    <div
                        className="lab-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <IoMdCloseCircle
                            className="page-close-btn"
                            onClick={() => setSelectedLab(null)}
                        />

                        <h3 className="innerpage-subtitle">{selectedLab.title}</h3>
                        <div className="img-wrapper">
                            <img
                                src={selectedLab.image}
                                alt={selectedLab.title}
                                title={selectedLab.title}
                                className="lab-modal-img"
                            />   </div>

                        <div className="lab-modal-content">
                            {selectedLab.details.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LabFacilities;