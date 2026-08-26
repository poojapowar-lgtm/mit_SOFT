import React from "react";
import "./about_mit.css";
import {
  FaGraduationCap,
  FaSeedling,
  FaMicroscope,
} from "react-icons/fa6";

const AboutMIT = () => {
  // const visionData = [
  //   {
  //     title: "Vision",
  //     paragraphs: [
  //       `MIT Art, Design and Technology University aspires to be the 
  //     University of Eminence by amalgamating Art, Design, Science and 
  //     Technology. The University aims at having a transformative impact 
  //     on society through holistic education, multi-disciplinary research 
  //     ethos, innovation and entrepreneurial culture.`,
  //     ],
  //   },
  //   {
  //     title: "Mission",
  //     paragraphs: [
  //       `The mission of MIT Art, Design and Technology University is to 
  //     provide impetus to faculty, learners and staff by developing their 
  //     innate intellectual capabilities, creative abilities and 
  //     entrepreneurial mind-set for the socio-economic development of the 
  //     nation.`,

  //       `We empower learners to become adaptive and agile global 
  //     professionals through unique specialized programs building 
  //     academia-industrial partnerships. We nurture learners to be 
  //     intellectually curious, technologically equipped, mentally sound, 
  //     physically fit, spiritually elevated, socio-culturally sensitive, 
  //     environmentally conscious through continuous holistic education 
  //     for the ever-evolving world.`,

  //       `We provide technology-enabled learner-driven curriculum, 
  //     value-added courses, simulated learning environments, 
  //     state-of-the-art infrastructure and opportunities for community 
  //     engagement.`,
  //     ],
  //   },
  // ];


  const visionData = [
    {
      title: "Vision",
      paragraphs: [
        `MIT Art, Design and Technology University aspires to be the University of Eminence by amalgamating Art, Design, Science and Technology. The University aims at having a transformative impact on society through holistic education, multi-disciplinary research ethos, innovation and entrepreneurial culture.`,
      ],
    },
    {
      title: "Mission",
      paragraphs: [
        `The mission of MIT Art, Design and Technology University is to provide impetus to faculty, learners and staff by developing their innate intellectual capabilities, creative abilities and entrepreneurial mind-set for the socio-economic development of the nation.`,

        `We empower learners to become adaptive and agile global professionals through unique specialized programs building academia-industrial partnerships. We nurture learners to be intellectually curious, technologically equipped, mentally sound, physically fit, spiritually elevated, socio-culturally sensitive, environmentally conscious through continuous holistic education for the ever-evolving world.`,

        `We provide technology-enabled learner-driven curriculum, value-added courses, simulated learning environments, state-of-the-art infrastructure and opportunities for community engagement.`,
      ],
    },
  ]

  const missionItems = [
    {
      icon: FaGraduationCap,
      text: visionData[1].paragraphs[0],
    },
    {
      icon: FaMicroscope,
      text: visionData[1].paragraphs[1],
    },
    {
      icon: FaSeedling,
      text: visionData[1].paragraphs[2],
    },
  ];


  return (
    <div className="aboutmit-container">
      <div className="title-line">
        <h2 className="innerpage-title">About Us</h2>
      </div>

      <div className="aboutmit-image">
        <img src="/assets/images/home/about1.avif" alt="About MIT-ADT University - MIT School of Food Technology" title="About MIT-ADT University" />
      </div>

      <p>
        MIT Art Design and Technology University (MIT ADT University), a leap
        towards world class education is established by the renowned MIT Group
        of Institutions. It is UGC recognized multi disciplinary University
        located on the 125 acres of campus at Raj Baugh, Loni Kalbhor, which was
        previously owned by late legendary actor of Indian Hindi Cinema Raj
        Kapoor. The University campus is an embodiment of peace, serenity and
        tranquility; aesthetically erected on the banks of Mula-Mutha river with
        its architecture ideation inspired from matrix of Saptarishi, Saptarang
        and Saptaswar. The magnificent world class state-of-the-art
        infrastructure with modern amenities with fully residential campus
        facility leads MIT ADT University to be one of the premium campuses.
      </p>
      <p>
        MIT ADT University is a multi disciplinary University which offers
        programs at under graduate, post graduate and doctorate level in Fine
        Art, Design conventional engineering branches in Information Technology,
        Computer Science and Engineering, Mechanical, Civil, Aerospace
        Engineering Management, Marine Engineering, Bioscience Engineering, Food
        Technology, Film and Television as well as Broadcasting and Journalism
        in education as well. Most of the programs are designed in such a way
        that they satisfy the current needs of the specific industry.
      </p>
      <p>
        With a vision of Holistic Development, the university has designed
        compulsory core credits to foster the complete campus transformation of
        students as winning personalities or corporate leaders, social
        transformer & nation builder. University level Mega Gala Events, Persona
        Fest & Vishwanath Sports Meet are known nationwide.
      </p>

      <div>


        <section className="vision-mission-section">
          <div className="vm-container">

            {/*VISION*/}

            <div className="vision-card">

              {/* Content */}
              <div className="vision-main-content">

                <div className="vm-heading">
                  <h2>{visionData[0].title}</h2>
                  <span></span>
                </div>

                <div className="vision-paragraph">
                  {visionData[0].paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

              </div>

            </div>


            {/*MISSION*/}

            <div className="mission-card">

              {/* Mission Content */}
              <div className="mission-main-content">

                <div className="vm-heading">
                  <h2>{visionData[1].title}</h2>
                  <span></span>
                </div>

                <div className="mission-content">

                  {missionItems.map((item, index) => {

                    const Icon = item.icon;

                    return (
                      <div className="mission-row" key={index}>

                        <div className="mission-row-icon-wrapper">
                          <Icon />
                        </div>

                        <div className="mission-row-content">
                          <p>{item.text}</p>
                        </div>

                      </div>
                    );

                  })}

                </div>

              </div>

            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMIT;
