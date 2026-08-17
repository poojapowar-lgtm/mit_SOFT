import React from "react";


const Annoucement = () => {
    return (
        <div>
            <h2 className="innerpage-title">Admission Annoucement</h2>
            <p>Admissions for Academic Year 2026–27 at School of Food Technology, MIT ADT University, Pune are now open. Candidates are invited to apply for Undergraduate, Postgraduate, and Doctoral programs in Food Technology and allied areas.</p>
            <div className="syllabus-section">
                <p>The application portal is live. Interested candidates can</p>
                {/* <button className="btn2">Registar</button> */}
                <a href="https://www.digialm.com/EForms/configuredHtml/176/59974/Registration.html">
                    <button className="btn">Apply Online</button>
                </a>
            </div>
        </div>
    );
};

export default Annoucement;
