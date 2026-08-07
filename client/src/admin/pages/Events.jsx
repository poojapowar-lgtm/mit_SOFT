import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Events = () => {
  const [eventList, setEventList] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    description: "",
    files: [],
    existingFiles: [],
    doc: null,
    existingDoc: "",
    link_text: "",
    link_url: "",
  });
  const [imgPreviews, setImgPreviews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEventList(res.data);
    } catch (err) {
      setMessage("Failed to load events: " + (err.response?.data || err.message));
    }
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);

    const maxSize = 250 * 1024; // 250KB in bytes

    const validFiles = selected.filter((file) => {
      if (file.size > maxSize) {
        alert(`${file.name} exceeds the 250KB size limit.`);
        return false;
      }
      return true;
    });

    setForm((prev) => ({
      ...prev,
      files: [...prev.files, ...validFiles],
    }));

    setImgPreviews((prev) => [
      ...prev,
      ...validFiles.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const handleDocChange = (e) => setForm((prev) => ({ ...prev, doc: e.target.files[0] || null }));

  const removeNewImage = (index) => {
    setForm((prev) => ({ ...prev, files: prev.files.filter((_, i) => i !== index) }));
    setImgPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (index) => {
    setForm((prev) => ({ ...prev, existingFiles: prev.existingFiles.filter((_, i) => i !== index) }));
  };

  const resetForm = () => {
    setForm({ title: "", date: "", description: "", files: [], existingFiles: [], doc: null, existingDoc: "", link_text: "", link_url: "" });
    setImgPreviews([]);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title) return alert("Title required");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("date", form.date);
    formData.append("description", form.description);
    formData.append("link_text", form.link_text);
    formData.append("link_url", form.link_url);

    if (form.files.length > 0) {
      form.files.forEach((file) => formData.append("files", file));
    } else {
      formData.append("file_path", form.existingFiles[0] || "");
    }

    if (form.doc) formData.append("doc", form.doc);
    else if (form.existingDoc) formData.append("doc_path", form.existingDoc);

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/events/${editingId}`, formData, { headers: { Authorization: token } });
        setMessage("Updated successfully");
      } else {
        await axios.post("http://localhost:5000/api/events", formData, { headers: { Authorization: token } });
        setMessage("Added successfully");
      }
      resetForm();
      fetchEvents();
    } catch (err) {
      setMessage("Error: " + (err.response?.data || err.message));
    }
  };

  const handleEdit = (item) => {
    setForm({
      title: item.title,
      date: item.date,
      description: item.description,
      files: [],
      existingFiles: item.file_path ? [item.file_path] : [],
      doc: null,
      existingDoc: item.doc_path || "",
      link_text: item.link_text || "",
      link_url: item.link_url || "",
    });
    setImgPreviews(item.file_path ? [`http://localhost:5000${item.file_path}`] : []);
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    await axios.delete(`http://localhost:5000/api/events/${id}`, { headers: { Authorization: token } });
    fetchEvents();
  };

  return (
    <div className="admin-page">
      {message && <div className="admin-alert success">{message}</div>}

      <div className="admin-grid">
        {/* FORM */}
        <div className="admin-card">
          <h2 className="card-title">{editingId ? "Edit Event" : "Add Event"}</h2>

          <form onSubmit={handleSubmit}>
            <label>
              Title *
              <input name="title" value={form.title} onChange={handleChange} required />
            </label>

            <label>
              Date
              <input name="date" value={form.date} onChange={handleChange} />
            </label>

            <label>Description</label>
            <ReactQuill
              theme="snow"
              value={form.description}
              onChange={(val) => setForm((prev) => ({ ...prev, description: val }))}
              modules={{
                toolbar: [
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["bold", "italic"],
                  ["clean"],
                ],
              }}
              style={{ marginBottom: "12px" }}
            />

            {/* IMAGE UPLOAD */}
            <label>
              Upload Image
              <input type="file" accept="image/*" multiple onChange={handleFileChange} />
            </label>

            {/* NEW IMAGE PREVIEWS */}
            {imgPreviews.length > 0 && (
              <div className="image-preview-container">
                {imgPreviews.map((src, index) => (
                  <div key={index} style={{ position: "relative", display: "inline-block" }}>
                    <img src={src} alt="preview" className="preview-img" />
                    <IoClose
                      onClick={() => removeNewImage(index)}
                      style={{ position: "absolute", top: "-6px", right: "-6px", background: "#722327", color: "#fff", borderRadius: "50%", fontSize: "16px", cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* EXISTING IMAGE (EDIT MODE) */}
            {form.existingFiles.length > 0 && imgPreviews.length === 0 && (
              <div className="image-preview-container">
                {form.existingFiles.map((file, index) => (
                  <div key={index} style={{ position: "relative", display: "inline-block" }}>
                    <img src={`http://localhost:5000${file}`} alt="existing" className="preview-img" />
                    <IoClose
                      onClick={() => removeExistingImage(index)}
                      style={{ position: "absolute", top: "-6px", right: "-6px", background: "#722327", color: "#fff", borderRadius: "50%", fontSize: "16px", cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* DOC UPLOAD */}
            <label>
              Upload Document (PDF / DOC)
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleDocChange} />
            </label>
            {form.doc && (
              <p style={{ fontSize: "12px", color: "#004d00" }}>📄 {form.doc.name}</p>
            )}
            {!form.doc && form.existingDoc && (
              <p style={{ fontSize: "12px", color: "#555" }}>
                📄 <a href={`http://localhost:5000${form.existingDoc}`} target="_blank" rel="noreferrer">View existing doc</a>
              </p>
            )}

            <label>
              Link Text
              <input name="link_text" value={form.link_text} onChange={handleChange} />
            </label>

            <label>
              Link URL
              <input name="link_url" value={form.link_url} onChange={handleChange} />
            </label>

            <button className="form-btn" type="submit">
              {editingId ? "Update" : "Add"}
            </button>
          </form>
        </div>

        {/* TABLE */}
        <div className="admin-card">
          <h2 className="card-title">All Events</h2>

          {eventList.length === 0 ? (
            <p>No events found</p>
          ) : (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Doc</th>
                    <th>Link</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {eventList.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.date}</td>
                      <td><span dangerouslySetInnerHTML={{ __html: item.description?.slice(0, 60) }} /></td>
                      <td>
                        {item.file_path && (
                          <img src={`http://localhost:5000${item.file_path}`} alt="" className="table-img" />
                        )}
                      </td>
                      <td>
                        {item.doc_path && (
                          <a href={`http://localhost:5000${item.doc_path}`} target="_blank" rel="noreferrer">📄 View</a>
                        )}
                      </td>
                      <td>
                        {item.link_url && (
                          <a href={item.link_url} target="_blank" rel="noreferrer">{item.link_text || "Open"}</a>
                        )}
                      </td>
                      <td>
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
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

export default Events;
