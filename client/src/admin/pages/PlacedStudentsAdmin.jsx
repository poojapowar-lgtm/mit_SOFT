import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";

const PlacedStudentsAdmin = () => {
  const [list, setList] = useState([]);
  const [file, setFile] = useState(null); // excel
  const [photo, setPhoto] = useState(null); // image
  const [preview, setPreview] = useState("");

  const [form, setForm] = useState({
    name: "",
    discipline: "",
    organization: "",
    package_lpa: "",
  });

  const [errors, setErrors] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState("");
  const token = localStorage.getItem("token");

  // ================= FETCH =================
  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/placed-students");
    setList(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= IMAGE HANDLING =================
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // size check (100KB)
    if (file.size > 100 * 1024) {
      alert("Image must be less than 100KB ❌");
      return;
    }

    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  };

  // ================= EXCEL =================
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleExcelUpload = async () => {
    if (!file) return alert("Select file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        "http://localhost:5000/api/placed-students/upload-excel",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );

      setMsg("Excel uploaded ✅");
      setFile(null);
      fetchData();
    } catch (err) {
      setMsg("Upload failed ❌");
    }
  };

  // ================= FORM =================
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Required";
    if (!form.discipline) err.discipline = "Required";
    if (!form.organization) err.organization = "Required";
    if (!form.package_lpa) err.package_lpa = "Required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const resetForm = () => {
    setForm({
      name: "",
      discipline: "",
      organization: "",
      package_lpa: "",
    });
    setPhoto(null);
    setPreview("");
    setEditingId(null);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("discipline", form.discipline);
    formData.append("organization", form.organization);
    formData.append("package_lpa", form.package_lpa);
    if (photo) formData.append("photo", photo);

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/placed-students/${editingId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setMsg("Updated ✅");
      } else {
        await axios.post(
          "http://localhost:5000/api/placed-students",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setMsg("Added ✅");
      }

      resetForm();
      fetchData();
    } catch {
      setMsg("Error ❌");
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
    setPreview(
      item.photo
        ? `http://localhost:5000/uploads/${item.photo}`
        : ""
    );
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete?")) return;
    await axios.delete(`http://localhost:5000/api/placed-students/${id}`);
    fetchData();
  };

  return (
    <div className="admin-page">

      {msg && <div className="admin-alert">{msg}</div>}

      <div className="admin-grid">

        {/* ================= FORM ================= */}
        <div className="admin-card">
          <h3>{editingId ? "Edit Student" : "Add Student"}</h3>

          <form onSubmit={handleSubmit}>

            <label>
              Name *
              <input
                name="name"
                placeholder="Enter name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            {errors.name && <span className="error">{errors.name}</span>}

            <label>
              Discipline *
              <input
                name="discipline"
                placeholder="Enter discipline"
                value={form.discipline}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Organization *
              <input
                name="organization"
                placeholder="Enter organization"
                value={form.organization}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Package (LPA) *
              <input
                type="number"
                name="package_lpa"
                placeholder="Enter package"
                value={form.package_lpa}
                onChange={handleChange}
                required
              />
            </label>

            {/* IMAGE */}
            <div className="image-upload">
              <label>
                Upload Photo (Max 500KB)
                <input type="file" accept="image/*" onChange={handlePhotoChange} />
              </label>

              {preview && (
                <div style={{ position: "relative", display: "inline-block", marginTop: "8px" }}>
                  <img src={preview} alt="preview" className="preview-img" />
                  <IoClose
                    onClick={() => { setPhoto(null); setPreview(""); }}
                    style={{
                      position: "absolute",
                      top: "-6px",
                      right: "-6px",
                      background: "#722327",
                      color: "#fff",
                      borderRadius: "50%",
                      fontSize: "16px",
                      cursor: "pointer"
                    }}
                  />
                </div>
              )}
            </div>

            <button className="form-btn" type="submit">
              {editingId ? "Update" : "Add"}
            </button>

          </form>
        </div>

        {/* ================= TABLE ================= */}
        <div className="admin-card">
          <h3>Students List</h3>

          <div style={{ marginBottom: "15px" }}>
            <p style={{ fontSize: "12px", color: "#555" }}>
              ⚠️ Excel headers (in order):<br />
              <strong>Name of Students | Discipline | Industry/Organization | Package In LPA</strong>
            </p>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleExcelUpload}>Upload Excel</button>
          </div>

          <div className="admin-table-wrapper ">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Discipline</th>
                  <th>Org</th>
                  <th>Package</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {list.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>

                    <td>
                      {item.photo && (
                        <img
                          src={`http://localhost:5000/uploads/${item.photo}`}
                          alt=""
                          className="table-img"
                        />
                      )}
                    </td>

                    <td>{item.name}</td>
                    <td>{item.discipline}</td>
                    <td>{item.organization}</td>
                    <td>{item.package_lpa}</td>

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

export default PlacedStudentsAdmin;