import React from "react";
import "./programs.css";

const FutureScope = ({ title, description, description2, list, list2 }) => {
  return (
    <div>
      <div className="future-container">

        {title && <h2 className="innerpage-title">{title}</h2>}

        <div className="row-lists">

          {description && (
            <div className="scope-card">
              <h3 className="innerpage-subtitle">
                Future Scope & Importance:
              </h3>
              <p>{description}</p>
            </div>
          )}

          {list?.length > 0 && (
            <div className="scope-card">
              <h3 className="innerpage-subtitle">
                Graduates are highly employable in:
              </h3>

              <ul className="page-list">
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {list2?.length > 0 && (
            <div className="scope-card">
              <h3 className="innerpage-subtitle">
                Common Job Positions:
              </h3>

              <ul className="page-list">
                {list2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {description2 && (
            <div className="scope-card">
              <h3 className="innerpage-subtitle">
                Placement Prospects:
              </h3>
              <p>{description2}</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default FutureScope;
