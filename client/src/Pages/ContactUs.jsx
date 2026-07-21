import React, { useState } from "react";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import "./contact.css";


const ContactUs = () => {
    const boardData = [
        {
            title: "Address",
            desgination: "School of Food Technology, MANET hostel, <br/> Rajbaug Campus, Loni Kalbhor, Maharashtra 412201",
        },
        {
            title: "MIT-SoFT Virtual Number",
            desgination: "+91 9021080141",
        },
        {
            title: "Admission Email",
            desgination: "admissions.mitsoft@mituniversity.edu.in",
        },
        {
            title: "MIT-ADT Official Website",
            desgination: "www.mituniversity.ac.in",
        },
        {
            title: "MIT-ADT Virtual Number",
            desgination: "+91 9595124234",
        },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        course: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Submitted Successfully!");
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

                        <div className="board-body-container">
                            {boardData.map((item, index) => (
                                <div className="board-card" key={index}>
                                    <h3 className="board-name">{item.title}</h3>
                                    <p
                                        className="board-desg"
                                        dangerouslySetInnerHTML={{ __html: item.desgination }}
                                    ></p>
                                </div>
                            ))}
                        </div>


                        <form className="contact-form" >
                            
                            <h3 className="contact-title" style={{textAlign:"center"}}>Contact With US</h3>
                            <div className="form-grid">

                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Email ID</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Select Course</label>
                                    <select name="course" value={formData.course} onChange={handleChange}>
                                        <option value="" style={{color:"lightgray"}}>Select Course</option>
                                        <option>B.Tech Marine</option>
                                        <option>B.Sc Nautical</option>
                                        <option>Diploma Marine</option>
                                    </select>
                                </div>

                            </div>

                            <button className="btn submit-btn" type="submit" onSubmit={handleSubmit}>
                                Submit
                            </button>

                        </form>

                    </div>


                </div>
            </div>
        </>
    );
};

export default ContactUs;