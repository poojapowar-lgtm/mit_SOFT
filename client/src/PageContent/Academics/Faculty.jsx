import React, { useEffect, useState } from "react";
import axios from "axios";
import "./faculty.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/faculty")
      .then((res) => setFaculty(res.data))
      .catch(() => console.log("Error fetching data"));
  }, []);

  return (
    <>
      <h2 className="innerpage-title">Faculty Members</h2>

      <div className="faculty-container">
        {[...faculty].reverse().map((item) => (
          <div
            className="faculty-card"
            key={item.id}
            onClick={() => setSelectedFaculty(item)}
          >
            <div className="faculty-img">
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                alt={item.name}
              />
            </div>

            <div className="faculty-content">
              <h4 className="faculty-name">{item.name}</h4>
              <div className="designation-row">
                <p><strong>{item.designation}</strong></p>

                <div className="hover-icon">
                  <MdOutlineKeyboardDoubleArrowRight />
                </div>
              </div>
            </div>


          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedFaculty && (
        <div className="faculty-modal">
          <div className="modal-content">

            <div className="close-btn" onClick={() => setSelectedFaculty(null)}>
              <IoMdCloseCircle />
            </div>
            <img
              src={`http://localhost:5000/uploads/${selectedFaculty.image}`}
              alt={selectedFaculty.name}
              className="modal-img"
            />

            <h4 className="names">{selectedFaculty.name}</h4>
            <p><strong>{selectedFaculty.designation}</strong></p>
            <p>{selectedFaculty.area_of_expertise}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Faculty;