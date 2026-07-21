import React, { useEffect, useState } from "react";
import axios from "axios";
import "./recruiters.css";

const Recruiters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/recruiters")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="recruiters-page">
      <h2 className="innerpage-title">Esteemed Recruiters</h2>

      <div className="recruiters-grid">
        {data.map((item, index) => (
          <div className="recruiter-card" key={index}>
            <img
              src={`http://localhost:5000/uploads/${item.logo}`}
              alt={item.company_name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruiters;