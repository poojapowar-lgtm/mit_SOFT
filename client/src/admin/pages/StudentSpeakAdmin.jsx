import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentSpeakAdmin = () => {
  const [studentList, setStudentList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    degree_specialization: "",
    year_of_passing: "",
    designation: "",
    company: "",
    message: "",
    image: null,
  });

  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState("");

  const token = localStorage.getItem("token");

  // FETCH
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/student-speak");
      setStudentList(res.data);
    } catch (err) {
      setMsg("Failed to load data");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FILE
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const maxSize = 100 * 1024; // 100KB

    if (file.size > maxSize) {
      alert("Image must be less than 100KB ❌");
      e.target.value = null; // reset file input
      return;
    }

    setForm({ ...form, image: file });
  };

  // RESET
  const resetForm = () => {
    setForm({
      name: "",
      degree_specialization: "",
      year_of_passing: "",
      designation: "",
      company: "",
      message: "",
      image: null,
    });
    setEditingId(null);
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.message) {
      return alert("Name & Message required");
    }

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key]) formData.append(key, form[key]);
    });

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/student-speak/${editingId}`,
          formData,
          { headers: { Authorization: token } }
        );
        setMsg("Updated successfully");
      } else {
        await axios.post(
          "http://localhost:5000/api/student-speak",
          formData,
          { headers: { Authorization: token } }
        );
        setMsg("Added successfully");
      }

      resetForm();
      fetchStudents();
    } catch (err) {
      setMsg("Error saving data");
    }
  };

  // EDIT
  const handleEdit = (item) => {
    setForm({
      name: item.name,
      degree_specialization: item.degree_specialization,
      year_of_passing: item.year_of_passing,
      designation: item.designation,
      company: item.company,
      message: item.message,
      image: null,
    });
    setEditingId(item.id);
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this record?")) return;

    await axios.delete(`http://localhost:5000/api/student-speak/${id}`, {
      headers: { Authorization: token },
    });

    fetchStudents();
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
              Name *
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Degree & Specialization
              <input
                name="degree_specialization"
                value={form.degree_specialization}
                onChange={handleChange}
              />
            </label>

            <label>
              Year of Passing
              <input
                name="year_of_passing"
                value={form.year_of_passing}
                onChange={handleChange}
              />
            </label>

            <label>
              Current Designation
              <input
                name="designation"
                value={form.designation}
                onChange={handleChange}
              />
            </label>

            <label>
              Company
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </label>

            <label>
              Message *
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Upload Image / Video
              <input
                type="file"
                onChange={handleFileChange}
              />
            </label>

            <button className="form-btn" type="submit">
              {editingId ? "Update" : "Add"}
            </button>

          </form>
        </div>

        {/* TABLE */}
        <div className="admin-card">
          <h3>All Students</h3>

          {studentList.length === 0 ? (
            <p>No records found</p>
          ) : (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Degree</th>
                    <th>Year</th>
                    <th>Designation</th>
                    <th>Company</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {studentList.map((item) => (
                    <tr key={item.id}>
                      <td>
                        {item.image && (
                          <img
                            src={`http://localhost:5000/uploads/${item.image}`}
                            width="50"
                            alt={item.image_alt || item.name}
                            title={item.image_title || item.name}
                          />
                        )}
                      </td>

                      <td>{item.name}</td>
                      <td>{item.degree_specialization}</td>
                      <td>{item.year_of_passing}</td>
                      <td>{item.designation}</td>
                      <td>{item.company}</td>
                      <td>{item.message?.slice(0, 40)}</td>

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

export default StudentSpeakAdmin;