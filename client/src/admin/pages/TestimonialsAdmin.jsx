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
  });

  const [preview, setPreview] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState("");

  const token = localStorage.getItem("token");

  // ================= META / TITLE GENERATOR =================
  const generateTitle = (input) => {
    if (!input) return "";

    let name = input;

    if (input.startsWith("http")) {
      name = input.split("/").pop();
    }

    return name
      .replace(/^\d+-/, "")
      .split(".")[0]
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // ================= FETCH =================
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/testimonials"
      );

      setList(res.data);
    } catch (error) {
      console.error(error);
      setMsg("Error loading testimonials");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= INPUT =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "video_url") {
      setForm((prev) => ({
        ...prev,
        video_url: value,
        title: prev.title || generateTitle(value),
      }));

      setPreview(value);
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // ================= VIDEO FILE =================
  const handleVideoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setForm((prev) => ({
      ...prev,
      video: file,
      title: prev.title || generateTitle(file.name),
    }));

    setPreview(URL.createObjectURL(file));
  };

  // ================= REMOVE VIDEO =================
  const removeVideo = () => {
    setForm((prev) => ({
      ...prev,
      video: null,
      video_url: "",
      existingVideo: "",
    }));

    setPreview(null);
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    let finalTitle = form.title;

    // Generate title automatically if empty
    if (!finalTitle) {
      const source =
        form.video?.name ||
        form.video_url ||
        form.existingVideo;

      finalTitle = generateTitle(source);
    }

    const fd = new FormData();

    fd.append("title", finalTitle);
    fd.append("video_url", form.video_url || "");

    // IMPORTANT:
    // Do NOT append alt_tag because the database
    // testimonials table does not have this column.

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
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setMsg("Updated successfully");
      } else {
        await axios.post(
          "http://localhost:5000/api/testimonials",
          fd,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setMsg("Added successfully");
      }

      resetForm();
      fetchData();
    } catch (err) {
      console.error(err);

      setMsg(
        "Error: " +
        (err.response?.data || err.message)
      );
    }
  };

  // ================= RESET =================
  const resetForm = () => {
    setForm({
      title: "",
      video: null,
      existingVideo: "",
      video_url: "",
    });

    setPreview(null);
    setEditingId(null);
  };

  // ================= EDIT =================
  const handleEdit = (item) => {
    setForm({
      title: item.title || "",
      video: null,
      existingVideo: item.video_path || "",
      video_url: item.video_url || "",
    });

    if (item.video_url) {
      setPreview(item.video_url);
    } else if (item.video_path) {
      setPreview(
        `http://localhost:5000${item.video_path}`
      );
    } else {
      setPreview(null);
    }

    setEditingId(item.id);
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this testimonial?")) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:5000/api/testimonials/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setMsg("Deleted successfully");
      fetchData();
    } catch (error) {
      console.error(error);

      setMsg(
        "Error: " +
        (error.response?.data || error.message)
      );
    }
  };

  return (
    <div className="admin-page">

      {msg && (
        <div className="admin-alert">
          {msg}
        </div>
      )}

      <div className="admin-grid">

        {/* ================= FORM ================= */}
        <div className="admin-card">

          <h3 className="card-title">
            {editingId
              ? "Edit Testimonial"
              : "Add Testimonial"}
          </h3>

          <form onSubmit={handleSubmit}>

            {/* TITLE */}
            <label>
              Title

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </label>

            {/* VIDEO URL */}
            <label>
              Video URL

              <input
                name="video_url"
                value={form.video_url}
                onChange={handleChange}
                placeholder="Enter video URL"
              />
            </label>

            {/* VIDEO UPLOAD */}
            <label>
              Upload Video

              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
              />
            </label>

            {/* VIDEO PREVIEW */}
            {preview && (
              <div
                style={{
                  margin: "10px 0",
                  position: "relative",
                }}
              >
                {form.video_url ? (
                  <iframe
                    src={preview}
                    width="100%"
                    height="200"
                    title={
                      form.title ||
                      "Video testimonial"
                    }
                    style={{
                      border: "none",
                    }}
                  />
                ) : (
                  <video
                    src={preview}
                    controls
                    width="100%"
                    style={{
                      maxHeight: "220px",
                    }}
                  />
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

            {/* SUBMIT */}
            <button
              className="form-btn"
              type="submit"
            >
              {editingId
                ? "Update Testimonial"
                : "Add Testimonial"}
            </button>

          </form>

        </div>

        {/* ================= TABLE ================= */}
        <div className="admin-card">

          <h3 className="card-title">
            All Testimonials
          </h3>

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

                      {/* TITLE */}
                      <td>
                        {item.title}
                      </td>

                      {/* VIDEO */}
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

                      {/* ACTION */}
                      <td>

                        <button
                          onClick={() =>
                            handleEdit(item)
                          }
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(item.id)
                          }
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

export default TestimonialsAdmin;