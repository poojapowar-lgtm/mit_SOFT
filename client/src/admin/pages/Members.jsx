import React, { useEffect, useState } from "react";
import axios from "axios";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [memberType, setMemberType] = useState("governing"); // default
  const [form, setForm] = useState({
    name: "",
    designation: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // Fetch based on type
  const fetchMembers = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/members?type=${memberType}`
    );
    setMembers(res.data);
  };

  useEffect(() => {
    fetchMembers();
  }, [memberType]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({ name: "", designation: "" });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.designation) {
      return alert("All fields required");
    }

    const payload = {
      ...form,
      member_type: memberType,
    };

    if (editingId) {
      await axios.put(
        `http://localhost:5000/api/members/${editingId}`,
        payload,
        { headers: { Authorization: token } }
      );
      setMessage("Updated successfully");
    } else {
      await axios.post(
        "http://localhost:5000/api/members",
        payload,
        { headers: { Authorization: token } }
      );
      setMessage("Added successfully");
    }

    resetForm();
    fetchMembers();
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      designation: item.designation,
    });
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this member?")) return;

    await axios.delete(`http://localhost:5000/api/members/${id}`, {
      headers: { Authorization: token },
    });

    fetchMembers();
  };

  return (
    <div className="admin-page">

      {message && <div className="admin-alert success">{message}</div>}

      <div className="admin-grid">
        {/* FORM */}
        <div className="admin-card">
          <h2 className="card-title">{editingId ? "Edit Member" : "Add Member"}</h2>

          {/* TYPE SWITCH BUTTONS */}
          <div className="switch-btns">
            <button
              className={`switch-btn ${memberType === "governing" ? "active" : ""}`}
              onClick={() => setMemberType("governing")}
            >
              Governing Body
            </button>

            <button
              className={`switch-btn ${memberType === "board" ? "active" : ""}`}
              onClick={() => setMemberType("board")}
            >
              Board Members
            </button>
          </div>

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

            <button className="form-btn" type="submit">
              {editingId ? "Update" : "Add"}
            </button>
          </form>
        </div>

        {/* TABLE */}
        <div className="admin-card">
          <h2 className="card-title">
            {memberType === "governing"
              ? "Governing Body"
              : "Board Members"}
          </h2>

          {members.length === 0 ? (
            <p>No members found</p>
          ) : (
            <div className="admin-table-wrapper ">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {members.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.designation}</td>
                    <td>
                      <button onClick={() => handleEdit(item)}>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                      >
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

export default Members;