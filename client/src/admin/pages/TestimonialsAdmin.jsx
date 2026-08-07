import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";

const TestimonialsAdmin = () => {
  const [list, setList] = useState([]);

  const [form, setForm] = useState({
    title: "",
    video: null,
    existingVideo: "",
    video_url: "",
    alt_tag: "",
  });

  const [preview, setPreview] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState("");

  const token = localStorage.getItem("token");

  // META GENERATOR
  const generateMeta = (input) => {
    if (!input) return { title: "", alt_tag: "" };

    let name = input;

    if (input.startsWith("http")) {
      name = input.split("/").pop();
    }

    const clean = name
      .replace(/^\d+-/, "")
      .split(".")[0]
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return {
      title: clean,
      alt_tag: `Video testimonial of ${clean}`,
    };
  };

  // FETCH
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/testimonials"
      );
      setList(res.data);
    } catch {
      setMsg("Error loading testimonials");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "video_url") {
      const meta = generateMeta(value);

      setForm((prev) => ({
        ...prev,
        video_url: value,
        title: prev.title || meta.title,
        alt_tag: prev.alt_tag || meta.alt_tag,
      }));

      setPreview(value);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // FILE
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const meta = generateMeta(file.name);

    setForm((prev) => ({
      ...prev,
      video: file,
      title: prev.title || meta.title,
      alt_tag: prev.alt_tag || meta.alt_tag,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const removeVideo = () => {
    setForm((prev) => ({
      ...prev,
      video: null,
      video_url: "",
    }));
    setPreview(null);
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    let finalTitle = form.title;
    let finalAlt = form.alt_tag;

    if (!finalTitle || !finalAlt) {
      const source =
        form.video?.name ||
        form.video_url ||
        form.existingVideo;

      const meta = generateMeta(source);

      finalTitle = finalTitle || meta.title;
      finalAlt = finalAlt || meta.alt_tag;
    }

    const fd = new FormData();
    fd.append("title", finalTitle);
    fd.append("video_url", form.video_url || "");
    fd.append("alt_tag", finalAlt);

    if (form.video) {
      fd.append("video", form.video);
    } else if (form.existingVideo) {
      fd.append("video_path", form.existingVideo);
    }

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/testimonials/${editingId}`,
          fd,
          { headers: { Authorization: token } }
        );
        setMsg("Updated successfully");
      } else {
        await axios.post(
          "http://localhost:5000/api/testimonials",
          fd,
          { headers: { Authorization: token } }
        );
        setMsg("Added successfully");
      }

      resetForm();
      fetchData();
    } catch (err) {
      setMsg("Error: " + (err.response?.data || err.message));
    }
  };

  // RESET
  const resetForm = () => {
    setForm({
      title: "",
      video: null,
      existingVideo: "",
      video_url: "",
      alt_tag: "",
    });
    setPreview(null);
    setEditingId(null);
  };

  // EDIT
  const handleEdit = (item) => {
    setForm({
      title: item.title || "",
      video: null,
      existingVideo: item.video_path || "",
      video_url: item.video_url || "",
      alt_tag: "",
    });

    if (item.video_url) {
      setPreview(item.video_url);
    } else if (item.video_path) {
      setPreview(`http://localhost:5000${item.video_path}`);
    }

    setEditingId(item.id);
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;

    await axios.delete(
      `http://localhost:5000/api/testimonials/${id}`,
      { headers: { Authorization: token } }
    );

    fetchData();
  };

  return (
    <div className="admin-container">
      {msg && <div className="admin-alert">{msg}</div>}

      <div className="admin-page">
        <div className="admin-grid">
          {/* FORM */}
          <div className="admin-card">
            <h3 className="card-title">
              {editingId ? "Edit Testimonial" : "Add Testimonial"}
            </h3>

            <form onSubmit={handleSubmit}>
              <label>
                Title
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
              </label>

              <label>
                Video URL
                <input
                  name="video_url"
                  value={form.video_url}
                  onChange={handleChange}
                />
              </label>

              <label>
                Upload Video
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                />
              </label>

              {/* PREVIEW */}
              {preview && (
                <div style={{ margin: "10px 0", position: "relative" }}>
                  {form.video_url ? (
                    <iframe
                      src={preview}
                      width="100%"
                      height="200"
                      title={form.title}
                    />
                  ) : (
                    <video src={preview} controls width="100%" />
                  )}

                  <IoClose
                    onClick={removeVideo}
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "#722327",
                      color: "#fff",
                      borderRadius: "50%",
                      cursor: "pointer",
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
            <h3 className="card-title">All Testimonials</h3>

            {list.length === 0 ? (
              <p>No testimonials found</p>
            ) : (
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Video</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {list.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>

                        <td>
                          <a
                            href={
                              item.video_url
                                ? item.video_url
                                : `http://localhost:5000${item.video_path}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Video
                          </a>
                        </td>

                        <td>
                          <button onClick={() => handleEdit(item)}>
                            Edit
                          </button>
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
    </div>
  );
};

export default TestimonialsAdmin;