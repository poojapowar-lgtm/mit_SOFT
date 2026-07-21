import React from "react";
import "./facilities.css";

const Facilities = () => {
    // canteenData
    const canteenData = {
        title: "Canteen & Mess Facilities",
        details: "MIT ADT University provides hygienic and student-friendly food facilities ensuring safe, nutritious, and quality meals.These facilities ensure balanced nutrition and support students’ well-being.",
        sections: [
            {
                list: [
                    "Separate hostels for boys & girls",
                    "24/7 water & electricity",
                    "Wi-Fi enabled campus",
                ],
            },

        ],
    };

    // centralData
    const centralData = {
        title: "Central Campus Facilities",
        details: "These facilities ensure balanced nutrition and support students’ well-being.",
        sections: [
            {
                list: [
                    "Green campus and modern infrastructure ",
                    "Central Library and sports complex ",
                    "Shuttle service within campus ",
                    "Bank, ATM, medical and grooming facilities"

                ],
            },

        ],
    };

    // hostelData
    const hostelData =
    {
        title: "Hostel Facilities",
        details: "MIT ADT University offers safe, secure, and well-equipped hostel accommodation for boys and girls, creating a “Home Away from Home” environment that promotes discipline and holistic development.",
        sections: [
            {
                subtitle: "Accommodation & Availability",
                list: [
                    "On-Campus Hostels: 7 (Boys & Girls)",
                    "Off-Campus Girls Hostels: 8",
                    "Off-Campus Boys Hostels: 9",
                    "Rooms available in 2, 3, 4, and 6 sharing",
                ],
            },
            {
                subtitle: "Key Features & Amenities",
                list: [
                    "24×7 security with CCTV surveillance",
                    "Well-furnished rooms with essential furniture",
                    "Wi-Fi, uninterrupted power supply, and RO drinking water",
                    "Solar/electric geysers for hot water",
                    "Recreation rooms and indoor games",
                    "Laundry and common utility facilities",
                ],
            },
            {
                subtitle: "Additional Services",
                list: [
                    "Mess and transport facility (for off-campus hostels)",
                    "Daily transportation to campus",
                    "Centralized hostel admission system",
                ],
            },
            {
                subtitle: "Hostel Environment",
                list: [
                    "Promotes cultural diversity and peer interaction",
                    "Encourages discipline and independent living",
                    "Supports holistic student development",
                ],
            },
        ],
    };

    const campusData = [canteenData, centralData];

    return (
        <div className="facilities-container">
            <h2 className="innerpage-title">Facilities</h2>
            {/* campusData */}
            <div className="campus-grid">
                {campusData.map((facility, index) => (
                    <div className="facility-card" key={index}>

                        <h3 className="innerpage-subtitle">{facility.title}</h3>

                        {facility.details && <p>{facility.details}</p>}

                        {facility.sections.map((sec, i) => (
                            <div key={i} className="facility-section">

                                {sec.subtitle && (
                                    <h4 className="facility-subtitle">{sec.subtitle}</h4>
                                )}

                                {sec.desc && <p>{sec.desc}</p>}

                                {sec.list && (
                                    <ul className="page-list">
                                        {sec.list.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* hostelData */}
            <div className="facility-card">
                <h3 className="innerpage-subtitle">{hostelData.title}</h3>
                {hostelData.details && <p>{hostelData.details}</p>}
                <div className="campus-grid">
                    {hostelData.sections.map((sec, i) => (
                        <div key={i} className="section-card">

                            {sec.subtitle && <h4 className="section-title">{sec.subtitle}</h4>}

                            {sec.list && (
                                <ul className="page-list">
                                    {sec.list.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    ))}
                </div>

            </div>


        </div>
    );
};

export default Facilities;