import React from "react";
import "./admission.css";

const Fees = () => {

    // Common headers (not inside array)
    const headers = ["Type", "A.Y.2026-27", "A.Y.2027-28", "A.Y.2029-30", "A.Y.2026-27", "Total"];

    const tableData = [
        {
            title: "UG Program - B. Tech. (Food Technology)",
            rows: [
                ["Indian Resident", "1,85,000", "1,95,500", "2,05,000", "2,18,500", "8,03,500"],
                ["EWS", "1,07,000", "1,12,000", "1,18,000", "1,22,500", "4,59,500"],
                ["NRI/PIO/OCI/CIWGC/CIWSEA/FN (in INR)", "2,77,500", "2,92,500", "3,07,500", "3,27,750", "12,05,250"],
            ],
        },
        {
            title: "PG Program - M. Tech. (Food Technology)",
            rows: [
                ["Indian Resident", "1,65,000", "1,68,500", "-", "-", "3,33,500"],
                ["EWS", "95,000", "98,500", "-", "-", "1,93,500"],
                ["NRI/PIO/OCI/CIWGC/CIWSEA/FN (in INR)", "2,47,500", "2,52,500", "-", "-", "5,00,250"],
            ],
        },
        {
            title: "PG Program - M. Tech. (Food Safety and Quality Management)",
            rows: [
                ["Indian Resident", "1,65,000", "1,68,500", "-", "-", "3,33,500"],
                ["EWS", "95,000", "98,500", "-", "-", "1,93,500"],
                ["NRI/PIO/OCI/CIWGC/CIWSEA/FN (in INR)", "2,47,500", "2,52,500", "-", "-", "5,00,250"],
            ],
        },
        {
            title: "PG Program - Master of Technology (M. Tech.) - Food Technology (For Working Professionals)",
            rows: [
                ["Indian Resident", "1,65,000", "1,68,500", "-", "-", "3,33,500"],
                ["EWS", "95,000", "98,500", "-", "-", "1,93,500"],
                ["NRI/PIO/OCI/CIWGC/CIWSEA/FN (in INR)", "2,47,500", "2,52,500", "-", "-", "5,00,250"],
            ],
        },
    ];

    return (
        <div className="fees-container">
            <h2 className="innerpage-title">Fee Structure</h2>

            {tableData.map((table, index) => (
                <div key={index} className="table-section">
                    <h3 className="innerpage-subtitle">{table.title}</h3>

                    <div className="table-responsive">
                        <table className="common-table">
                            <thead>
                                <tr>
                                    {headers.map((header, i) => (
                                        <th key={i}>{header}</th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {table.rows.map((row, i) => (
                                    <tr key={i}>
                                        {row.map((cell, j) => (
                                            <td key={j}>{cell || "-"}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Fees;