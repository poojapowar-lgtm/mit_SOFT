import React, { useEffect, useState } from "react";
import axios from "axios";

const ResearchAdmin = () => {
  const [list, setList] = useState([]);
  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    name: "",
    department: "",
    category: "",
    supervisor: "",
  });

  const [errors, setErrors] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState("");
  const token = localStorage.getItem("token");

  // FETCH DATA
  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/research");
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
        "http://localhost:5000/api/research/upload-excel",
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

  // ================= FORM HANDLING =================
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    let err = {};
    if (!form.name) err.name = "Required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const resetForm = () => {
    setForm({ name: "", department: "", category: "", supervisor: "" });
    setEditingId(null);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/research/${editingId}`,
          form
        );
        setMsg("Updated successfully");
      } else {
        await axios.post(
          "http://localhost:5000/api/research",
          form
        );
        setMsg("Added successfully");
      }

      resetForm();
      fetchData();
    } catch {
      setMsg("Error saving data");
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this record?")) return;
    await axios.delete(`http://localhost:5000/api/research/${id}`);
    fetchData();
  };

  return (
    <div className="admin-page">
      {msg && <div className="admin-alert">{msg}</div>}

      <div className="admin-grid">

        {/* FORM */}
        <div className="admin-card">
          <h3>{editingId ? "Edit Student" : "Add Student"}</h3>

          <form onSubmit={handleSubmit}>
            <label>
              Student Name *
              <input
                name="name"
                placeholder="Enter student name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            {errors.name && <span className="error">{errors.name}</span>}

            <label>
              Department
              <input
                name="department"
                placeholder="Enter department"
                value={form.department}
                onChange={handleChange}
              />
            </label>

            <label>
              Category
              <input
                name="category"
                placeholder="Enter category"
                value={form.category}
                onChange={handleChange}
              />
            </label>

            <label>
              Supervisor
              <input
                name="supervisor"
                placeholder="Enter supervisor name"
                value={form.supervisor}
                onChange={handleChange}
              />
            </label>

            <button className="form-btn" type="submit">
              {editingId ? "Update" : "Add"}
            </button>
          </form>
        </div>

        {/* TABLE + EXCEL UPLOAD */}
        <div className="admin-card">
          <h3>Student Research List</h3>

          {/* EXCEL UPLOAD UI */}
          <div style={{ marginBottom: "15px" }}>
            <p style={{ fontSize: "12px", color: "#555", marginBottom: "6px" }}>
              ⚠️ Excel file must have these exact headers:<br />
              <strong>Name | Department | Category | Supervisor</strong>
            </p>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
            <button onClick={handleExcelUpload}>Upload Excel</button>
          </div>

          <div className="admin-table-wrapper ">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Category</th>
                  <th>Supervisor</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.department}</td>
                    <td>{item.category}</td>
                    <td>{item.supervisor}</td>
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

export default ResearchAdmin;