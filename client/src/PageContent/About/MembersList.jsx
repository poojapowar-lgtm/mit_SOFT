import React, { useEffect, useState } from "react";
import "./board_body.css"
import axios from "axios";

const MembersList = ({ type, title }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, [type]);

const fetchMembers = async () => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/members?type=${type}`
    );

    setMembers(res.data.reverse()); // reverse once here
  } catch (err) {
    console.error(err);
  }
};

  return (
    <>
      <h2 className="innerpage-title">{title}</h2>

      <div className="board-body-container">
        {members.length === 0 ? (
          <p>No members available</p>
        ) : (
          members.map((item) => (
            <div className="board-card" key={item.id}>
              <h3 className="board-name">{item.name}</h3>
              <p className="board-desg">{item.designation}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default MembersList;