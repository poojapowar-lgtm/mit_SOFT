const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.static("public"));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/news", require("./routes/news"));
app.use("/api/events", require("./routes/events"));
app.use("/api/enquiry", require("./routes/enquiry"));
app.use("/api/members", require("./routes/members"));
app.use("/api/student-speak", require("./routes/studentSpeak"));
app.use("/api/recruiters", require("./routes/recruiters"));
app.use("/api/faculty", require("./routes/faculty"));
app.use("/api/research", require("./routes/research"));
app.use("/api/mou", require("./routes/mou"));
app.use("/api/placed-students", require("./routes/placedStudents"));
app.use("/api/alumni-startup", require("./routes/alumniStartup"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/testimonials", require("./routes/testimonials"));
app.use("/api/visitors", require("./routes/visitors"));
app.use("/api/visitors", require("./routes/visitors"));

app.listen(5000, () => console.log("Server running on port 5000"));

app.get("/", (req, res) => {
    res.json({
        status: "Server Running",
        project: "MIT Soft",
        port: 5000
    });
});