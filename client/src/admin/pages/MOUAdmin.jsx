import React, { useEffect, useState } from "react";
import axios from "axios";

const MOUAdmin = () => {
  const [list, setList] = useState([]);
  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    company_name: "",
    address: "",
    mou_date: "",
    purpose: "",
    activities: "",
  });

  const [errors, setErrors] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState("");
  const token = localStorage.getItem("token");

  // ================= FETCH DATA =================
  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/mou");
    setList(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= EXCEL UPLOAD =================
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleExcelUpload = async () => {
    if (!file) {
      alert("Please select file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        "http://localhost:5000/api/mou/upload-excel",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );

      setMsg("Excel uploaded successfully ✅");
      setFile(null);
      fetchData();
    } catch (err) {
      console.error(err);
      setMsg("Excel upload failed ❌ " + (err.response?.data || err.message));
    }
  };

  // ================= FORM =================
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    let err = {};
    if (!form.company_name) err.company_name = "Required";
    if (!form.mou_date) err.mou_date = "Required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const resetForm = () => {
    setForm({
      company_name: "",
      address: "",
      mou_date: "",
      purpose: "",
      activities: "",
    });
    setEditingId(null);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/mou/${editingId}`, form);
        setMsg("Updated successfully");
      } else {
        await axios.post("http://localhost:5000/api/mou", form);
        setMsg("Added successfully");
      }

      resetForm();
      fetchData();
    } catch {
      setMsg("Error saving data");
    }
  };

  const handleEdit = (item) => {
    setForm({ ...item });
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this record?")) return;
    await axios.delete(`http://localhost:5000/api/mou/${id}`);
    fetchData();
  };

  return (
    <div className="admin-page">
      {msg && <div className="admin-alert">{msg}</div>}

      <div className="admin-grid">

        {/* FORM */}
        <div className="admin-card">
          <h3>{editingId ? "Edit MOU" : "Add MOU"}</h3>

<form onSubmit={handleSubmit}>
  <label>
    Company Name *
    <input
      name="company_name"
      placeholder="Enter company name"
      value={form.company_name}
      onChange={handleChange}
      required
    />
  </label>
  {errors.company_name && <span className="error">{errors.company_name}</span>}

  <label>
    Address
    <input
      name="address"
      placeholder="Enter address"
      value={form.address}
      onChange={handleChange}
    />
  </label>

  <label>
    MOU Date *
    <input
      type="text"
      name="mou_date"
      placeholder="DD-MM-YYYY"
      value={form.mou_date}
      onChange={handleChange}
      required
    />
  </label>
  {errors.mou_date && <span className="error">{errors.mou_date}</span>}

  <label>
    Purpose
    <input
      name="purpose"
      placeholder="Enter purpose"
      value={form.purpose}
      onChange={handleChange}
    />
  </label>

  <label>
    Activities
    <input
      name="activities"
      placeholder="Enter activities"
      value={form.activities}
      onChange={handleChange}
    />
  </label>

  <button className="form-btn" type="submit">
    {editingId ? "Update" : "Add"}
  </button>
</form>
        </div>

        {/* TABLE + EXCEL */}
        <div className="admin-card">
          <h3>MOU List</h3>

          {/* EXCEL UPLOAD */}
          <div style={{ marginBottom: "15px" }}>
            <p style={{ fontSize: "12px", color: "#555" }}>
              ⚠️ Excel headers:<br />
              <strong>Company Name | Address | Date | Purpose | Activities</strong>
            </p>

            <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
            <button onClick={handleExcelUpload}>Upload Excel</button>
          </div>

          <div className="admin-table-wrapper ">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Company</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Purpose</th>
                  <th>Activities</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.company_name}</td>
                    <td>{item.address}</td>
                    <td>{item.mou_date}</td>
                    <td>{item.purpose}</td>
                    <td>{item.activities}</td>
                    <td>
                      <button onClick={() => handleEdit(item)}>Edit</button>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOUAdmin;