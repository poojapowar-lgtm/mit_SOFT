import React, { useEffect, useState } from "react";
import { PiExportBold } from "react-icons/pi";
import axios from "axios";

const EnquiryTable = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/enquiry", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setEnquiries(res.data);
    } catch (err) {
      setError(err.response?.data || err.message);
    }
  };

  const deleteEnquiry = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/enquiry/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      fetchEnquiries();
    } catch (err) {
      console.error(err);
    }
  };


  const exportToCSV = () => {
    if (enquiries.length === 0) {
      alert("No data to export");
      return;
    }

    const headers = ["Name", "Mobile", "Email", "Course", "Date"];

    const rows = enquiries.map((item) => [
      item.name,
      item.mobile,
      item.email,
      item.course,
      item.created_at
        ? new Date(item.created_at).toLocaleDateString()
        : "N/A",
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows]
        .map((e) => e.join(","))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "enquiries.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="admin-page">
      <div className="dashboard-header">

        {error && <p style={{ color: "red" }}>Error: {JSON.stringify(error)}</p>}

        <button className="export-btn" onClick={exportToCSV}>Export Data
          <PiExportBold style={{ fontSize: "20px" }} />
        </button>

      </div>

      {error && <p style={{ color: "red" }}>Error: {JSON.stringify(error)}</p>}
      <table className="admin-table" style={{ width: "95%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Course</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>{item.course}</td>
              <td>
                {item.created_at
                  ? new Date(item.created_at).toLocaleDateString()
                  : "N/A"}
              </td>
              <td>
                <button  onClick={() => deleteEnquiry(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {enquiries.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No enquiries found
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default EnquiryTable;