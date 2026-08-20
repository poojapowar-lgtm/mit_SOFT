import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./inner_banner.css";

const InnerBanner = ({ title, bgImage }) => {
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

                </div>
            </div>
        </div>
    );
};

export default InnerBanner;