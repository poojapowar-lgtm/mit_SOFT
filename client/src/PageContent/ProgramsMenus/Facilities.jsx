import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Facilities = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      title: "Food Process and Product Technology Laboratory (FPPT)",
      image: "/images/vision.jpg",
      content: (
        <>
          <p>
            The Department aims of promoting innovation in food sector and catalyzing the growth of food processing industry in India and in global context. The existing infrastructure of Food Product and Process Technology laboratory is competent enough to satisfy the need of undergraduate in various aspects. As a part of this the department has research programs (M. Tech and Ph.D.) in frontline areas of Food Science and Technology. To pursue excellence in education and research in specialized areas of Food technology relevant to the
          </p>
          <p>sustainable development of process industries requires more competent technology in these core areas. With well-equipped laboratories, and active industry collaborations, the department emphasizes research, innovation, entrepreneurship, and the development of processed foods ex. functional and fortified foods to meet evolving consumer and industry needs.</p>
        </>
      ),
    },
    {
      title: "Food Safety and Quality Nutrition (FSQN) - Food Chemistry Laboratory",
      image: "/images/mission.jpg",
      content: (
        <>
          <p>
            A Food Chemistry Lab is a specialized facility where scientific experiments are conducted to understand the chemical composition and properties of food, as well as the effects of processing, storage, and other factors on food quality. These labs typically focus on analysing the nutrients and other compounds such as allergen, antinutritional factors that affect food safety, nutrition, and taste. As consumer demands for healthier, more natural, and environmentally conscious food options grow, food chemistry will continue to evolve to meet these needs.
          </p>
        </>
      ),
    },
    {
      title: "Food Safety and Quality Nutrition (FSQN) - Food Microbiology Laboratory",
      image: "/images/mission.jpg",
      content: (
        <>
          <p>Food microbiology labs are integral to the food industry and public health, providing crucial information that affects the safety, quality and sustainability of food production. From detecting pathogens and spoilage organisms to advancing fermentation processes and preserving food, these labs ensure that the food we consume is safe, nutritious, and of high quality. By fostering research, innovation, and education in food microbiology, these labs contribute to improving global food systems and minimizing health risks associated with foodborne diseases.
          </p>
        </>
      ),
    },
    {
      title: "Patronage of Traditional Specialty Food Laboratory",
      image: "/images/mission.jpg",
      content: (
        <>
          <p>The Traditional and Specialty Foods Laboratory at the School of Food Technology is a dedicated facility for hands-on training in the preparation, processing, and evaluation of traditional, specialty, and heritage food products. It supports practical work for courses such as Traditional Foods, Specialty Foods, Indian Heritage Foods, and New Product Development. The lab is equipped with modern food preparation and processing tools that enable students to standardize recipes, develop innovative products, and study region-specific
          </p>
          <p>food techniques. Students gain experiential learning in product formulation, sensory evaluation, and value addition while preserving traditional knowledge. This laboratory serves as a platform to integrate cultural food heritage with scientific product development approaches.</p>
        </>
      ),
    },
    {
      title: "M. Tech. Research Laboratory",
      image: "/images/mission.jpg",
      content: (
        <>
          <p>The Department aims of promoting innovation in food sector and catalyzing the growth of food processing industry in India and in global context. The existing infrastructure of Food Product and Process Technology laboratory is competent enough to satisfy the need of undergraduate in various aspects. As a part of this the department has research programs (M. Tech and Ph.D.) in frontline areas of Food Science and Technology. To pursue excellence in education and research in specialized areas of Food technology relevant to the
          </p>
          <p>sustainable development of process industries requires more competent technology in these core areas. With well-equipped laboratories, and active industry collaborations, the department emphasizes research, innovation, entrepreneurship, and the development of processed foods ex. functional and fortified foods to meet evolving consumer and industry needs.</p>
        </>
      ),
    },
    {
      title: "Agrobase Plant Laboratory",
      image: "/images/mission.jpg",
      content: (
        <>
          <p>The Department of Agrobase Plant Operations provides hands-on practical training in food processing and value addition of agricultural commodities. Students gain experiential learning through operations such as cleaning, grading, milling, extraction, fermentation, thermal processing, and innovative product formulation. The department focuses on transforming raw materials into diversified, nutritionally enhanced, and market-ready food products. Emphasis is placed on quality control, process optimization, and pilot-scale
          </p>
          <p>production to simulate industrial practices. The facility bridges theoretical concepts with real-time applications while fostering technical competence and entrepreneurial skills.</p>
        </>
      ),
    },
    {
      title: "Computer Lab",
      image: "/images/mission.jpg",
      content: (
        <>
          <p>The Computer Laboratory of the Food College is well-equipped with modern computer systems and high-speed internet connectivity to support academic and research activities. The lab is designed to facilitate practical sessions related to data analysis, food process modelling, statistical software applications, and research work. It provides access to essential software tools required for food technology studies, project work, and report preparation. The laboratory offers a conducive learning environment that enhances
          </p>
          <p>students’ technical skills and digital proficiency in the field of food science and technology.</p>
        </>
      ),
    },
  ];

  return (
    <div>
      <h3 className="innerpage-subtitle">Facilities:</h3>

      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${activeIndex === index ? "active" : ""
              }`}
            onClick={() => toggleAccordion(index)}
          >
       
              <span className="vision-icon">
                <MdKeyboardDoubleArrowRight />
              </span>
              <h4 className="accordion-title">{item.title}</h4>
         
          </div>

          {activeIndex === index && (
            <div className="accordion-content">
              <div className="accordion-content-wrapper">
                <div className="accordion-content">
                  {item.content}
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="accordion-image"
                />
              </div>
            </div>

          )}
        </div>
      ))}
    </div>
  );
};

export default Facilities;