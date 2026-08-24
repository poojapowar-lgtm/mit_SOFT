import React from "react";
import "./about_mit.css";

const AboutMIT = () => {
  const visionData = [
    {
      title: "Vision",
      paragraphs: [
        `MIT Art, Design and Technology University aspires to be the 
      University of Eminence by amalgamating Art, Design, Science and 
      Technology. The University aims at having a transformative impact 
      on society through holistic education, multi-disciplinary research 
      ethos, innovation and entrepreneurial culture.`,
      ],
    },
    {
      title: "Mission",
      paragraphs: [
        `The mission of MIT Art, Design and Technology University is to 
      provide impetus to faculty, learners and staff by developing their 
      innate intellectual capabilities, creative abilities and 
      entrepreneurial mind-set for the socio-economic development of the 
      nation.`,

        `We empower learners to become adaptive and agile global 
      professionals through unique specialized programs building 
      academia-industrial partnerships. We nurture learners to be 
      intellectually curious, technologically equipped, mentally sound, 
      physically fit, spiritually elevated, socio-culturally sensitive, 
      environmentally conscious through continuous holistic education 
      for the ever-evolving world.`,

        `We provide technology-enabled learner-driven curriculum, 
      value-added courses, simulated learning environments, 
      state-of-the-art infrastructure and opportunities for community 
      engagement.`,
      ],
    },
  ];

  return (
    <div className="aboutmit-container">
      <div className="title-line">
        <h2 className="innerpage-title">About Us</h2>
      </div>
      {/* <h2 className="innerpage-title">About MIT-ADT University</h2> */}

      <div className="aboutmit-image">
        <img src="/assets/images/home/inner_bnr.jpg" alt="About MIT-ADT University - MIT School of Food Technology" title="About MIT-ADT University" />
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

        <div className="vision-cards">
          {visionData.map((item, index) => (
            <div className="vision-text" key={index}>

              <h3 className="v-title">
                {item.title}
              </h3>

              <div className="vision-content">
                {item.paragraphs.map((paragraph, i) => (
                  <p key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMIT;
