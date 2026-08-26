import React from "react";
// import Notices from "./Notices";
import Happenings from "./Happenings";
import "./news.css";

const News = () => {
    return (
        <div className="news-container">
            {/* <Notices /> */}
            <Happenings />
        </div>
    );
};

export default News;