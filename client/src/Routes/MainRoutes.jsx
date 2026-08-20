import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Pages — lazy loaded
const Home                = lazy(() => import("../Pages/Home"));
const AboutUs             = lazy(() => import("../Pages/AboutUs"));
const Academics           = lazy(() => import("../Pages/Academics"));
const Admission           = lazy(() => import("../Pages/Admission"));
const Research            = lazy(() => import("../Pages/Research"));
const Alumni              = lazy(() => import("../Pages/Alumni"));
const LifeAtCampus        = lazy(() => import("../Pages/LifeAtCampus"));
const Placement           = lazy(() => import("../Pages/Placement"));
const ContactUs           = lazy(() => import("../Pages/ContactUs"));
const Examinations        = lazy(() => import("../Pages/Examinations"));
const Programs            = lazy(() => import("../Pages/Programs"));

// About sub-pages
const AboutMIT            = lazy(() => import("../PageContent/About/AboutMIT"));
const Leadership          = lazy(() => import("../PageContent/About/Leadership"));
const SOFT                = lazy(() => import("../PageContent/About/SOFT"));
const PrincipalMSG        = lazy(() => import("../PageContent/About/PrincipalMSG"));
const MembersList         = lazy(() => import("../PageContent/About/MembersList"));

// Academics sub-pages
const PgOutcomes          = lazy(() => import("../PageContent/Academics/PgOutcomes"));
const MOU                 = lazy(() => import("../PageContent/Academics/MOU"));
const NEP                 = lazy(() => import("../PageContent/Academics/NEP"));
const VAP                 = lazy(() => import("../PageContent/Academics/VAP"));
const Curriculum          = lazy(() => import("../PageContent/Academics/Curriculum"));
const Grievance           = lazy(() => import("../PageContent/Academics/Grievance"));
const Faculty             = lazy(() => import("../PageContent/Academics/Faculty"));
const LabFacilities       = lazy(() => import("../PageContent/Academics/LabFacilities"));
const Achievements        = lazy(() => import("../PageContent/Academics/Achievements"));
const Calendar            = lazy(() => import("../PageContent/Academics/Calendar"));
const VAC                 = lazy(() => import("../PageContent/Academics/VAC"));

// Admissions sub-pages
const Procedure           = lazy(() => import("../PageContent/Admissions/Procedure"));
const Fees                = lazy(() => import("../PageContent/Admissions/Fees"));
const Scholarship         = lazy(() => import("../PageContent/Admissions/Scholarship"));
const FAQ                 = lazy(() => import("../PageContent/Admissions/FAQ"));
const Annoucement         = lazy(() => import("../PageContent/Admissions/Annoucement"));
const Schedule            = lazy(() => import("../PageContent/Admissions/Schedule"));
const Vacancy             = lazy(() => import("../PageContent/Admissions/Vacancy"));
const AdmissionEligibility = lazy(() => import("../PageContent/Admissions/Eligibility"));

// Examination sub-pages
const ExamSchedule        = lazy(() => import("../PageContent/Examination/ExamSchedule"));
const NoticePage          = lazy(() => import("../PageContent/Examination/NoticePage"));

// Research sub-pages
const BoardResearch       = lazy(() => import("../PageContent/Research/BoardResearch"));
const Consultancy         = lazy(() => import("../PageContent/Research/Consultancy"));
const ResearchPaper       = lazy(() => import("../PageContent/Research/ResearchPaper"));
const Pentant             = lazy(() => import("../PageContent/Research/Pentant"));
const FundedProjects      = lazy(() => import("../PageContent/Research/FundedProjects"));
const PHDAdmissions       = lazy(() => import("../PageContent/Research/PHDAdmissions"));

// Alumni sub-pages
const AlumniReport        = lazy(() => import("../PageContent/Alumni/AlumniReport"));
const AlumniStartup       = lazy(() => import("../PageContent/Alumni/AlumniStartup"));
const StudentSpeak        = lazy(() => import("../PageContent/Alumni/StudentSpeak"));

// Placement sub-pages
const PlacementCell       = lazy(() => import("../PageContent/Placement/PlacementCell"));
const Recruiters          = lazy(() => import("../PageContent/Placement/Recruiters"));
const SkillDev            = lazy(() => import("../PageContent/Placement/SkillDev"));
const Internship          = lazy(() => import("../PageContent/Placement/Internship"));
const PlacementStatistics = lazy(() => import("../PageContent/Placement/PlacementStatistics"));
const PlacedStudents      = lazy(() => import("../PageContent/Placement/PlacedStudents"));

// Campus Life sub-pages
const CampusFacilities    = lazy(() => import("../PageContent/LifeAtCampus/Facilities"));
const Events              = lazy(() => import("../PageContent/LifeAtCampus/Events"));
const Sports              = lazy(() => import("../PageContent/LifeAtCampus/Sports"));

// Programs
const ProgramSectionRouter = lazy(() => import("./ProgramSectionRouter"));

const Fallback = () => (
  <div style={{ textAlign: "center", padding: "60px 20px", color: "#006400" }}>
    Loading...
  </div>
);

const MainRoutes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="aboutus" element={<AboutUs />}>
          <Route index element={<AboutMIT />} />
          <Route path="about-mit" element={<AboutMIT />} />
          <Route path="leadership-message" element={<Leadership />} />
          <Route path="about-soft" element={<SOFT />} />
          <Route path="principal-message" element={<PrincipalMSG />} />
          <Route path="board-of-management" element={<MembersList type="board" title="Board of Management" />} />
          <Route path="governing-body" element={<MembersList type="governing" title="Governing Body" />} />
        </Route>

        {/* Programs */}
        <Route path="programs" element={<Programs />}>
          <Route path=":programId/:sectionId" element={<ProgramSectionRouter />} />
        </Route>

        {/* Academics */}
        <Route path="academics" element={<Academics />}>
          <Route index element={<PgOutcomes />} />
          <Route path="programme-outcomes" element={<PgOutcomes />} />
          <Route path="mou" element={<MOU />} />
          <Route path="nep-2020" element={<NEP />} />
          <Route path="vap-2022" element={<VAP />} />
          <Route path="curriculum-feedback" element={<Curriculum />} />
          <Route path="student-grievance" element={<Grievance />} />
          <Route path="faculty-information" element={<Faculty />} />
          <Route path="lab-facilities" element={<LabFacilities />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="academic-calendar" element={<Calendar />} />
          <Route path="vac" element={<VAC />} />
        </Route>

        {/* Admissions */}
        <Route path="admissions" element={<Admission />}>
          <Route index element={<Annoucement />} />
          <Route path="annoucement" element={<Annoucement />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="eligibility" element={<AdmissionEligibility />} />
          <Route path="procedure" element={<Procedure />} />
          <Route path="vacancy" element={<Vacancy />} />
          <Route path="scholarship" element={<Scholarship />} />
          <Route path="fee-structure" element={<Fees />} />
          <Route path="faq" element={<FAQ />} />
        </Route>

        {/* Examinations */}
        <Route path="examinations" element={<Examinations />}>
          <Route index element={<ExamSchedule />} />
          <Route path="examinations-schedule" element={<ExamSchedule />} />
          <Route path="exam-notice" element={<NoticePage type="examination" title="Examinations Notices" />} />
          <Route path="admission-notice" element={<NoticePage type="admission" title="Admissions Notices" />} />
        </Route>

        {/* Research */}
        <Route path="research" element={<Research />}>
          <Route index element={<BoardResearch />} />
          <Route path="board-of-research" element={<BoardResearch />} />
          <Route path="research-paper-publication" element={<ResearchPaper />} />
          <Route path="pentant-publications" element={<Pentant />} />
          <Route path="funded-projects" element={<FundedProjects />} />
          <Route path="phd-admissions" element={<PHDAdmissions />} />
          <Route path="consultancy-training" element={<Consultancy />} />
        </Route>

        {/* Alumni */}
        <Route path="alumni" element={<Alumni />}>
          <Route index element={<AlumniReport />} />
          <Route path="alumni-report" element={<AlumniReport />} />
          <Route path="alumni-testimonials" element={<StudentSpeak />} />
          <Route path="alumni-startup" element={<AlumniStartup />} />
        </Route>

        {/* Placement */}
        <Route path="placement" element={<Placement />}>
          <Route index element={<PlacementCell />} />
          <Route path="placement-cell" element={<PlacementCell />} />
          <Route path="recruiters" element={<Recruiters />} />
          <Route path="placed-students" element={<PlacedStudents />} />
          <Route path="placement-statistics" element={<PlacementStatistics />} />
          <Route path="skill-development" element={<SkillDev />} />
          <Route path="internship-policy" element={<Internship />} />
        </Route>

        {/* Campus Life */}
        <Route path="campus-life" element={<LifeAtCampus />}>
          <Route index element={<CampusFacilities />} />
          <Route path="facilities" element={<CampusFacilities />} />
          <Route path="sports" element={<Sports />} />
          <Route path="events" element={<Events />} />
        </Route>

        {/* Contact */}
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
