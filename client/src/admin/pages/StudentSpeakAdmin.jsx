import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentSpeakAdmin = () => {
  const [studentList, setStudentList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    year: "",
    message: "",
    image: null,
  });

  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState("");

  const token = localStorage.getItem("token");

  //  Fetch Data
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

  //  Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  File Upload
  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  //  Reset
  const resetForm = () => {
    setForm({
      name: "",
      year: "",
      message: "",
      image: null,
    });
    setEditingId(null);
  };

  //  Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.message) {
      return alert("Name & Message required");
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("year", form.year);
    formData.append("message", form.message);

    if (form.image) {
      formData.append("image", form.image);
    }

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

  //  Edit
  const handleEdit = (item) => {
    setForm({
      name: item.name,
      year: item.year,
      message: item.message,
      image: null,
    });
    setEditingId(item.id);
  };

  //  Delete
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
              Year *
              <input
                name="year"
                placeholder="Year (e.g. TY BTech)"
                value={form.year}
                onChange={handleChange}
              />
            </label>

            <label>
              Message *
              <input
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>


            <input type="file" onChange={handleFileChange} />

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
            <div className="admin-table-wrapper ">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Year</th>
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
                            alt=""
                          />
                        )}
                      </td>
                      <td>{item.name}</td>
                      <td>{item.year}</td>
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