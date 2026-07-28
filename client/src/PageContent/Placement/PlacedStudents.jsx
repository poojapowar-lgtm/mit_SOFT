import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./placedstudents.css";

const PlacedStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/placed-students")
      .then((res) => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("Error fetching data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="research-container">
      <h2 className="innerpage-title">Placed Students</h2>

      <div className="table-responsive">
        <table className="common-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Photo</th>
              <th>Name of Student</th>
              <th>Discipline</th>
              <th>Industry / Organization</th>
              <th>Package (LPA)</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  Loading...
                </td>
              </tr>
            ) : students.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No data available
                </td>
              </tr>
            ) : (
              students
                .filter((item) => item.name)
                .map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>

                    {/* PHOTO */}
                    <td>
                      {item.photo ? (
                        <img
                          src={`http://localhost:5000/uploads/${item.photo}`}
                          alt={item.name}
                          className="student-img"
                        />
                      ) : (
                        <span className="no-img">N/A</span>
                      )}
                    </td>

                    <td>{item.name}</td>
                    <td>{item.discipline}</td>
                    <td>{item.organization}</td>
                    <td>{item.package_lpa}</td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlacedStudents;