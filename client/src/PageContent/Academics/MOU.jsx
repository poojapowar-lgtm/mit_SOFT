import React, { useEffect, useState } from "react";
import axios from "axios";

const MOU = () => {
    const [mouList, setMouList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/mou")
            .then((res) => setMouList(res.data))
            .catch(() => console.log("Error fetching MOU data"));
    }, []);

    return (
        <div className="research-container">
            <h2 className="innerpage-title">
                Memorandum of Understanding (MOU)
            </h2>

            <div className="table-responsive">
                <table className="common-table">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Company Name</th>
                            <th>Address</th>
                            <th>MOU Date</th>
                            <th>Purpose</th>
                            <th>Activities</th>
                        </tr>
                    </thead>

                    <tbody>
                        {mouList.length === 0 ? (
                            <tr>
                                <td colSpan="6" style={{ textAlign: "center" }}>
                                    No data available
                                </td>
                            </tr>
                        ) : (
                            mouList
                                .filter(item => item.company_name)
                                .map((item, index) => (
                                    <tr key={item.id}>
                                        {/*Auto Increment */}
                                        <td>{index + 1}</td>

                                        <td>{item.company_name}</td>
                                        <td>{item.address}</td>

                                        <td style={{ whiteSpace: "nowrap" }}>{item.mou_date || ""}</td>

                                        <td>{item.purpose}</td>
                                        <td>{item.activities}</td>
                                    </tr>
                                ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MOU;