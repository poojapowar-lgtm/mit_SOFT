import React, { useEffect, useState } from "react";
import axios from "axios";

const RecruitersAdmin = () => {
  const [list, setList] = useState([]);

  const [form, setForm] = useState({
    company_name: "",
    display_order: "",
    logo: null,
  });

  const [editingId, setEditingId] = useState(null);

  const [preview, setPreview] = useState(null);
  const [msg, setMsg] = useState("");

  const token = localStorage.getItem("token");

  // Fetch Data
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/recruiters");
      setList(res.data);
    } catch (err) {
      setMsg("Error loading data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // File Upload + Preview
  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, logo: file });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.company_name || !form.logo) {
      return alert("Company name & logo required");
    }

    const fd = new FormData();
    fd.append("company_name", form.company_name);
    fd.append("display_order", form.display_order);
    fd.append("logo", form.logo);

    try {
      await axios.post("http://localhost:5000/api/recruiters", fd, {
        headers: { Authorization: token },
      });

      setMsg("Recruiter added successfully");

      setForm({ company_name: "", display_order: "", logo: null });
      setPreview(null);

      fetchData();
    } catch (err) {
      setMsg("Error adding recruiter: " + (err.response?.data || err.message));
    }
  };

  const handleEdit = (item) => {
    setForm({
      company_name: item.company_name,
      display_order: item.display_order,
      logo: null,
    });

    setEditingId(item.id);
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this recruiter?")) return;

    await axios.delete(`http://localhost:5000/api/recruiters/${id}`, {
      headers: { Authorization: token },
    });

    fetchData();
  };

  return (
    <div className="admin-page">

      {msg && <div className="admin-alert">{msg}</div>}

      <div className="admin-grid">
        {/* FORM */}
        <div className="admin-card">
          <h3 className="card-title">Add Recruiter</h3>

          <form onSubmit={handleSubmit}>
            <label>
              Company Name *
              <input
                name="company_name"
                value={form.company_name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Display Order
              <input
                name="display_order"
                type="number"
                value={form.display_order}
                onChange={handleChange}
              />
            </label>

            <label>
              Logo *
              <input type="file" onChange={handleFile} required />
            </label>

            {/* Preview */}
            {preview && (
              <div style={{ margin: "10px 0" }}>
                <img src={preview} alt="preview" width="100" />
              </div>
            )}

            <button className="form-btn" type="submit">
              Add Recruiter
            </button>
          </form>
        </div>

        {/* TABLE */}
        <div className="admin-card">
          <h3 className="card-title">All Recruiters</h3>

          {list.length === 0 ? (
            <p>No recruiters found</p>
          ) : (
               <div className="admin-table-wrapper ">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Logo</th>
                  <th>Company</th>
                  <th>Order</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {list.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={`http://localhost:5000/uploads/${item.logo}`}
                        alt=""
                        width="50"
                      />
                    </td>
                    <td>{item.company_name}</td>
                    <td>{item.display_order}</td>
                    <td>
                      <button onClick={() => handleEdit(item)}>Edit</button>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruitersAdmin;