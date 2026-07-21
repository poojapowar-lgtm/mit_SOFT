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


        // <div>
        //     <h2 className="innerpage-title">Admission Schedule</h2>

        //     <h3 className="innerpage-subtitle">Admission Flow</h3>
        //     <ul className="page-list">
        //         <li>Student is informed about admission date, time and required documents.</li>
        //         <li>Student reports with original documents, 2 photocopy sets and scanned copies.</li>
        //         <li>Attendance is marked and token issued.</li>
        //         <li>Orientation by Admission Committee.</li>
        //         <li>Document verification against originals.</li>
        //         <li>ERP details verified; upload support provided if needed.</li>
        //         <li>Fee payment and receipt generation.</li>
        //         <li>Final submission of documents; acknowledgement receipt issued.</li>
        //     </ul>

        //     <h3 className="innerpage-subtitle">Responsibilities</h3>
        //     <ul className="page-list">
        //         <li>Admission Head: Admission communication</li>
        //         <li>Reception Committee: Attendance & token</li>
        //         <li>Chairman: Orientation</li>
        //         <li>Verification Committee: Document verification</li>
        //         <li>ERP Coordinator: ERP support</li>
        //         <li>Accounts: Fee collection</li>
        //         <li>Student Section: Document submission & records</li>
        //         <li>Registrar/Head of Institute: Eligibility approval & enrolment</li>
        //     </ul>

        //     <h3 className="innerpage-subtitle">Eligibility Verification</h3>
        //     <ul className="page-list">
        //         <li>Verify academic, ID and category documents.</li>
        //         <li>Issue deficiency notice for missing documents.</li>
        //         <li>Check the UGC fake university list for PG admission.</li>
        //     </ul>

        //     <h3 className="innerpage-subtitle">Records to Maintain</h3>
        //     <ul className="page-list">
        //         <li>Admission forms</li>
        //         <li>Verification checklists</li>
        //         <li>Deficiency notices</li>
        //         <li>Acknowledgement receipts</li>
        //         <li>Admission records</li>
        //     </ul>

        //     <h3 className="innerpage-subtitle">Admission Timeline</h3>

        // </div>

        <div>
            <h2 className="innerpage-title">Admission Schedule</h2>
                <div className="facility-card">
                                <div className="campus-grid">
                {admissionFlow.map((section, index) => (
                    <div className="section-card" key={index}>
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

        </div>
    );
};

export default Schedule;
