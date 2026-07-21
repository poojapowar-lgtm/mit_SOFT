import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [newsType, setNewsType] = useState("admission");

  const [form, setForm] = useState({
    title: "",
    date: "",
    file: null,
    link_text: "",
    link_url: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // Fetch News by Type
  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/news?type=${newsType}`
      );
      setNewsList(res.data);
    } catch (err) {
      console.error("Error fetching news", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [newsType]);

  // Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const resetForm = () => {
    setForm({
      title: "",
      date: "",
      file: null,
      link_text: "",
      link_url: "",
    });
    setEditingId(null);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title) return alert("Title required");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("date", form.date);
    formData.append("file", form.file);
    formData.append("link_text", form.link_text);
    formData.append("link_url", form.link_url);
    formData.append("category", newsType); // 🔥 important

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/news/${editingId}`,
          formData,
          { headers: { Authorization: token } }
        );
        setMessage("Updated successfully");
      } else {
        await axios.post(
          "http://localhost:5000/api/news",
          formData,
          { headers: { Authorization: token } }
        );
        setMessage("Added successfully");
      }

      resetForm();
      fetchNews();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit
  const handleEdit = (item) => {
    setForm({
      title: item.title,
      date: item.date,
      file: null,
      link_text: item.link_text || "",
      link_url: item.link_url || "",
    });
    setEditingId(item.id);
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this news?")) return;

    await axios.delete(`http://localhost:5000/api/news/${id}`, {
      headers: { Authorization: token },
    });

    fetchNews();
  };

  return (
    <div className="admin-page">
      {message && <div className="admin-alert success">{message}</div>}

      <div className="admin-grid">
        {/* FORM */}
        <div className="admin-card">
          <h2 className="card-title">{editingId ? "Edit News" : "Add News"}</h2>

          {/* CATEGORY BUTTONS */}
          <div className="switch-btns">
            <button
              type="button"
              className={`switch-btn ${
                newsType === "admission" ? "active" : ""
              }`}
              onClick={() => setNewsType("admission")}
            >
              Admission
            </button>

            <button
              type="button"
              className={`switch-btn ${
                newsType === "examination" ? "active" : ""
              }`}
              onClick={() => setNewsType("examination")}
            >
              Examination
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              Title *
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Date
              <input
                name="date"
                value={form.date}
                onChange={handleChange}
                placeholder="e.g. 10 May 2026"
              />
            </label>

            <label>
              File
              <input type="file" onChange={handleFileChange} />
            </label>

            <label>
              Link Text
              <input
                name="link_text"
                value={form.link_text}
                onChange={handleChange}
              />
            </label>

            <label>
              Link URL
              <input
                name="link_url"
                value={form.link_url}
                onChange={handleChange}
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
            {newsType === "admission"
              ? "Admission News"
              : "Examination News"}
          </h2>

          {newsList.length === 0 ? (
            <p>No news found</p>
          ) : (
             <div className="admin-table-wrapper ">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Link</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {newsList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.date}</td>

                    <td>
                      {item.file_path && (
                        <a
                          href={`http://localhost:5000${item.file_path}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.link_text || "View File"}
                        </a>
                      )}

                      {!item.file_path && item.link_url && (
                        <a
                          href={item.link_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.link_text || "Open Link"}
                        </a>
                      )}
                    </td>

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

export default News;