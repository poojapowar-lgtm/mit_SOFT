import React from "react";

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

    // const campusData = [canteenData, centralData];

    return (
        <div>
            <h2 className="innerpage-title">Facilities</h2>
            {/* campusData */}
            {/* CANTEEN DATA */}
            <div className="row-lists">
                <div className="scope-card" key="canteen">

                    <h3 className="innerpage-subtitle">
                        {canteenData.title}
                    </h3>

                    {canteenData.details && (
                        <p>{canteenData.details}</p>
                    )}

                    {canteenData.sections?.map((sec, i) => (
                        <div key={i} className="facility-section">

                            {sec.subtitle && (
                                <h4 className="facility-subtitle">
                                    {sec.subtitle}
                                </h4>
                            )}

                            {sec.desc && (
                                <p>{sec.desc}</p>
                            )}

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



                <div className="scope-card" key="central">

                    <h3 className="innerpage-subtitle">
                        {centralData.title}
                    </h3>

                    {centralData.details && (
                        <p>{centralData.details}</p>
                    )}

                    {centralData.sections?.map((sec, i) => (
                        <div key={i} className="facility-section">

                            {sec.subtitle && (
                                <h4 className="facility-subtitle">
                                    {sec.subtitle}
                                </h4>
                            )}

                            {sec.desc && (
                                <p>{sec.desc}</p>
                            )}

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


                {/* hostelData */}
                <div className="scope-card">
                    <h3 className="innerpage-subtitle">{hostelData.title}</h3>
                    {hostelData.details && <p>{hostelData.details}</p>}
                    <div className="campus-grid">
                        {hostelData.sections.map((sec, i) => (
                            <div key={i} className="section-card">

                                {sec.subtitle && <p><strong>{sec.subtitle}</strong></p>}

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
        </div>
    );
};

export default Facilities;