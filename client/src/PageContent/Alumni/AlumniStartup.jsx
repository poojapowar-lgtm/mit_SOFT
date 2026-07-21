import React, { useEffect, useState } from "react";
import axios from "axios";

const AlumniStartup = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/alumni-startup") // ✅ FIXED
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div className="research-container">
      <h2 className="innerpage-title">Alumni Startups</h2>

      <div className="table-responsive">
        <table className="common-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Year</th>
              <th>Startup</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Certificate</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="7" align="center">No data</td>
              </tr>
            ) : (
              data.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.passing_year}</td>
                  <td>{item.startup_name}</td>
                  <td>{item.contact_number}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.certificate_file && (
                      <a
                        href={`http://localhost:5000/uploads/${item.certificate_file}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View File
                      </a>
                    )}
                    {item.certificate_link && (
                      <a
                        href={item.certificate_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Link
                      </a>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlumniStartup;