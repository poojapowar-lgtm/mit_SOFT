import React, { useEffect, useState } from "react";
import { PiExportBold } from "react-icons/pi";
import axios from "axios";

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact", {
        headers: {
             Authorization: localStorage.getItem("token"),
        },
      });
      setContacts(res.data);
    } catch (err) {
      setError(err.response?.data || err.message);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`, {
        headers: {
             Authorization: localStorage.getItem("token"),
        },
      });

      alert("Deleted successfully");
      fetchContacts();
    } catch (err) {
      console.error(err);
      alert("Delete failed ❌");
    }
  };

  const exportToCSV = () => {
    if (contacts.length === 0) {
      alert("No data to export");
      return;
    }

    const headers = ["Name", "Mobile", "Email", "Course", "Date"];

    const rows = contacts.map((item) => [
      item.name,
      item.mobile,
      item.email,
      item.course,
      item.created_at
        ? new Date(item.created_at).toLocaleDateString()
        : "N/A",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");

    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "contacts.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="admin-page">

      {/* Header */}
      <div className="dashboard-header">

        {error && (
          <p style={{ color: "red" }}>
            Error: {typeof error === "string" ? error : JSON.stringify(error)}
          </p>
        )}

        <button className="export-btn" onClick={exportToCSV}>
          Export Data <PiExportBold style={{ fontSize: "20px" }} />
        </button>

      </div>

      {/* Table */}
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
          {contacts.map((item) => (
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
                <button
                  onClick={() => deleteContact(item.id)}
                  style={{
                    padding: "5px 10px",
                    background: "#dc3545",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {contacts.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No contacts found
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default ContactTable;