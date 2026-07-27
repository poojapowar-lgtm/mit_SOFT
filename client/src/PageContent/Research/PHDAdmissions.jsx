import React, { useEffect, useState } from "react";
import axios from "axios";

const PHDAdmissions = () => {
    const [research, setResearch] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/research")
            .then((res) => setResearch(res.data))
            .catch(() => console.log("Error fetching data"));
    }, []);

    return (
        <div className="research-container">
            <h2 className="innerpage-title">Ph. D. Research Scholars</h2>
            <div className="table-responsive">
                <table className="common-table">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name of Student</th>
                            <th>Department</th>
                            <th>Category</th>
                            <th>Research Supervisor</th>
                        </tr>
                    </thead>

                    <tbody>
                        {research.length === 0 ? (
                            <tr>
                                <td colSpan="5" style={{ textAlign: "center" }}>
                                    No data available
                                </td>
                            </tr>
                        ) : (
                            research
                                .filter(item => item.name)
                                .map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.department}</td>
                                        <td>{item.category}</td>
                                        <td>{item.supervisor}</td>
                                    </tr>
                                ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PHDAdmissions;