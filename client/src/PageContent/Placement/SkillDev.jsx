import React from "react";
import "./skill.css";

const SkillDev = () => {

  const section1 = [
    "School of Food Technology conducted a Pre-Placement Group Discussion and Professional Skill Development Session for the final-year M.Tech. Food Technology and Food Safety & Quality Management (FSQM) students.",
    "Name of Session : Pre-placement Group Discussion & Professional skill",
    "Conducted By : SCIL Expert Team",
    "Name of Session Expert/Trainer : Prof. Anuradha Swain, Practice Leader – Professional Skills",
    "The session is specially conducted for M.Tech students to prepare them for Group Discussion (GD) rounds and to enhance their professional skills. The training will include practice through mind games, discussion on current and expected GD topics, and insights into what industry HR professionals expect during GD rounds. The session also aims to build leadership qualities, initiative-taking ability, confidence, teamwork, and professional manners among students."
  ];

  const section2 = [
    "A career advancement special session was organized as part of the Group discussion and mock personal interview practice for M.Tech.Food Technology and FSQM students in preparation for the upcoming Döhler India Placement Drive for the position of Specialist – Product Documentation.",
    "The session was well-received and effectively conducted by the SCIL Expert team. Students appreciated the effort and found the experience valuable for their upcoming placement process. The interactive format and expert feedback contributed significantly to students' readiness and self-assurance"
  ];

  const section3 = [
    "A special Soft Skills & Career Readiness and Behavioral Skills session was conducted by the expert team from MIT School of Corporate Innovation & Leadership (SCIL). The session was led by Ms. Sherin Mathew, an experienced corporate trainer and skill development expert, with the objective of enhancing students’ professional competencies and industry preparedness.",
    "The session focused on developing essential employability skills required in today’s competitive corporate environment."
  ];

  const keyAreas = [
    "Effective communication skills",
    "Professional etiquette and workplace behavior",
    "Personality development and confidence building",
    "Teamwork and leadership qualities",
    "Interview techniques and career planning",
    "Emotional intelligence and positive attitude"
  ];

  const images1 = [
    { src: "/assets/images/skills-1.png", alt: "Pre-Placement Group Discussion Session - MIT SoFT", title: "Pre-Placement Group Discussion" },
    { src: "/assets/images/skills-2.png", alt: "Professional Skill Development Session - MIT SoFT", title: "Professional Skill Development" },
  ];

  const images2 = [
    { src: "/assets/images/skills-3.png", alt: "Mock Personal Interview Practice - MIT SoFT", title: "Mock Personal Interview Practice" },
    { src: "/assets/images/skills-4.png", alt: "Group Discussion Practice for Placement - MIT SoFT", title: "Group Discussion Practice" },
  ];

  const images3 = [
    { src: "/assets/images/skills-5.png", alt: "Soft Skills and Career Readiness Session - MIT SoFT", title: "Soft Skills and Career Readiness" },
    { src: "/assets/images/skills-6.png", alt: "Behavioral Skills Training Session - MIT SoFT", title: "Behavioral Skills Training" },
  ];

  const renderList = (data) => (
    <ul className="page-list">
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const renderImages = (imageList) => (
    <div className="skill-image-wrapper">
      {imageList.map((img, i) => (
        <img key={i} src={img.src} alt={img.alt} title={img.title} />
      ))}
    </div>
  );

  return (
    <div className="skill-container">
      <h2 className="innerpage-title">Skill Development Program</h2>
      <div className="skill-grid">
        {renderList(section1)}
        {renderImages(images1)}

        {renderList(section2)}
        {renderImages(images2)}



        {renderList(section3)}


        <h3 className="innerpage-subtitle">
          Key areas covered during the session included:
        </h3>
        {renderList(keyAreas)}
        {renderImages(images3)}
      </div>
    </div>
  );
};

export default SkillDev;