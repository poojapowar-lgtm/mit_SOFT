import React from "react";

const govboardData = [
  {
    title: "Prof. Dr. Vishwanath D. Karad",
    desgination:
      "Founder Trustee & Chief Patron, MAEER'S MIT Group of Institutions Pune & Founder President, MIT-ADT University, Pune",
  },
  {
    title: "Prof. Dr. Mangesh T. Karad",
    desgination:
      "Pro-Chancellor & Executive President MIT-ADT University, Pune",
  },
  {
    title: "Prof. Rahul Karad",
    desgination: "Executive President MAEER'S MIT Pune",
  },
  {
    title: "Dr. Suchitra Nagare",
    desgination: "Trustee MAEER'S MIT Pune",
  },
  {
    title: "Dr. Mahendra Ranjekar",
    desgination: "Technical Director Green Vitals Biotech, Bhor, Pune",
  },
  {
    title: "Shri. Sanjay Kulkarni",
    desgination:
      "Member Trustee & Secretary General MAEER Pune, Governing Body Nominated by the Sponsoring Body",
  },
  {
    title: "Dr. Ashwini Pethe",
    desgination:
      "Dean Faculty of Architecture Planning MIT-ADT University, Deans of the university, nominated by the Vice Chancellor",
  },
  {
    title: "Dr. Dandeswar Bisoyi",
    desgination: "President, Fleetguard Filters Pvt. Ltd. Pune",
  },
  {
    title: "Prof. Dr. G. D Yadav",
    desgination:
      "Former Vice Chancellor Institute of Chemical Technology (ICT), Mumbai",
  },
  {
    title: "Prof. Dr. Rajesh S",
    desgination: "Vice Chancellor MIT- ADT University, Pune",
  },
  {
    title: "Prof. Prakash Joshi ",
    desgination: "Trustee MAEER, Pune",
  },
  {
    title: "Shri. Vinayak Ghaisas",
    desgination: "Director SBSR",
  },
  {
    title: "Mr. Munir Sayyed",
    desgination: "Asst. Vice President Reliance Jio Labs, Mumbai",
  },
  {
    title: "Dr. A S Kiran Kumar ",
    desgination: "Former Chairman, Indian Space Research Organisaton (ISRO)",
  },
  {
    title: "Prof. Dr. Mahesh Chopade",
    desgination: "Member Secretary & Registrar MIT-ADT University, Pune",
  },
];

const Governing_Body = () => {
  return (
    <>
      <h2 className="innerpage-title">Governing Body</h2>
      <div className="board-body-container">
        {govboardData.map((item, index) => (
          <div className="board-card" key={index}>
            <h3 className="board-name">{item.title}</h3>
            <p
              className="board-desg"
              dangerouslySetInnerHTML={{ __html: item.desgination }}
            ></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Governing_Body;
