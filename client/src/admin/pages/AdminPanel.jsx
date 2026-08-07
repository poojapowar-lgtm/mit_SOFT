import React, { useEffect, useState } from "react";
import CountUp from "./CountUp";
import axios from "axios";

// Icons (more meaningful)
import { FaNewspaper, FaUsers, FaUserTie } from "react-icons/fa";
import { PiCalendarCheckFill, PiStudentFill } from "react-icons/pi";
import { TbMailFilled, TbMessageCircle } from "react-icons/tb";
import { MdSchool, MdScience, MdHandshake } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { BsBuildingFillCheck } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const AdminPanel = () => {
  const navigate = useNavigate();

  const [counts, setCounts] = useState({
    news: 0,
    events: 0,
    enquiries: 0,
    members: 0,
    studentSpeak: 0,
    recruiters: 0,
    faculty: 0,
    research: 0,
    mou: 0,
    placedStudents: 0,
    alumniStartup: 0,
    contact: 0,
    testimonials: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/dashboard",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setCounts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // Updated icons mapping
  const dashboardData = [
    { title: "Total News", count: counts.news, icon: <FaNewspaper />, path: "/admin/news" },
    { title: "Total Events", count: counts.events, icon: <PiCalendarCheckFill />, path: "/admin/events" },
    { title: "Total Enquiries", count: counts.enquiries, icon: <TbMailFilled />, path: "/admin/enquiry" },
    { title: "Total Members", count: counts.members, icon: <FaUsers />, path: "/admin/members" },
    { title: "Student Speak", count: counts.studentSpeak, icon: <TbMessageCircle />, path: "/admin/student-speak" },
    { title: "Testimonials", count: counts.studentSpeak, icon: <TbMessageCircle />, path: "/admin/testimonials" },
    { title: "Recruiters", count: counts.recruiters, icon: <BsBuildingFillCheck />, path: "/admin/recruiters" },
    { title: "Faculty Information", count: counts.faculty, icon: <FaUserTie />, path: "/admin/faculty" },
    { title: "Research Data", count: counts.research, icon: <MdScience />, path: "/admin/research" },
    { title: "MOU Data", count: counts.mou, icon: <MdHandshake />, path: "/admin/mou" },
    { title: "Placed Students", count: counts.placedStudents, icon: <GiGraduateCap />, path: "/admin/placed-students" },
    { title: "Alumni Startup", count: counts.alumniStartup, icon: <MdSchool />, path: "/admin/alumni-startup" },
    { title: "Contact Form", count: counts.contact, icon: <TbMailFilled />, path: "/admin/contact" },
  ];

  return (
    <div className="admin-page">
      <div className="dashboard-container">
        {dashboardData.map((item, index) => (
          <div className="dashboard-card" key={index}>

            <div className="dcard-content">
              <div className="dcard-icon">{item.icon}</div>

              <div className="dcard-text-box">
                <h3 className="dcard-title">{item.title}</h3>
                <p className="dcard-count">
                  <CountUp value={item.count} />
                </p>
              </div>
            </div>

            <button
              className="dcard-btn"
              onClick={() => navigate(item.path)}
            >
              <PiDotsThreeOutlineFill />
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;