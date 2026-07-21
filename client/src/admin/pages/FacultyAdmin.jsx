import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";

const FacultyAdmin = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    area_of_expertise: "",
    image: null,
  });

  const [preview, setPreview] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState("");

  const token = localStorage.getItem("token");

  //  Fetch Data
  const fetchFaculty = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/faculty");
      setFacultyList(res.data);
    } catch (err) {
      setMsg("Failed to load data");
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  //  Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  //  Reset
  const resetForm = () => {
    setForm({
      name: "",
      designation: "",
      area_of_expertise: "",
      image: null,
    });
    setPreview("");
    setEditingId(null);
  };

  //  Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.designation) {
      return alert("Name & Designation required");
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("designation", form.designation);
    formData.append("area_of_expertise", form.area_of_expertise);

    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/faculty/${editingId}`,
          formData,
          { headers: { Authorization: token } }
        );
        setMsg("Updated successfully");
      } else {
        await axios.post(
          "http://localhost:5000/api/faculty",
          formData,
          { headers: { Authorization: token } }
        );
        setMsg("Added successfully");
      }

      resetForm();
      fetchFaculty();
    } catch (err) {
      setMsg("Error saving data");
    }
  };

  //  Edit
  const handleEdit = (item) => {
    setForm({
      name: item.name,
      designation: item.designation,
      area_of_expertise: item.area_of_expertise,
      image: null,
    });
    setPreview(item.image ? `http://localhost:5000/uploads/${item.image}` : "");
    setEditingId(item.id);
  };

  //  Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this record?")) return;

    await axios.delete(`http://localhost:5000/api/faculty/${id}`, {
      headers: { Authorization: token },
    });

    fetchFaculty();
  };

  return (
    <div className="admin-page">
      {msg && <div className="admin-alert">{msg}</div>}

      <div className="admin-grid">
        {/* FORM */}
        <div className="admin-card">
          <h3>{editingId ? "Edit Faculty" : "Add Faculty"}</h3>

          <form onSubmit={handleSubmit}>
            <label>
              Name *
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Designation *
              <input
                name="designation"
                value={form.designation}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Area of Expertise
              <input
                name="area_of_expertise"
                value={form.area_of_expertise}
                onChange={handleChange}
              />
            </label>

            <input type="file" accept="image/*" onChange={handleFileChange} />

            {preview && (
              <div style={{ position: "relative", display: "inline-block", marginTop: "8px" }}>
                <img src={preview} alt="preview" className="preview-img" />
                <IoClose
                  onClick={() => { setForm({ ...form, image: null }); setPreview(""); }}
                  style={{
                    position: "absolute", top: "-6px", right: "-6px",
                    background: "#722327", color: "#fff", borderRadius: "50%",
                    fontSize: "16px", cursor: "pointer"
                  }}
                />
              </div>
            )}

            <button className="form-btn" type="submit">
              {editingId ? "Update" : "Add"}
            </button>
          </form>
        </div>

        {/* TABLE */}
        <div className="admin-card">
          <h3>All Faculty</h3>

          {facultyList.length === 0 ? (
            <p>No records found</p>
          ) : (
            <div className="admin-table-wrapper ">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Expertise</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {facultyList.map((item) => (
                    <tr key={item.id}>
                      <td>
                        {item.image && (
                          <img
                            src={`http://localhost:5000/uploads/${item.image}`}
                            width="50"
                            alt=""
                            className="table-img"
                          />
                        )}
                      </td>
                      <td>{item.name}</td>
                      <td>{item.designation}</td>
                      <td>{item.area_of_expertise?.slice(0, 40)}</td>
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

export default FacultyAdmin;