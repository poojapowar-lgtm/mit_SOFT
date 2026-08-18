import React from "react";


const Schedule = () => {

    const admissionFlow = [
        {
            title: "Admission Flow",
            desc: [
                "Student is informed about admission date, time and required documents.",
                "Student reports with original documents, 2 photocopy sets and scanned copies.",
                "Attendance is marked and token issued.",
                "Orientation by Admission Committee.",
                "Document verification against originals.",
                "ERP details verified; upload support provided if needed.",
                "Fee payment and receipt generation.",
                "Final submission of documents; acknowledgement receipt issued."
            ]
        },
        {
            title: "Responsibilities",
            desc: [
                "Admission Head: Admission communication",
                "Reception Committee: Attendance & token",
                "Chairman: Orientation",
                "Verification Committee: Document verification",
                "ERP Coordinator: ERP support",
                "Accounts: Fee collection",
                "Student Section: Document submission & records",
                "Registrar/Head of Institute: Eligibility approval & enrolment"
            ]
        },
        {
            title: "Eligibility Verification",
            desc: [
                "Verify academic, ID and category documents.",
                "Issue deficiency notice for missing documents.",
                "Check the UGC fake university list for PG admission."
            ]
        },
        {
            title: "Records to Maintain",
            desc: [
                "Admission forms",
                "Verification checklists",
                "Deficiency notices",
                "Acknowledgement receipts",
                "Admission records"
            ]
        }
    ]


    return (
        <div>
            <h2 className="innerpage-title">Admission Schedule</h2>

            <div className="row-lists">
                {admissionFlow.map((section, index) => (
                    <div className="scope-card" key={index}>
                        <h3 className="innerpage-subtitle">{section.title}</h3>

                        <ul className="page-list">
                            {section.desc.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Schedule;
