import React from "react";


const Calendar = () => {
    const calendarData = [
        {
            name: "World Food Safety Day",
            date: "07.06.2027 (Sunday)",
        },
        {
            name: "International World Food Day (University event organized by SOFT)",
            date: "16.10.2026",
        },
        {
            name: "National Conference",
            date: "20.10.2026 to 21.10.2026",
        },
        {
            name: "University sports week (Vishwanath Sports Meet)",
            date: "National Level – Jan 2027\nIntercollegiate sports event- August 2026",
        },
        {
            name: "Annual gathering (Persona Fest)",
            date: "February 2027",
        },
        {
            name: "Alumni meet",
            date: "12 September 2026",
        },
        {
            name: "Student Club Activities & Engagement Programs",
            date: "July 2026 to April 2027",
        },
        {
            name: "Induction Program",
            date: "4th August 2026",
        },
        {
            name: "Higher Semester Orientation Program",
            date: "6th July 2026 and 7th January 2027",
        },
        {
            name: "Competitions & Festivals",
            date: `1. Ganesh festival celebration - 16.09.2026
2. Cultural Event of Navratri -12.06.2026
3. Makar Sankranti Celebration - 14.01.2027
4. Holi Celebration - 22.03.2027`,
        },
        {
            name: "Project Demonstrations",
            date: "24.05.2027 to 10.06.2027",
        },
        {
            name: "Faculty Development Programs (FDPs)",
            date: "06.06.2026 to 04.07.2026",
        },
        {
            name: "Industry Interaction Programs",
            date: "February and March 2027",
        },
        {
            name: "Outreach, Extension & Social Impact Activities (Rural Immersion Program)",
            date: "20.01.2027 to 27.01.2027",
        },
        {
            name: "Certification Program & Training Sessions",
            date: "FosTac Training per month",
        },
        {
            name: "Any other major academic, co-curricular, extracurricular, or institutional activities planned for AY 2026-27 - (International Conference)",
            date: "22-10-2026",
        },
    ];
    return (
        <div>
            <h2 className="innerpage-title">Academic Calendar</h2>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div className="syllabus-section">
                    <p>Academic Planner – 1st Year Onwards | A.Y. 2026–27</p>
                    <a href="/assets/docs/Academic planner_1st year_2026-27.docx">
                        <button className="btn">Apply Online</button>
                    </a>
                </div>

                <div className="syllabus-section">
                    <p>Academic Planner – 2nd  Year Onwards | A.Y. 2026–27</p>
                    <a href="/assets/docs/Academic plannner_2nd yr onwards_2026-27.docx">
                        <button className="btn">Apply Online</button>
                    </a>
                </div>
            </div>

            <h2 className="innerpage-title"> Activity Calendar 2026-27</h2>
            <div className="table-responsive">
                <table className="common-table">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name of Program</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {calendarData.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className="calendar-table-name">
                                    {item.name}
                                </td>

                                <td style={{ whiteSpace: "pre-line" }}>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Calendar;
