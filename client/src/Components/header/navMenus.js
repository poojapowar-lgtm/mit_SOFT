// navLinks.js
export const navMenus = [
  // Home
  {
    key: "home",
    title: "Home",
    to: "/",
  },

  // about us
  {
    key: "aboutus",
    title: "About Us",
    columns: [
      { name: "About MIT-ADT", to: "/aboutus/about-mit" },
      { name: "Leadership Message", to: "/aboutus/leadership-message" },
      { name: "About SoFT", to: "/aboutus/about-soft" },
      { name: "Principal Message", to: "/aboutus/principal-message" },
      { name: "Board of Management", to: "/aboutus/board-of-management" },
      { name: "Governing Body", to: "/aboutus/governing-body" },
    ],
  },

  //Programs
  {
    key: "programs",
    title: "Programs",
    columns: [
      {
        name: "B. Tech. (Food Technology)",
        to: "/programs/btech-food-technology/about-programs",
      },
      {
        name: "Direct 2nd Year B. Tech.",
        to: "/programs/direct-2nd-year-btech/about-programs",
      },
      {
        name: "M. Tech. (Food Technology)",
        to: "/programs/mtech-food-technology/about-programs",
      },
      {
        name: "M. Tech. (Food Safety)",
        to: "/programs/mtech-foodsafety/about-programs",
      },
      {
        name: "M. Tech. Working Professional",
        to: "/programs/mtech-food-technology-working-professional/about-programs",
      },
      {
        name: "Ph. D. (Food Technology)",
        to: "/programs/phd-food-technology/about-programs",
      },
    ],
  },

  //academics
  {
    key: "academics",
    title: "Academics",
    columns: [
      { name: "Programme Outcomes", to: "/academics/programme-outcomes" },
      { name: "Faculty Information", to: "/academics/faculty-information" },
      { name: "MOU’s", to: "/academics/mou" },
      { name: "NEP-2020", to: "/academics/nep-2020" },
      { name: "VAP-2022", to: "/academics/vap-2022" },
      { name: "Curriculum Feedback", to: "/academics/curriculum-feedback" },
      { name: "Student Grievance", to: "/academics/student-grievance" },
      { name: "Laboratory Facilities", to: "/academics/lab-facilities" },
      { name: "Achievements", to: "/academics/achievements" },
      // { name: "Webinar Workshops Details", to: "/academics/webinar" },
    ],
  },

  //admissions
  {
    key: "admissions",
    title: "Admissions",
    columns: [
      { name: "Admission Annoucement", to: "/admissions/annoucement" },
      { name: "Admission Schedule", to: "/admissions/schedule" },
      { name: "Eligibility", to: "/admissions/eligibility" },
      { name: "Admission Procedure", to: "/admissions/procedure" },
      { name: "Fee Structure", to: "/admissions/fee-structure" },
      { name: "Scholarship Details", to: "/admissions/scholarship" },
      { name: "FAQ's", to: "/admissions/faq" },

      // { name: "Entrance Exams Updates", to: "/admissions/entrance" },
      // { name: "Merit/Selection List", to: "/admissions/merit-list" },
      // { name: "Counselling & seat allotment", to: "/admissions/counselling" },
      // { name: "How to Apply", to: "/admissions/apply" },
      // { name: "Spot admissions/vacancy notices", to: "/admissions/vacancy" },
      // { name: "Cancellation and withdrawal notices", to: "/admissions/withdrawal" },


    ],
  },


  //research
  {
    key: "research",
    title: "Research",
    columns: [
      { name: "Board of Research", to: "/research/board-of-research" },
      { name: "Research Paper Publication", to: "/research/research-paper-publication" },
      { name: "PHD Admissions", to: "/research/phd-admissions" },
      { name: "Pentant & Publications", to: "/research/pentant-publications" },
      { name: "Funded Projects", to: "/research/funded-projects" },
      { name: "Consultancy & Training", to: "/research/consultancy-training" },
      { name: "MOU’s", to: "/research/mou" },
      // { name: "Student Research", to: "/research/student-research" },
    ],
  },


];

export const subMenus = [
  //examinations
  {
    key: "examinations",
    title: "Examinations",
    columns: [
      { name: " Examinations Schedule", to: "/examinations/examinations-schedule" },
      { name: "Examinations Notices", to: "/examinations/exam-notice" },
      { name: "Admissions Notices", to: "/examinations/admission-notice" },
    ],
  },


  //alumni
  {
    key: "alumni",
    title: "Alumni",
    columns: [
      { name: "Alumni Report", to: "/alumni/alumni-report" },
      { name: "Alumni Success Stories", to: "/alumni/alumni-stories" },
      { name: "Alumni Startup", to: "/alumni/alumni-startup" },
    ],
  },

  // life at campus
  {
    key: "campus-life",
    title: "Life At Campus",
    columns: [
      { name: "Events", to: "/campus-life/events" },
      { name: "Facilities", to: "/campus-life/facilities" },
      { name: "Sports", to: "/campus-life/sports" },
    ]
  },

  // placement
  {
    key: "placement",
    title: "Placement",
    columns: [
      { name: "Placement Cell", to: "/placement/placement-cell" },
      { name: "Recruiters", to: "/placement/recruiters" },
      { name: "Placed Students", to: "/placement/placed-students" },
      { name: "Placement Statistics", to: "/placement/placement-statistics" },
      { name: "Skill Development Programs", to: "/placement/skill-development" },
      { name: "MOU's", to: "/placement/mou" },
      { name: "Internship Policy", to: "/placement/internship-policy" },
    ]
  },

  // contact us
  // {
  //   key: "contact",
  //   title: "Contact Us",
  //   columns: [
  //     { name: "Contact Us", to: "/contact" },
  //   ]
  // }
  {
    key: "contact",
    title: "Contact Us",
    to: "/contact"
  }
]