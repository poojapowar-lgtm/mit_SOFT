import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Happenings = () => {
    const [happeningsData, setHappeningsData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchHappenings();
    }, []);

    const fetchHappenings = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/events");
            setHappeningsData(res.data);
        } catch (err) {
            console.error("Error fetching happenings", err);
        }
    };

    return (
        <div className="happenings">
            <div className="section-header">
                <h2 className="title">Happenings</h2>
                <button className="btn" onClick={() => navigate("/campus-life/events")}>
                    View More
                </button>
            </div>

            <div className="happenings-scroll">
                <div className="happenings-track">
                    {[...happeningsData, ...happeningsData].map((item, index) => (
                        <div
                            className="happening-card"
                            key={index}
                            onClick={() => navigate("/campus-life/events")}
                            style={{ cursor: "pointer" }}
                        >
                            {(() => {
                                let paths = [];
                                try { paths = JSON.parse(item.file_path); } catch { paths = [item.file_path]; }
                                return <img src={`http://localhost:5000${paths[0]}`} alt={item.title} />;
                            })()}

                            <div className="overlay">
                                <p className="happening-text">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Happenings;