import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Department.css";

const Department = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const departments = [
    {
      img: "/assets/images/departments/Vector.svg",
      title: "Food Process & Product Technology",
    },
    {
      img: "/assets/images/departments/Vector1.svg",
      title: "Food Safety, Quality & Nutrition",
    },
    {
      img: "/assets/images/departments/Vector2.svg",
      title: "Food Process & Product Engineering",
    },
    {
      img: "/assets/images/departments/Vector3.svg",
      title: "Agrobase Plant Operation",
    },
    {
      img: "/assets/images/departments/Vector4.svg",
      title: "Food Business Mgmt. & Entrepreneurship Development",
    },
    {
      img: "/assets/images/departments/Vector6.svg",
      title: "Ethical Science &  Food Technology",
    },
    {
      img: "/assets/images/departments/Vector5.svg",
      title: "Patronage of Traditional & Specialty Foods",
    },
  ];

  return (
    <section className="department-section">
      <h2 className="title">Our Departments</h2>

      <div className="scroll-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="department-container" ref={scrollRef}>
          {departments.map((dept, index) => (
            <div className="department-card" key={index}>
              <img className="dep-images" src={dept.img} alt={dept.title} />
              <h3 className="dep-name">{dept.title}</h3>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Department;