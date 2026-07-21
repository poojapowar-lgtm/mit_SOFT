import React from "react";

const PlacementCell = () => {
    return (
        <div className="placement-container">

            <h2 className="innerpage-title">Placement Cell</h2>
            <ul className="page-list">
                <li>A dedicated Training & Placement Cell facilitates internships and final placements through on-campus and virtual recruitment drives.</li>
                <li>Students are trained through industry interaction, resume building, aptitude tests, soft-skill development, and interview preparation through the SCIL.</li>
                <li>Placement opportunities are provided in Production, Quality Assurance/Quality Control, R&D, Food Safety, Regulatory Affairs, Certification, Supply Chain, and NAPS programs.</li>
                <li>The School also supports international placements, industrial training, and internship-to-placement pathways.</li>
            </ul>


            <h2 className="innerpage-title">Placement Drive Conduction Process/SOP</h2>
            <p>Training & Placement Cell – Food Technology Students</p>

            <div className="placement-grid">

                {/* Step 1 */}
                <h3 className="names">1. Identification of Student Interest & Domain Mapping</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Collect domain-wise industry placement preferences of final-year B.Tech. & M.Tech. Food Technology students (e.g., Fruit & Vegetables Processing, Bakery and Confectionary Industry, Dairy Processing Industry, Spice Industry, Meat & Poultry Processing, Wine Processing Industry, Carbonated Beverages industry, Edible oil Processing Industry, Rice mills etc.).</li>
                        <li>Analyze student interest to align industry requirements with student career goals.</li>
                    </ul>
                </div>

                {/* Step 2 */}
                <h3 className="names">2. Recruiter Identification & Job Description Collection</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Identify and approach suitable recruiters based on student domain preferences.</li>
                        <li>Collect complete recruiter details including:</li>
                        <ol>
                            <li>Organization profile</li>
                            <li>Job Title / Designation</li>
                            <li>Detailed Job Description (JD)</li>
                            <li>Eligibility criteria</li>
                            <li>CTC / stipend</li>
                            <li>Location and joining details</li>
                        </ol>
                    </ul>
                </div>

                {/* Step 3 */}
                <h3 className="names">3. Placement Drive Approval & Scheduling</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Obtain approval from competent authorities.</li>
                        <li>Finalize date, time, venue, and mode (online/offline).</li>
                        <li>Confirm participation with the recruiting organization.</li>
                    </ul>
                </div>

                {/* Step 4 */}
                <h3 className="names">4. Upload of Drive Details on Calyx Pod AI Platform</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Upload complete placement drive details on the Calyxy Pod AI platform, where all placement-preference students are registered.</li>
                        <li>Ensure the platform includes:</li>
                        <ol>
                            <li>Company profile</li>
                            <li>Job role & JD</li>
                            <li>Eligibility criteria</li>
                            <li>Drive schedule</li>
                            <li>Registration deadline</li>
                        </ol>
                        <li>Enable student registration and track applications digitally.</li>
                    </ul>
                </div>

                {/* Step 5 */}
                <h3 className="names">5. Student Notification & Registration</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Notify eligible students through official channels and the Calyxy Pod AI platform.</li>
                        <li>Verify student eligibility and confirm participation.</li>
                    </ul>
                </div>

                {/* Step 6 */}
                <h3 className="names">6. Pre-Placement Preparation Activities</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Conduct Pre-Placement Talk (PPT) by the recruiter.</li>
                        <li>Organize preparatory sessions:</li>
                        <ul>
                            <li>Resume writing (Food Industry specific)</li>
                            <li>Group Discussion & Interview Skills</li>
                            <li>Behavioral & Soft Skills Training</li>
                            <li>Technical orientation (GMP, HACCP, FSSAI, QA/QC, R & D basics)</li>
                        </ul>
                    </ul>
                </div>

                {/* Step 7 */}
                <h3 className="names">7. Shortlisting of Candidates</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Share registered student profiles with the recruiter.</li>
                        <li>Publish shortlisted candidate list through official notice and platform.</li>
                    </ul>
                </div>

                {/* Step 8 */}
                <h3 className="names">8. Placement Drive Execution</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Coordinate and conduct selection rounds:</li>
                        <ol>
                            <li>Aptitude / Technical Test</li>
                            <li>Group Discussion</li>
                            <li>Technical Interview</li>
                            <li>HR Interview</li>
                        </ol>
                        <li>Provide logistical and administrative support to recruiters.</li>
                    </ul>
                </div>

                {/* Step 9 */}
                <h3 className="names">9. Selection & Offer Communication</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Receive selection results from the recruiter.</li>
                        <li>Communicate final selection, offer details, and joining information to students.</li>
                    </ul>
                </div>

                {/* Step 10 */}
                <h3 className="names">10. Documentation & Reporting</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Maintain structured records of:</li>
                        <ul>
                            <li>Registered vs. selected students</li>
                            <li>Offer letters and CTC details</li>
                            <li>Recruiter and student feedback</li>
                        </ul>
                        <li>Submit consolidated placement report to the institute.</li>
                    </ul>
                </div>

                {/* Step 11 */}
                <h3 className="names">11. Post-Placement Support & Feedback</h3>
                <div className="placement-card">
                    <ul className="page-list">
                        <li>Support students during joining and onboarding.</li>
                        <li>Collect feedback from recruiters and placed students for continuous improvement.</li>
                    </ul>
                </div>

            </div>

            <h2 className="innerpage-title">Placement Co-Ordinator</h2>
            <div className="placement-card">
                <p>Mr. Rupesh J. Saindane</p>
                <p>Training and Placement Officer</p>
                <p>School of Food Technology</p>
            </div>

        </div>
    );
};

export default PlacementCell;