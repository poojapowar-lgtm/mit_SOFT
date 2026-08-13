import React from "react";
import { useParams } from "react-router-dom";
import AboutProgram from "../ProgramsMenus/AboutProgram";

const AboutProgramPage = () => {
  const { programId } = useParams();

  const programs = {
    "btech-food-technology": {
      title: "B. Tech. (Food Technology)",
      image: "/assets/images/programs/B.Tech.jpg",
      description: [
        "The B.Tech. in Food Technology is a four-year undergraduate program designed to develop technically competent professionals for the food processing and allied industries. The program focuses on the scientific principles of food processing, preservation, packaging, quality control, safety regulations, and product development. Students gain strong foundational knowledge in food chemistry, microbiology, engineering operations, nutrition, and food laws, supported by extensive laboratory work and pilot-plant exposure. The curriculum follows an industry-aligned, outcome-based",
        "framework in accordance with NEP-2020, emphasizing experiential learning, industrial training, and real-world problem solving. Students undergo Industrial In-Plant Training (IPT), exposure visits, and project-based learning modules to ensure readiness for industry roles. The program has a minimum intake capacity of 120 students and accepts candidates through national and state-level entrance examinations. Graduates are well prepared for careers in food manufacturing, quality assurance, R&D, regulatory bodies and entrepreneurship as well as for higher education and research in food science and technology.",
      ],
      description2:
        "The B.Tech. Food Technology program plays a vital role in meeting global demands for safe, nutritious, and sustainable food. It offers an integrated understanding of food processing, quality and safety management, product innovation, nutrition, and supply chain operations. The program prepares graduates to tackle major industry challenges such as food safety assurance, reduction of post-harvest losses, regulatory compliance, and development of value-added and functional food products. With rapid growth in food processing industries, cold chain logistics, nutraceuticals, and digitalized supply chains, graduates have excellent career opportunities in industry, research, entrepreneurship, and higher education. The program contributes significantly to food security, public health, and the technological driven advancement of the agri-food sector.",
    },

    "direct-2nd-year-btech": {
      title: "Direct 2nd Year B. Tech. (Food Technology)",
      image: "/assets/images/programs/Direct_2nd_Year.jpg",
      description: [
        "The B.Tech. in Food Technology is a four-year undergraduate program designed to develop technically competent professionals for the food processing and allied industries. The program focuses on the scientific principles of food processing, preservation, packaging, quality control, safety regulations, and product development. Students gain strong foundational knowledge in food chemistry, microbiology, engineering operations, nutrition, and food laws, supported by extensive laboratory work and pilot-plant exposure. The curriculum follows an industry-aligned, outcome-based",
        "framework in accordance with NEP-2020, emphasizing experiential learning, industrial training, and real-world problem solving. Students undergo Industrial In-Plant Training (IPT), exposure visits, and project-based learning modules to ensure readiness for industry roles. The program has a minimum intake capacity of 120 students and accepts candidates through national and state-level entrance examinations. Graduates are well prepared for careers in food manufacturing, quality assurance, R&D, regulatory bodies and entrepreneurship as well as for higher education and research in food science and technology.",
      ],
      description2:
        "The B.Tech. Food Technology program plays a vital role in meeting global demands for safe, nutritious, and sustainable food. It offers an integrated understanding of food processing, quality and safety management, product innovation, nutrition, and supply chain operations. The program prepares graduates to tackle major industry challenges such as food safety assurance, reduction of post-harvest losses, regulatory compliance, and development of value-added and functional food products. With rapid growth in food processing industries, cold chain logistics, nutraceuticals, and digitalized supply chains, graduates have excellent career opportunities in industry, research, entrepreneurship, and higher education. The program contributes significantly to food security, public health, and the technological driven advancement of the agri-food sector.",
    },

    "mtech-food-technology": {
      title: "M. Tech (Food Technology)",
      image: "/assets/images/programs/m.tech.png",
      description: [
        "The M. Tech in Food Technology is a two-year postgraduate program focused on advanced knowledge, research orientation, and technological innovation in food science. The program emphasizes advanced food processing techniques, emerging preservation technologies, functional foods, food engineering systems, and research methodology. Students engage in rigorous laboratory experimentation, industry-linked projects, and thesis work addressing real-world challenges faced by the food sector. Strong emphasis is placed on innovation, product development, process ",
        "optimization, and sustainability in food systems. With a minimum intake of 18 students, the program admits candidates through valid GATE or PERA-CET scores followed by an interview process. Graduates are well suited for senior technical roles in R&D, quality management, academia, research organizations, regulatory agencies and leadership positions in the food processing industry.",
      ],
      description2: "The scope is coiling around inherent development transformation of stakeholders (Students, Farmers, Industry personals and Public/Private components) to articulate professional domain based on Food Science and Technology. The special purpose vehicle stimulatory efficacy of course curriculum has visionary target of anticipated rejuvenation of economic stainability of farmers, student’s entrepreneurship, food technology related National and International policy framework and strengthening of India. The post-graduation in Food Technology can enable students to pursue their career in the reputed Food Processing Industries or Research Institutes as a research scientist, R and D manager and quality executive. It is possible for them to join as a faculty in reputed Food Technology Institutes. They can also join companies or firms as a Consultant, Food Technologist, Production Manager, Lab Technician, Organic Chemist, Research Scientist, Quality Control, Food Inspector.",
    },

    "mtech-foodsafety": {
      title: "M. Tech (Food Safety & Quality Management)",
      image: "/assets/images/programs/food_safety.jpg",
      description: [
        "The M.Tech programme focuses on advanced food technology research.",
        "This specialized two-year postgraduate program is designed to develop experts in food safety systems, quality assurance, regulatory compliance, and risk management. The curriculum integrates food microbiology, toxicology, food laws, HACCP, ISO standards, and global food safety regulations. Students gain practical exposure through laboratory analysis, audits, case studies, and industry-oriented projects, ensuring strong professional competence in quality control and regulatory affairs. The program is multidisciplinary and open to graduates from food, ",
      ],
      description2: "biotechnology, microbiology, chemistry, and allied sciences with proven food science knowledge. With a minimum intake of 6 students, the program ensures personalized mentorship and research guidance. Graduates find excellent career opportunities in food industries, certification agencies, regulatory bodies, export organizations and global food safety institutions.",
    },

    "mtech-food-technology-working-professional": {
      title: "M. Tech (Food Technology) (Working Professionals)",
      image: "/assets/images/programs/Working_Professionals.jpg",
      description: [
        "This two-year postgraduate program is specially structured for working professionals seeking career advancement without interrupting their employment. The curriculum is aligned with industry challenges and focuses on advanced food processing, quality systems, innovation management, and applied research. Candidates must possess relevant academic qualifications along with a minimum of one year of professional experience in the food or allied sector. Learning is application-oriented, enabling professionals to directly apply concepts to their workplace ",
        "environments. Admission is based on GATE or PERA-CET scores followed by an interview. With a minimum intake of 12 students, the program enhances leadership potential, technical expertise, and research capabilities, preparing professionals for senior managerial, technical, and consultancy roles.",
      ],
      description2: "The MTech (Food Technology) part-time postgraduate program is designed to support the professional growth and domain transformation of working stakeholders, including industry professionals, entrepreneurs, quality managers, technologists, and allied sector personnel. The program focuses on strengthening professional competencies in Food Science and Technology while enabling learners to align academic advancement with ongoing employment. The curriculum acts as a catalyst for career progression, leadership development, and entrepreneurial capability, contributing to enhanced productivity, regulatory compliance, and innovation within the food sector. Graduates can advance into roles such as R&D Manager, Quality Assurance Executive, Food Technologist, Production Manager, Consultant, Research Scientist, Food Safety Officer, or Academic Faculty, while also contributing to national and international food policies, sustainability goals, and the strengthening of India’s food processing ecosystem.",
    },

    "phd-food-technology": {
      title: "Ph.D. (Food Technology)",
      image: "/assets/images/programs/P.hd.jpg",
      description: [
        "The Ph.D. in Food Technology is a full-time research program aimed at developing high-level researchers, academicians, and innovators. The program focuses on original research in advanced areas of food processing, safety, nutrition, sustainability, and emerging technologies. Candidates work closely with experienced faculty and industry collaborators, contributing to scientific publications, patents, and technology development. Admission is open to candidates with strong academic backgrounds, including NET/JRF/GATE qualifiers and candidates with research-oriented ",
        "bachelor’s or master’s degrees. Selection is based on written tests and/or interviews as per university norms. The program prepares scholars for careers in academia, research institutions, government organizations, and leadership roles in food technology innovation.",
      ]
    },
  };

  const data = programs[programId];

  return (
    <AboutProgram
      title={data?.title}
      image={data?.image}
      description={data?.description}
      description2={data?.description2}
    />
  );
};

export default AboutProgramPage;
