import React, { useState } from "react";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import axios from "axios";
import "./contact.css";

const ContactUs = () => {
    const boardData = [
        {
            title: "Address",
            desc:
                "School of Food Technology, MANET hostel,\nRajbaug Campus, Loni Kalbhor, Maharashtra 412201",
        },
        {
            title: "MIT-SoFT Virtual Number",
            desc: "+91 9021080141",
        },
        {
            title: "Admission Email",
            desc: "admissions.mitsoft@mituniversity.edu.in",
        },
        {
            title: "MIT-ADT Official Website",
            desc: "www.mituniversity.ac.in",
        },
        {
            title: "MIT-ADT Virtual Number",
            desc: "+91 9595124234",
        },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        course: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await axios.post(
                "http://localhost:5000/api/contact",
                formData
            );

            alert(res.data);

            // Reset form
            setFormData({
                name: "",
                email: "",
                mobile: "",
                course: "",
            });

        } catch (err) {
            console.error(err);
            alert("Submission failed ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <InnerBanner
                bgImage="/assets/images/home/inner_bnr.jpg"
                title="Contact Us"
            />

            <div className="page-layout">
                <div className="page-content">

                    <h2 className="innerpage-title">Connect with Us</h2>

                    <div className="contact-wrapper">

                        {/* Left Info Cards */}
                        <div className="board-body-container">
                            {boardData.map((item, index) => (
                                <div className="board-card" key={index}>
                                    <h3 className="board-name">{item.title}</h3>
                                    <p
                                        className="board-desg"
                                        dangerouslySetInnerHTML={{ __html: item.desc }}
                                    ></p>
                                </div>
                            ))}
                        </div>

                        {/* Contact Form */}
                        {/* <form className="contact-form" onSubmit={handleSubmit}>

                            <h3 className="contact-title" style={{ textAlign: "center" }}>
                                Contact With Us
                            </h3>

                            <div className="form-grid">


                                <div className="form-group">
                                    <label>Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <div className="form-group">
                                    <label>Email ID *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <div className="form-group">
                                    <label>Mobile Number *</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Enter 10-digit mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        pattern="[0-9]{10}"
                                        required
                                    />
                                </div>


                                <div className="form-group">
                                    <label>Select Course *</label>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Course</option>
                                        <option value="B. Tech. (Food Technology)">
                                            B. Tech. (Food Technology)
                                        </option>
                                        <option value="Direct 2nd Year B. Tech">
                                            Direct 2nd Year B. Tech.
                                        </option>
                                        <option value="M. Tech. (Food Technology)">
                                            M. Tech. (Food Technology)
                                        </option>
                                        <option value="M. Tech. (Food Safety)">
                                            M. Tech. (Food Safety)
                                        </option>
                                        <option value="M. Tech. Working Professional">
                                            M. Tech. Working Professional
                                        </option>
                                        <option value="Ph. D. (Food Technology)">
                                            Ph. D. (Food Technology)
                                        </option>
                                    </select>
                                </div>

                            </div>


                            <button
                                className="btn submit-btn"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>

                        </form> */}

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;