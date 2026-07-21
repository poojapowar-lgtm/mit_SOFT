import React from "react";
import { useParams } from "react-router-dom";
import Syllabus from "../ProgramsMenus/Syllabus";

const SyllabusPage = () => {
  const { programId } = useParams();

  const programs = {
    "btech-food-technology": {
      title: "B. Tech. (Food Technology)",
      description: "AY 2026-27 : View PDF",
      file: "/assets/docs/BTFT_Outline_Syllabus_2026-27.docx",
    },

    "direct-2nd-year-btech": {
      title: "Direct 2nd Year B. Tech. (Food Technology)",
      description: "AY 2026-27 : View PDF",
      file: "/assets/docs/BTFT_Outline_Syllabus_2026-27.docx",
    },

    "mtech-food-technology": {
      title: "M. Tech (Food Technology)",
      description: "AY 2026-27 : View PDF",
      file: "/assets/docs/MTFT Course structure Layout 2026-27.docx",
    },

    "mtech-foodsafety": {
      title: "M. Tech (Food Safety & Quality Management)",
      description: "AY 2026-27 : View PDF",
      file: "/assets/docs/M.Tech_FQ_Syllabus.docx",
    },

    "mtech-food-technology-working-professional": {
      title: "M. Tech (Food Technology) (Working Professionals)",
      description: "AY 2026-27 : View PDF",
      file: "/assets/docs/mtech_wp.pdf",
    },

    "phd-food-technology": {
      title: "Ph.D. (Food Technology)",
      description: "AY 2026-27 : View PDF",
      file: "/assets/docs/phd_ft.pdf",
    },
  };

  const data = programs[programId];


  return (
    <Syllabus
      title={data.title}
      description={data.description}
      file={data.file}
    />
  );
};

export default SyllabusPage;