import React from "react";

const FundedProjects = () => {

    const projectData1 = [
        {
            faculty: "Dr. Anjali Bhoite",
            title: "Tender Coconut Milk Application"
        },
        {
            faculty: "Ms. Abhilasha Shingote",
            title: "Development & Characterization of edible film from taro starch & essential oil"
        },
        {
            faculty: "Prof. Deepti Chaudhari",
            title: "Edible film coated bioactive rich functional health bites"
        },
        {
            faculty: "Dr. Gauri Athawale",
            title: "Application of high-pressure processing (HPP) for enhancing microbial safety, quality, & shelf life of selected Indian mithai"
        }
    ];


    const projectData2 = [
        {
            faculty: "Dr. Anjali Bhoite",
            title: "Millet Donut"
        },
        {
            faculty: "Dr. Anjali Bhoite",
            title: "Collaboration Research (Industry Sponsored) Whirlpool India Limited"
        },
        {
            faculty: "Dr. P. D. Shere",
            title: "Development of micro-nutrient rich millet based extruded snack"
        }
    ];

    return (
        <div>
            <h2 className="innerpage-title">Research Paper Publication</h2>



            <h3 className="table-title">Funded Research Projects 2025-26</h3>
            <div className="table-responsive">
                <table className="common-table">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name of Faculty</th>
                            <th>Project name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectData1.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.faculty}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h3 className="table-title">Funded Research Projects 2024-2025</h3>
            <div className="table-responsive">
                <table className="common-table">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name of Faculty</th>
                            <th>Project name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectData2.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.faculty}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default FundedProjects;