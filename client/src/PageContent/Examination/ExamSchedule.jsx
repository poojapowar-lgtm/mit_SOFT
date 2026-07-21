import React from "react";

const ExamSchedule = () => {
    const examSchedule = [
        {
            exam: "Continuous Assessment–1 (CA1)",
            odd: "17 Aug 2026 – 21 Aug 2026",
            even: "17 Feb 2027 – 23 Feb 2027",
        },
        {
            exam: "Mid-Term Examination",
            odd: "04 Sept 2026 – 10 Sept 2026",
            even: "08 Mar 2027 – 15 Mar 2027",
        },
        {
            exam: "Continuous Assessment–2 (CA2)",
            odd: "16 Oct 2026 – 23 Oct 2026",
            even: "08 Apr 2027 – 15 Apr 2027",
        },
        {
            exam: "Final Practical Examination (Practical/Internal Assessment)",
            odd: "16 Nov 2026 – 21 Nov 2026",
            even: "17 May 2027 – 24 May 2027",
        },
        {
            exam: "Final Theory Examination",
            odd: "25 Nov 2026 – 17 Dec 2026",
            even: "25 May 2027 – 18 Jun 2027",
        },
    ];

    return (
        <div>
            <h2 className="innerpage-title">Examination Schedule</h2>

            <div className="table-responsive">
                <table className="common-table">
                    <thead>
                        <tr>
                            <th>Examination</th>
                            <th>Odd Semester (Sem III, V & VII)</th>
                            <th>Even Semester (Sem IV, VI & VIII)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {examSchedule.map((item, index) => (
                            <tr key={index}>
                                <td>{item.exam}</td>
                                <td>{item.odd}</td>
                                <td>{item.even}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExamSchedule;