import React, { useEffect, useState } from "react";


const VAC = () => {
    const vacData = [
        {
            name: "Organic Sustainable Food Production",
            year: "2025-26",
            hours: "30",
            enrolled: "26",
            completed: "24",
        },
        {
            name: "Fish Processing",
            year: "2025-26",
            hours: "30",
            enrolled: "30",
            completed: "25",
        },
        {
            name: "Good Manufacturing Practices",
            year: "2025-26",
            hours: "30",
            enrolled: "25",
            completed: "17",
        },
        {
            name: "Food Packaging Regulations",
            year: "2025-26",
            hours: "30",
            enrolled: "29",
            completed: "27",
        },
        {
            name: "Gender Sensitivity",
            year: "2025-26",
            hours: "30",
            enrolled: "13",
            completed: "13",
        },
        {
            name: "Professional Skills and Personality Development",
            year: "2025-26",
            hours: "30",
            enrolled: "11",
            completed: "6",
        },
        {
            name: "Alternative Proteins",
            year: "2025-26",
            hours: "30",
            enrolled: "45",
            completed: "24",
        },
        {
            name: "Export and Import Management in Food Sector",
            year: "2025-26",
            hours: "30",
            enrolled: "26",
            completed: "15",
        },
        {
            name: "Food Freezing Technology",
            year: "2025-26",
            hours: "30",
            enrolled: "7",
            completed: "3",
        },
        {
            name: "Fat and Oil Processing",
            year: "2025-26",
            hours: "30",
            enrolled: "14",
            completed: "9",
        },
        {
            name: "Sustainable Practices in Food Industry",
            year: "2025-26",
            hours: "30",
            enrolled: "18",
            completed: "14",
        },
        {
            name: "Food Supply chain Management",
            year: "2025-26",
            hours: "30",
            enrolled: "11",
            completed: "11",
        },
        {
            name: "Novel Food Quality and Testing Trends",
            year: "2025-26",
            hours: "30",
            enrolled: "16",
            completed: "12",
        },
    ];

    return (
        <div>
            <h2 className="innerpage-title">
                Value added courses-2025-26
            </h2>

            <div className="table-responsive">
                <table className="common-table">
                    <thead>
                        <tr className="VAC-header">
                            <th>Sr No.</th>
                            <th>Name of the course</th>
                            <th>Year of offering/ Year of enrolment</th>
                            <th>Contact hours of course</th>
                            <th>Number of students enrolled in the year</th>
                            <th>Number of Students completing the course in the year</th>
                        </tr>
                    </thead>

                    <tbody>
                        {vacData.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.year}</td>
                                <td>{item.hours}</td>
                                <td>{item.enrolled}</td>
                                <td>{item.completed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VAC;