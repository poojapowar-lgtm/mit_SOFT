import React from "react";
import "./board_body.css";

const boardData = [
  {
    title: "Prof. Dr. Rajesh Siddavatam",
    desgination: "Vice Chancellor MIT-ADT University",
  },
  {
    title: "Prof. Dr. Mangesh Karad",
    desgination:
      "President MAEER Pune, <br/> Governing Body nominated by Sponsoring Body",
  },
  {
    title: "Shri. Yinayak Ghaisas",
    desgination:
      "Member Trustee MAEER Pune, <br/> Governing Body nominated. by Sponsoring Body",
  },
  {
    title: "Dr. Sunita Karad",
    desgination:
      "Executive Director, MIT-ADT University, <br/> Governing Body Nominated by the Sponsoring Body",
  },
  {
    title: "Mrs. Jyoti Dhakane",
    desgination:
      "Member Trustee MAEER Pune, <br/> Governing Body Nominated by the Sponsoring Body",
  },
  {
    title: "Mrs. Swati Chate",
    desgination:
      "Member Trustee & Secretary General MAEER Pune, <br/> Governing Body Nominated by the Sponsoring Body",
  },
  {
    title: "Dr. Ashwini Pethe",
    desgination:
      "Dean Faculty of Architecture Planning MIT-ADT University, <br/> Deans of the university, nominated by the Vice Chancellor",
  },
  {
    title: "Dr. Dandeswar Bisoyi",
    desgination:
      "Associate Dean, Faculty of Design MIT-ADT University, <br/> Deans of the university, nominated by the Vice Chancellor",
  },
  {
    title: "Dr. Atul Patil",
    desgination:
      "Professor, School of Humanities MIT-ADT University, <br/> Teachers nominated by the Sponsoring Body",
  },
  {
    title: "Dr. Nagesh Jadhav",
    desgination:
      "Professor, School of Computing MIT-ADT University,<br/> Teachers nominated by the Sponsoring Body",
  },
  {
    title: "Dr. Sangeeta Phunde",
    desgination:
      "Associate Professor, College of Management and Computer Applications, <br/> Teachers nominated by the Sponsoring Body, MIT-ADT University",
  },
  {
    title: "Prof. Dr. Sunil Rai",
    desgination:
      "Chancellor, UPES University, Dehradun, <br/> Members - External Invitee",
  },
  {
    title: "Dr. Sayalee Gankar",
    desgination: "Provost, MIT-ADT University, <br/> - Internal Invitee",
  },
  {
    title: "Dr. Ramchandra Pujeri",
    desgination:
      "Pro-Vice Chancellor, MIT-ADT University,<br/> - Internal Invitee",
  },
  {
    title: "Dr. Mohit Dubey",
    desgination:
      "Pro-Vice Chancellor, MIT-ADT University,<br/> - Internal Invitee",
  },
  {
    title: "Dr. Dnyandeo Neelwarna",
    desgination:
      "Controller of Examinations, MIT-ADT University <br/>- Internal Invitee",
  },
  {
    title: "Ms. Nayana Godse",
    desgination:
      "Chief Finance & Accounts Officer, MIT-ADT University, <br/> - Internal Invitee",
  },
  {
    title: "Dr. Mahesh Chopade",
    desgination: "Registrar, MIT-ADT University, <br/> Member Secretary",
  },
];

const Board_Body = () => {
  return (
    <>
      <h2 className="innerpage-title">Board of Management</h2>
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
    </>
  );
};

export default Board_Body;
