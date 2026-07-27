import React from "react";
import "./LifeAtCampus.css";

const LifeAtCampus = () => {
  return (
    <section className="life-campus">
      {/* Title */}


      <div className="campus-content">
        {/* Left Side */}
        <div className="campus-left">
          <h2 className="title">MIT-ADT School of Food Technology</h2>
          <p>
            In 2006 with the vision to build talent and usher India ahead in the crucial food processing sector as per the guidelines of Maharashtra Council of Agricultural Education and Research, Pune (MCAER)
          </p>
          <p>
            The institute has a mandate to develop need base and global competitive students' entrepreneurship. The three-phase higher education system comprising Graduation (B. Tech), Post-graduation (M. Tech) and Ph. D. Tech. (Food Tech) is one of its kind in the private education domain of Food Science and and Technology discipline.....
          </p>
          <ul className="page-list">
            <li>The need base Infrastructure</li>
            <li>Well-equipped laboratories</li>
            <li>Comfortable and well-furnished classrooms</li>
            <li>Pilot processing plants</li>
          </ul>
          <button className="btn" id="campus-btn">
            Life At Campus
          </button>
        </div>

        {/* Right Side Image */}
        <div className="campus-image">
          <img src="/assets/images/home/banner1.jpg" alt="Campus Life" />
        </div>
      </div>
    </section>
  );
};

export default LifeAtCampus;
