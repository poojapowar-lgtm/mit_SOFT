import React from "react";
import { useParams } from "react-router-dom";
import Eligibility from "../ProgramsMenus/Eligibility";

const EligibilityPage = () => {
  const { programId } = useParams();


  const programs = {
    "btech-food-technology": {
      title: "B. Tech. (Food Technology)",
      duration: ["4 Years | Intake Capacity: 120"],
      description: [
        "The candidate should have passed the 10+2 examination from a recognized Board with any of the following subjects: Physics / Mathematics / Chemistry / Computer Science / Electronics / Information Technology / Biology / Informatics Practices / Biotechnology / Technical Vocational subject / Agriculture / Engineering Graphics / Business Studies / Entrepreneurship, and obtained a minimum of 45% marks in the subjects taken together for General / Open category candidates.",
        "A relaxation of 5% in the minimum qualifying marks shall be applicable to candidates belonging to Reserved Categories, Economically Weaker Section (EWS), and Persons with Disabilities (PwD) from the State of Maharashtra.",
        "OR",
        "The candidate should have passed the D. Voc. stream in the same or allied sector.",
      ],
      requirement: [
        "Chemistry as a compulsory subject",
      ],
      exam: [
        "Valid GATE Score or PERA CET Score.",
      ],
    },

    "direct-2nd-year-btech": {
      title: "Direct 2nd Year B. Tech. (Food Technology)",
      description: [
        "The candidate should have passed a minimum three-year Diploma or two-year Diploma (Lateral Entry) examination in any branch of Engineering and Technology from a recognized Board, securing at least 45% marks for General / Open category candidates.",
        "OR",
        "The candidate should have passed a B.Sc. degree from a University recognized by the University Grants Commission (UGC), securing at least 45% marks for General / Open category candidates, and should have passed the 10+2 examination with Mathematics as a subject.",
        "A relaxation of 5% in the minimum qualifying marks shall be applicable to candidates belonging to Reserved Categories, Economically Weaker Section (EWS), and Persons with Disabilities (PwD) from the State of Maharashtra.",
        "OR",
        "The candidate should have passed B. Voc. / three-year D. Voc. stream in the same or allied sector"
      ],
      requirement: [
        "Diploma in Food Science / Technology or B.Sc. / B. Voc. (Food Science / Food Technology) Food Processing Technology and allied."
      ],

    },

    "mtech-food-technology": {
      title: "M. Tech (Food Technology)",
      duration: ["2 Years | Intake Capacity: 18"],
      description: [
        "The candidate should have passed B.Tech. / B.E. in Food Science / Food Technology or an equivalent four-year degree programme in Food Science and Food Technology from a University recognized by the University Grants Commission (UGC), securing a minimum of 50% marks in aggregate (or equivalent grade) for General / Open category candidates.",
        "A relaxation of 5% in the minimum qualifying marks shall be applicable to candidates belonging to Reserved Categories, Economically Weaker Section (EWS), and Persons with Disabilities (PwD) from the State of Maharashtra.",
        "Candidates must have a valid GATE score or PERA-CET score.",
        "Eligible candidates shall be required to appear for and qualify the interview to be included in the admission merit list."
      ],
      requirement: [
        " B.Tech. / B.E. in Food Science / Food Technology",
      ],
      exam: [
        "Valid GATE Score or PERA CET Score..",
      ],
    },

    "mtech-foodsafet": {
      title: "M. Tech (Food Safety & Quality Management)",
      duration: ["2 Years | Intake Capacity: 6"],
      description: [
        "The candidate should have passed a four-year Bachelor’s degree from a University recognized by the University Grants Commission (UGC), securing a minimum of 50% marks for General / Open category candidates, in any of the following disciplines: Food Science / Food Technology / Food Process Technology / Food Science and Nutrition / Food Science and Quality Control / Food Process Engineering / Food Processing Technology / Post-Harvest Technology / Biotechnology / Bioengineering / Industrial & Applied Microbiology / Chemistry, with proven knowledge in Food Science / Food Technology.",
        "A relaxation of 5% in the minimum qualifying marks shall be applicable to candidates belonging to Reserved Categories, Economically Weaker Section (EWS), and Persons with Disabilities (PwD) from the State of Maharashtra.",
        "Eligible candidates shall be required to appear for and qualify the interview to be included in the admission merit list.",
      ],
      requirement: [
        " Proven  knowledge in  Food Science /  Technology",
      ],
      exam: [
        "Valid GATE Score or PERA CET Score.",
      ],
    },

    "mtech-food-technology-working-professional": {
      title: "M. Tech (Food Technology) (Working Professionals)",
      duration: ["2 Years | Intake Capacity: 12"],
      description: [
        "The candidate should have passed a four-year Bachelor’s degree or a full-time M.Sc. degree from a University recognized by the University Grants Commission (UGC), securing a minimum of 50% marks in aggregate or an equivalent Grade ‘B’ on the UGC 10-point scale (or an equivalent grade where a different grading system is followed) in any of the following disciplines: Food Science / Food Technology / Food Process Technology / Biotechnology / Bioengineering / Food Science and Nutrition / Food Science and Quality Control / Food Process Engineering / Food Processing Technology / Post-Harvest Technology / Industrial & Applied Microbiology / Chemistry, with proven knowledge in Food Science / Food Technology.",
        "The candidate should have a minimum of one (1) year of full- time, regular work experience in a relevant field, acquired from a registered Government or Autonomous organization / Company / Educational Institution / Industry / Firm.",
        "A relaxation of 5% in the minimum qualifying marks shall be applicable to candidates belonging to Reserved Categories, Economically Weaker Section (EWS), and Persons with Disabilities (PwD) from the State of Maharashtra.",
        "Shortlisted candidates shall be required to appear for and clear a Personal Interview for inclusion in the final admission merit list."
      ],
      exam: [
        " Valid GATE Score or PERA CET Score..",
      ],
    },

    "phd-food-technology": {
      title: "Ph.D. (Food Technology)",
      duration: ["3 Years (Full Time) | Intake Capacity: As per Vacancy"],
      description: [
        "Master’s Degree in Food Science / Food Technology with prerequisite of four years B. Tech / equivalent degree programme, with minimum of 70% of marks in aggregate or its equivalent grade ‘B’ in the UGC 10-point scale (or an equivalent grade in a point scale wherever grading system is followed).",
        "OR",
        "The candidates appearing for final year or final semester of their Post-Graduate Degree will also be eligible to appear for the admission process subject to the fulfilment of minimum eligibility criteria in the final result thereof",
        "OR",
        "Candidate seeking admission after a 4-year/8-semester Bachelor’s degree with Research should have a minimum CGPA of 7.5/10. NET/JRF/GATE Qualifying students will be preferred.",
        "OR",
        "Candidates who have cleared the M.Phil. course work with at least 55% marks in aggregate or its equivalent grade ‘B’ in the UGC 10-point scale or an equivalent degree from a Foreign Institution accredited by an Assessment and Accreditation Agency which is approved, recognized or authorized by an authority, established or incorporated under a law in its home country or any other statutory authority in that country to assess, accredit or assure quality and standards of educational institutions, shall be eligible for admission to the Ph.D. programme. In-service candidates (under faculty improvement programme) from State / Central Govt. / Industry / Academic Institutes on the basis of experience and area of interest. The selection of qualified candidates shall be based on interview / viva-voce for JRF/NET whereas for the candidates who have qualified the entrance test, the selection shall be evaluated in the ratio 70 (written test) : 30 (interview). Merit list for both shall be separately published."
      ],
      exam: [
        " Valid GATE Score or PERA CET Score..",
      ],
    },
  };


  const data = programs[programId];
  return (
    <Eligibility
      title={data?.title}
      description={data?.description}
      duration={data?.duration}
      requirement={data?.requirement}
      exam={data?.exam}
    />
  )
};

export default EligibilityPage;
