import React, { useState } from "react";


const Grievance = () => {
    const [activeTab, setActiveTab] = useState("committee");

    // Outcomes Data (ARRAY)
    const committeeData =
    {
        headers: ["Representative", "Name", "Designation", "Contact No.", "E-mail address"],
        rows: [
            {
                represent: "Head of the School",
                name: "Dr. Anjali A. l3hoite",
                role: "Chairperson",
                contact: "9766491915,",
                email: "anjali.bhoite@mituniversity.edu.in"
            },
            {
                represent: "Representative of Civil Administration",
                name: "Mr. Dadasheb Zanje, Talathi, Loni-Kalbhor, Pune.",
                role: "Member",
                contact: "9067639191"
            },
            {
                represent: "Representative of Police Administration",
                name: "Mr. Suraj Bundgar, Senior Police Inspector, Loni-Kalbhor,",
                role: "Member",
                contact: "020-26913260"
            },
            {
                represent: "Representative of Local Media",
                name: "Mr. Sanju Chavan Media Dept.",
                role: "Member",
                contact: "9130010810",
                email: "sanju.chavan@mituniversity.edu.in"
            },
            {
                represent: "Representative of NGO",
                name: "Urjja Unnati,",
                role: "Member",
                contact: "9850998762"
            },
            {
                represent: "Faculty Representative (Ladies)",
                name: "Mrs. Sujata Ghodke",
                role: "Member",
                contact: "9850807262",
                email: "sujata.ghodke@mituniversity.edu.in"
            },
            {
                represent: "Faculty Representative (Ladies)",
                name: "Mrs. Gauri H. Athawale",
                role: "Member",
                contact: "8308321458",
                email: "gauri.athawale@mituniversity.edu.in"
            },
            {
                represent: "Faculty Representative (Gents)",
                name: "Dr. Amit A. Kulthe",
                role: "Member",
                contact: "9096753818",
                email: "amit.kulthe@mituniversity.edu.in"
            },
            {
                represent: "Student Representative (III Year)",
                name: "Keshav Parag Dhokariya",
                role: "Member",
                contact: "9373508789",
                email: "keshavdhokariyasc@gmail.com"
            },
            {

                represent: "Student Representative (III Year)",
                name: "Shravani Arun Mhaswade",
                role: "Member",
                contact: "9307746022",
                email: "shravani.m6800@gmail.com"
            },
            {

                represent: "Student Representative (I Year)",
                name: "Mamas Moutik Moog",
                role: "Member",
                contact: "9373508789,9881566086",
                email: "manasmoogg@gmail.com"
            },
            {

                represent: "Student Representative",
                name: "Rutuja Rakesh Belwalkar",
                role: "Member",
                contact: "8454097196",
                email: "rdbb45@gmail.com"
            },
            {

                represent: "Parent Representative",
                name: "Mr. Prasad Ganegaonkar",
                role: "Member",
                contact: "8788828427 ",
                email: "pganegaonkar@yahoo.com"
            },
            {

                represent: "Representative of Non-",
                name: "Mr. Suryakant D. Ghule/td>",
                role: "Member",
                contact: "9881459776",
                email: "suryakant.ghule@mituniversity.edu.in"
            },

            {

                represent: "Faculty Representative (Gents)",
                name: "Dr. Nilesh Kardile",
                role: "Member Secretary",
                contact: "9273324006",
                email: "nilesh.kardile@mituniversity.edu.in"
            },

        ]
    };


    // Table Data (ARRAY)
    const squadData =
    {
        headers: ["Representative", "Name", "Designation", "Contact No.", "E-mail address"],
        rows: [
            {
                represent: " Senior Faculty, Representative",
                name: "Mr. Fayaj L. Pathan",
                role: "Convener",
                contact: "9850100812",
                email: "fayaj.pathan@mituniversity.edu.in"
            },
            {
                represent: "Faculty Representative",
                name: "Dr. Ganesh J. Bhaysar",
                role: "Member",
                contact: "8600850083",
                email: "ganesh.bhaysar@mituniversity.edu.in"
            },

            {
                represent: "Faculty Representative",
                name: "Mrs. Kavita A. Mane",
                role: "Member",
                contact: "9881409212",
                email: "kavita.mane@mituniversity.edu.in"
            },
            {
                represent: "Faculty Representative",
                name: "Dr. Shubhangi M. Thakre",
                role: "Member",
                contact: "Ph. 7057630816",
                email: "shubhangi.thakre@mituniversity.eduin"
            },
            {
                represent: "Representative of Non-Teaching Staff",
                name: "Mr. Rahul R. Hange",
                role: "Member",
                contact: "Ph. 9657442002",
                email: "rahul.hange@mituniversity.edu.in"
            },
            {
                represent: "Representative of Hostel",
                name: "Mr. Manoranjan Parida",
                role: "Member",
                contact: "Ph. 9149462627",
                email: "manoranjan.parida@mituniversity.edu.in"
            },
            {
                represent: "Faculty Representative",
                name: "Dr. Vaibhav S. Pad!",
                role: "Member",
                contact: "Ph. 8605969200",
                email: "vaibhay.patil@mituniversity5du.in"
            },
        ],

    };


    return (
        <div>
            <h2 className="innerpage-title">Student Grievance</h2>

            {/* Buttons */}
            <div className="tab-buttons">
                <button
                    className={`btn ${activeTab === "committee" ? "active" : ""}`}
                    onClick={() => setActiveTab("committee")}
                >
                    Anti-Ragging Committee
                </button>

                <button
                    className={`btn ${activeTab === "squad" ? "active" : ""}`}
                    onClick={() => setActiveTab("squad")}
                >
                    Anti-Ragging Squad
                </button>
            </div>

            {/* Content */}
            <div className="tab-content">

                {/* committee TAB */}
                {activeTab === "committee" && (
                    <div className="table-responsive">
                        <table className="common-table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    {committeeData.headers?.map((head, i) => (
                                        <th key={i}>{head}</th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {committeeData.rows?.map((row, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>

                                        <td>{row.represent}</td>
                                        <td>{row.name}</td>
                                        <td>{row.role}</td>
                                        <td>{row.contact}</td>
                                        <td>{row.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* squad TAB */}
                {activeTab === "squad" && (
                    <div className="table-responsive">
                        <table className="common-table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    {squadData.headers?.map((head, i) => (
                                        <th key={i}>{head}</th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {squadData.rows?.map((row, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>

                                        <td>{row.represent}</td>
                                        <td>{row.name}</td>
                                        <td>{row.role}</td>
                                        <td>{row.contact}</td>
                                        <td>{row.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>

        </div>
    );
};

export default Grievance;