import React from "react";
import { useParams } from "react-router-dom";
import FutureScope from "../ProgramsMenus/FutureScope";

const FutureScopePage = () => {
  const { programId } = useParams();

  const programs = {
    "btech-food-technology": {
      title: "B. Tech. (Food Technology)",
      description:
        "With the rapid expansion of the food processing sector, increasing food safety regulations, and the demand for value-added products, B.Tech (Food Technology) plays a crucial role in strengthening the food industry. The program builds strong foundations in food processing, preservation, packaging, quality control, engineering principles, and supply chain management.",
      description2:
        "Students secure placements in leading food manufacturing companies, multinational corporations, government agencies, and emerging food startups. With India’s agro-processing expansion and export growth, placement opportunities remain strong and continuously increasing.",
      list: [
        " Food processing industries",
        "Dairy, bakery, beverage, meat, and seafood industries",
        "FMCG companies",
        "Quality control laboratories",
        "Government food inspection departments",
        "Packaging industries",
        "Cold chain and logistics companies",
        "Startups in food innovation and entrepreneurship",
      ],
      list2: [
        "Food Technologist",
        "Production Executive",
        "Quality Control Officer",
        "Process Engineer",
        "R & D Assistant",
        "Food Safety Officer",
        "Packaging Technologist",
        "Technical Officer",
      ],
    },
    "direct-2nd-year-btech": {
      title: "Direct 2nd Year B. Tech. (Food Technology)",
      description:
        "With the rapid expansion of the food processing sector, increasing food safety regulations, and the demand for value-added products, B.Tech (Food Technology) plays a crucial role in strengthening the food industry. The program builds strong foundations in food processing, preservation, packaging, quality control, engineering principles, and supply chain management.",
      description2:
        "Students secure placements in leading food manufacturing companies, multinational corporations, government agencies, and emerging food startups. With India’s agro-processing expansion and export growth, placement opportunities remain strong and continuously increasing.",
      list: [
        " Food processing industries",
        "Dairy, bakery, beverage, meat, and seafood industries",
        "FMCG companies",
        "Quality control laboratories",
        "Government food inspection departments",
        "Packaging industries",
        "Cold chain and logistics companies",
        "Startups in food innovation and entrepreneurship",
      ],
      list2: [
        "Food Technologist",
        "Production Executive",
        "Quality Control Officer",
        "Process Engineer",
        "R & D Assistant",
        "Food Safety Officer",
        "Packaging Technologist",
        "Technical Officer",
      ],
    },
    "mtech-food-technology": {
      title: "M. Tech (Food Technology)",
      description:
        "The M.Tech (Food Technology) program provides advanced technical expertise in food research, automation, product development, sustainable processing, and innovation. With global competitiveness driven by research and technology, this program prepares specialists capable of leading high-impact roles.",
      description2:
        "Postgraduates receive higher-level technical and managerial roles compared to undergraduate graduates. Industries prefer MTech graduates for leadership, innovation-driven, and research-oriented positions. Opportunities also exist in international companies and higher education institutions.",
      list: [
        "Research & Development (R&D) centers",
        "Advanced food processing industries",
        "Multinational food corporations",
        "Food equipment manufacturing companies",
        "Government research laboratories",
        "Academic institutions",
        "Regulatory and policy organizations",

      ],
      list2: [
        " R&D Scientist",
        "Senior Food Technologist",
        "Product Development Manager",
        "Process Optimization Specialist",
        "Technical Consultant",
        "Plant Manager",
        "Assistant Professor (after qualifying eligibility requirements)"
      ],
    },
    "mtech-foodsafety": {
      title: "M. Tech (Food Safety & Quality Management)",
      description: "With stringent global food safety regulations and growing consumer awareness, this specialization has become indispensable. The program prepares experts in quality assurance systems, regulatory compliance, auditing, and food safety risk management.",
      description2: "Due to mandatory food safety compliance in both domestic and international markets, demand for qualified food safety professionals is consistently high. Graduates are placed in reputed national and multinational organizations, particularly those involved in exports.",
      list: [
        "Quality assurance departments of food industries",
        "Export-oriented food companies",
        "Regulatory bodies (FSSAI, APEDA, etc.)",
        "Certification and auditing agencies",
        "Food testing laboratories",
        "Hospitality and retail food chains"
      ],
      list2: [
        "Quality Assurance Manager",
        "Food Safety Officer",
        "HACCP/ISO Consultant",
        "Regulatory Affairs Executive",
        "Quality Auditor",
        "Compliance Manager",
        "Laboratory Manager"
      ],
    },
    "mtech-food-technology-working-professional": {
      title: "M. Tech (Food Technology) (Working Professionals)",
      description:
        "This program enables experienced professionals to upgrade their technical skills and leadership capabilities while continuing employment. It strengthens industry-academia integration and promotes innovation-driven growth.",
      description2:
        "Since candidates are already employed professionals, the program primarily supports career advancement, promotions, salary enhancement, and transition into leadership or strategic roles rather than entry-level placements.",
      list: [
        "Large-scale food manufacturing industries",
        "Government food departments",
        "Research and development units",
        "Quality management divisions",
        "Production and operations management"
      ],
      list2: [
        "Senior Production Manager",
        "Technical Head",
        "Plant Operations Manager",
        "Quality Head",
        "R&D Lead",
        "Food Safety & Compliance Director",
        "Industry Consultant"
      ],
    },
    "phd-food-technology": {
      title: "B. Tech. (Food Technology)",
      description:
        "Graduates are uniquely prepared to lead multi-disciplinary teams in national and international research laboratories, focusing on SMART food systems and sustainable processing. This includes pioneering research into cellular agriculture, plant-based proteins, and nano-encapsulation technologies to enhance nutrient delivery.",
    },

  };

  const data = programs[programId];

  return (
    <FutureScope
      title={data?.title}
      description={data?.description}
      description2={data?.description2}
      list={data?.list}
      list2={data?.list2}
    />
  );
};

export default FutureScopePage;
