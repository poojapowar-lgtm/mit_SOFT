import React from "react";
import "./LifeAtCampus.css";

const LifeAtCampus = () => {
  return (
    <section className="life-campus">
      {/* Title */}


      <div className="campus-content">
        {/* Left Side */}
        <div className="campus-left">
          <h2 className="title">School of Food Technology </h2>
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
        {/* <div className="campus-image">
          <img src="/assets/images/home/banner1.jpg" alt="Campus Life at MIT School of Food Technology" title="Life at MIT School of Food Technology" />
        </div> */}
        <div className="campus-image-grid">
          <div className="campus-img campus-img-1">
            <img
              src="/assets/images/home/soft1.jpg"
              alt="Campus Life at MIT School of Food Technology"
              title="Life at MIT School of Food Technology"
            />
          </div>

          <div className="campus-img campus-img-2">
            <img
              src="/assets/images/home/soft2.webp"
              alt="MIT School of Food Technology Campus"
              title="MIT School of Food Technology Campus"
            />
          </div>

          <div className="campus-img campus-img-3">
            <img
              src="/assets/images/home/soft3.jfif"
              alt="Student Life at MIT School of Food Technology"
              title="Student Life at MIT School of Food Technology"
            />
          </div>

          <div className="campus-img campus-img-4">
            <img
              src="/assets/images/home/soft4.jfif"
              alt="Facilities at MIT School of Food Technology"
              title="Facilities at MIT School of Food Technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtCampus;
