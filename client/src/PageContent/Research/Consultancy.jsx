import React from "react";

const Consultancy = () => {
  const consultancyData = [
    {
      name: "Dr. P. D. Shere",
      project: "Amala Candy Consultancy Project",
      amount: "Rs.28,000"
    },
  ];

  return (
    <div className="consultancy-container">
      <h2 className="innerpage-title">Consultancy Areas</h2>

      <div className="table-responsive">
        <h3 className="table-title">Consultancy project 24-25</h3>
        <table className="common-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name of Faculty</th>
              <th>Project name</th>
              <th>Amount Received for Research</th>
            </tr>
          </thead>
          <tbody>
            {consultancyData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td> {/* Auto Increment */}
                <td>{item.name}</td>
                <td>{item.project}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Consultancy;