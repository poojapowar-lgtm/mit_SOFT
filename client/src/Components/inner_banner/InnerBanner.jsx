import React, {  useState } from "react";
import { Link, useLocation } from "react-router-dom";
import EnquiryForm from "../EnquiryForm";
import "./inner_banner.css";

const InnerBanner = ({ title, bgImage }) => {
    const [showForm, setShowForm] = useState(false);

    const location = useLocation();

    const pathNames = location.pathname
        .split("/")
        .filter((item) => item);

    return (
        <div className="innerbanner-container">
            <div className="innerbanner-image">

                <img src={bgImage} alt={title || "MIT-SoFT Page Banner"} title={title || "MIT School of Food Technology"} />

                <div className="innerbanner-card">

                    <h2 className="innerbanner-title">
                        {title}
                    </h2>

                    <div className="breadcrumb">

                        <Link to="/" className="breadcrumb-home">
                            Home
                        </Link>

                        {pathNames.map((path, index) => (
                            <React.Fragment key={index}>
                                <span className="breadcrumb-separator">/</span>
                                {index === pathNames.length - 1 ? (
                                    <span className="breadcrumb-current">{title}</span>
                                ) : (
                                    <Link
                                        to={`/${pathNames.slice(0, index + 1).join("/")}`}
                                        className="breadcrumb-current"
                                    >
                                        {path.replace(/-/g, " ")}
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}

                    </div>


                    {/* Vertical Button */}
                    {!showForm && (
                        <button
                            className="enquiry-btn"
                            onClick={() => setShowForm(true)}
                        >
                            Enquiry
                        </button>
                    )}

                    {/* Popup Form */}
                    {showForm && (
                        <div className="enquiry-modal">
                            <div className="enquiry-content">
                                <EnquiryForm onClose={() => setShowForm(false)} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InnerBanner;