import React, { useEffect, useState } from "react";
import axios from "axios";

const AlumniStartupAdmin = () => {
  const [list, setList] = useState([]);

  // Separate files (IMPORTANT)
  const [certificateFile, setCertificateFile] = useState(null);
  const [excelFile, setExcelFile] = useState(null);

  const [form, setForm] = useState({
    name: "",
    passing_year: "",
    startup_name: "",
    contact_number: "",
    email: "",
    certificate_link: "",
  });

  const [msg, setMsg] = useState("");
  const [editingId, setEditingId] = useState(null);

  // ================= FETCH =================
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/alumni-startup");
      setList(res.data);
    } catch {
      setMsg("Error fetching data ❌");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= FORM =================
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const resetForm = () => {
    setForm({
      name: "",
      passing_year: "",
      startup_name: "",
      contact_number: "",
      email: "",
      certificate_link: "",
    });
    setCertificateFile(null);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) =>
      formData.append(key, form[key])
    );

    if (certificateFile) {
      formData.append("certificate", certificateFile);
    }

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/alumni-startup/${editingId}`,
          formData
        );
        setMsg("Updated successfully ✅");
      } else {
        await axios.post(
          "http://localhost:5000/api/alumni-startup",
          formData
        );
        setMsg("Added successfully ✅");
      }

      resetForm();
      fetchData();
    } catch {
      setMsg("Error saving data ❌");
    }
  };

  // ================= EXCEL UPLOAD =================
  const handleExcelUpload = async () => {
    if (!excelFile) {
      alert("Please select Excel file");
      return;
    }

    const formData = new FormData();
    formData.append("file", excelFile);

    try {
      await axios.post(
        "http://localhost:5000/api/alumni-startup/upload-excel",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMsg("Excel uploaded successfully ✅");
      setExcelFile(null);
      fetchData();
    } catch (err) {
      setMsg("Excel upload failed ❌ " + (err.response?.data || err.message));
    }
  };

  // ================= EDIT / DELETE =================
  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this record?")) return;

    await axios.delete(
      `http://localhost:5000/api/alumni-startup/${id}`
    );
    fetchData();
  };

  return (
    <div className="admin-page">
      {msg && <div className="admin-alert">{msg}</div>}

      <div className="admin-grid">

        {/* ================= FORM ================= */}
        <div className="admin-card">
          <h3>{editingId ? "Edit" : "Add"} Alumni Startup</h3>

          <form onSubmit={handleSubmit}>

            <label>
              Name of Alumni
              <input
                name="name"
                placeholder="Enter alumni name"
                value={form.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Year of Passing
              <input
                name="passing_year"
                placeholder="Enter passing year"
                value={form.passing_year}
                onChange={handleChange}
              />
            </label>

            <label>
              Startup Name
              <input
                name="startup_name"
                placeholder="Enter startup name"
                value={form.startup_name}
                onChange={handleChange}
              />
            </label>

            <label>
              Contact Number
              <input
                name="contact_number"
                placeholder="Enter contact number"
                value={form.contact_number}
                onChange={handleChange}
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={form.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Certificate Link (optional)
              <input
                name="certificate_link"
                placeholder="Enter certificate link"
                value={form.certificate_link}
                onChange={handleChange}
              />
            </label>

            {/* FILE UPLOAD */}
            <label>
              Upload Certificate
              <input
                type="file"
                onChange={(e) => setCertificateFile(e.target.files[0])}
              />
            </label>

            <button className="form-btn" type="submit">
              {editingId ? "Update" : "Add"}
            </button>

          </form>
        </div>

        {/* ================= TABLE + EXCEL ================= */}
        <div className="admin-card">
          <h3>Alumni Startups</h3>

          {/* ⚠️ EXCEL ALERT */}
          <div style={{ marginBottom: "15px" }}>
            <p style={{ fontSize: "12px", color: "#555" }}>
              ⚠️ Excel format:<br />
              <strong>
                Name | Year | Startup | Contact | Email | Certificate Link
              </strong>
            </p>

            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={(e) =>
                setExcelFile(e.target.files[0])
              }
            />

            <button onClick={handleExcelUpload}>
              Upload Excel
            </button>
          </div>

          {/* TABLE */}
          <div className="admin-table-wrapper ">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Sr</th>
                  <th>Name</th>
                  <th>Year</th>
                  <th>Startup</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Certificate</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {list.length === 0 ? (
                  <tr>
                    <td colSpan="8" align="center">
                      No data found
                    </td>
                  </tr>
                ) : (
                  list.map((item, i) => (
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
                            File
                          </a>
                        )}
                        <br />
                        {item.certificate_link && (
                          <a
                            href={item.certificate_link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Link
                          </a>
                        )}
                      </td>

                      <td>
                        <button onClick={() => handleEdit(item)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(item.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AlumniStartupAdmin;