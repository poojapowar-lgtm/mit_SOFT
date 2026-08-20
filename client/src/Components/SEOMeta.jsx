import { Helmet } from "react-helmet-async";

const SITE_NAME = "MIT-SoFT | MIT-ADT University, Pune";
const BASE_URL = "https://www.mitsoft.edu.in";
const DEFAULT_IMAGE = `${BASE_URL}/assets/images/home/SoFT_Logo.png`;

const PAGE_META = {
  "/": {
    desc: "MIT School of Food Technology (MIT-SoFT), Pune – Offering B.Tech and M.Tech programs in Food Technology. Explore admissions, placements, research, and campus life at MIT-ADT University.",
    keywords: "MIT SoFT, School of Food Technology, Food Technology Pune, MIT ADT University, B.Tech Food Technology, M.Tech Food Technology, food science college Pune, food technology admission 2025",
  },
  "/aboutus/about-mit": {
    desc: "Learn about MIT Art Design and Technology University – a UGC recognized multi-disciplinary university in Pune offering world-class education in Food Technology and allied sciences.",
    keywords: "MIT ADT University, about MIT, MIT Pune, MIT-ADT University Pune, food technology university Pune",
  },
  "/aboutus/about-soft": {
    desc: "MIT School of Food Technology (MIT-SoFT) – a center of excellence in Food Science and Technology offering B.Tech, M.Tech and Ph.D. programs under MIT-ADT University, Pune.",
    keywords: "MIT SoFT, School of Food Technology, about SoFT, food technology school Pune, MIT food technology",
  },
  "/aboutus/leadership-message": {
    desc: "Message from the Founder and Executive President of MIT Group of Institutions – inspiring vision for education, innovation and nation building.",
    keywords: "MIT leadership, Dr Vishwanath Karad, Dr Mangesh Karad, MIT founder message, MIT ADT leadership",
  },
  "/aboutus/principal-message": {
    desc: "Message from Dr. Anjali Bhoite, I/C Principal of MIT School of Food Technology – guiding students towards excellence in Food Technology education and research.",
    keywords: "principal message MIT SoFT, Dr Anjali Bhoite, MIT food technology principal",
  },
  "/aboutus/board-of-management": {
    desc: "Board of Management of MIT School of Food Technology – distinguished members guiding the institution towards academic excellence and innovation.",
    keywords: "MIT SoFT board of management, MIT food technology management, MIT ADT governing board",
  },
  "/aboutus/governing-body": {
    desc: "Governing Body of MIT School of Food Technology – overseeing academic policies, research initiatives and institutional development.",
    keywords: "MIT SoFT governing body, MIT food technology governing body, MIT ADT University governing body",
  },
  "/programs": {
    desc: "Explore B.Tech, M.Tech and Ph.D. programs in Food Technology at MIT School of Food Technology, Pune. Industry-aligned curriculum with strong placement support.",
    keywords: "food technology programs, B.Tech Food Technology, M.Tech Food Technology, Ph.D Food Technology, food safety quality management, MIT SoFT programs",
  },
  "/academics/programme-outcomes": {
    desc: "Programme Outcomes of B.Tech and M.Tech Food Technology at MIT-SoFT – defining graduate competencies aligned with industry and research standards.",
    keywords: "programme outcomes food technology, MIT SoFT academics, food technology curriculum outcomes",
  },
  "/academics/faculty-information": {
    desc: "Meet the experienced and qualified faculty of MIT School of Food Technology – experts in Food Science, Food Safety, Food Engineering and allied disciplines.",
    keywords: "MIT SoFT faculty, food technology professors, food science faculty Pune, MIT ADT faculty",
  },
  "/academics/lab-facilities": {
    desc: "State-of-the-art laboratory facilities at MIT School of Food Technology – Food Chemistry, Food Engineering, Research Lab, PTSF, FBMED and more.",
    keywords: "food technology labs, MIT SoFT laboratory, food science lab Pune, food engineering lab, research laboratory food technology",
  },
  "/academics/achievements": {
    desc: "Academic and research achievements of faculty and students at MIT School of Food Technology – awards, hackathons, publications and recognitions.",
    keywords: "MIT SoFT achievements, food technology awards, student achievements food technology, faculty achievements MIT",
  },
  "/academics/vap-2022": {
    desc: "Village Adoption Program (VAP) 2022 by MIT School of Food Technology – empowering rural communities through food processing, value addition and entrepreneurship.",
    keywords: "village adoption program, VAP 2022, MIT SoFT VAP, food technology rural program, food processing village",
  },
  "/academics/mou": {
    desc: "Memoranda of Understanding (MOUs) signed by MIT School of Food Technology with leading industries and research institutions for academic and research collaboration.",
    keywords: "MIT SoFT MOU, food technology industry collaboration, MIT ADT MOU, food technology partnerships",
  },
  "/academics/nep-2020": {
    desc: "NEP 2020 implementation at MIT School of Food Technology – flexible curriculum, multidisciplinary learning and outcome-based education in Food Technology.",
    keywords: "NEP 2020 food technology, national education policy MIT SoFT, MIT ADT NEP 2020",
  },
  "/academics/academic-calendar": {
    desc: "Academic Calendar of MIT School of Food Technology – important dates for examinations, events, holidays and academic activities for the current year.",
    keywords: "MIT SoFT academic calendar, food technology exam schedule, MIT ADT academic calendar 2025",
  },
  "/academics/vac": {
    desc: "Value Added Courses (VAC) at MIT School of Food Technology – skill enhancement programs to boost employability and industry readiness of students.",
    keywords: "value added courses food technology, MIT SoFT VAC, skill development food technology, MIT ADT value added courses",
  },
  "/admissions/annoucement": {
    desc: "Admission Announcements for B.Tech, M.Tech and Ph.D. programs at MIT School of Food Technology, Pune. Stay updated with the latest admission notifications.",
    keywords: "MIT SoFT admission 2025, food technology admission announcement, MIT ADT admission, B.Tech food technology admission Pune",
  },
  "/admissions/eligibility": {
    desc: "Eligibility criteria for B.Tech, M.Tech and Ph.D. Food Technology programs at MIT School of Food Technology, MIT-ADT University, Pune.",
    keywords: "food technology eligibility, MIT SoFT eligibility criteria, B.Tech food technology eligibility, M.Tech food technology eligibility",
  },
  "/admissions/procedure": {
    desc: "Step-by-step admission procedure for Food Technology programs at MIT-SoFT. Learn how to apply for B.Tech, M.Tech and Ph.D. at MIT-ADT University, Pune.",
    keywords: "MIT SoFT admission procedure, how to apply food technology, food technology admission process Pune",
  },
  "/admissions/fee-structure": {
    desc: "Fee structure for B.Tech, M.Tech and Ph.D. Food Technology programs at MIT School of Food Technology, Pune. Transparent and affordable fee details.",
    keywords: "MIT SoFT fee structure, food technology fees Pune, B.Tech food technology fees, M.Tech food technology fees MIT ADT",
  },
  "/admissions/scholarship": {
    desc: "Scholarship opportunities available for students at MIT School of Food Technology – merit-based and need-based financial assistance for Food Technology programs.",
    keywords: "MIT SoFT scholarship, food technology scholarship Pune, MIT ADT scholarship, food technology financial aid",
  },
  "/admissions/faq": {
    desc: "Frequently Asked Questions about admissions, programs, fees and campus life at MIT School of Food Technology, MIT-ADT University, Pune.",
    keywords: "MIT SoFT FAQ, food technology admission FAQ, MIT ADT frequently asked questions",
  },
  "/examinations/examinations-schedule": {
    desc: "Examination schedule for B.Tech and M.Tech Food Technology programs at MIT School of Food Technology. Check exam dates and timetables.",
    keywords: "MIT SoFT exam schedule, food technology examination timetable, MIT ADT exam dates",
  },
  "/examinations/exam-notice": {
    desc: "Examination notices and circulars for students of MIT School of Food Technology – important updates regarding exams, results and academic activities.",
    keywords: "MIT SoFT exam notice, food technology examination notice, MIT ADT exam circular",
  },
  "/examinations/admission-notice": {
    desc: "Admission notices for MIT School of Food Technology – latest notifications for B.Tech, M.Tech and Ph.D. Food Technology admissions.",
    keywords: "MIT SoFT admission notice, food technology admission notification, MIT ADT admission circular",
  },
  "/research/board-of-research": {
    desc: "School Research Committee at MIT School of Food Technology – guiding research initiatives in Food Science, Food Safety and Food Engineering.",
    keywords: "MIT SoFT research committee, food technology research Pune, MIT ADT research board, food science research",
  },
  "/research/research-paper-publication": {
    desc: "Research paper publications by faculty and students of MIT School of Food Technology – contributing to advancements in Food Science and Technology.",
    keywords: "MIT SoFT research papers, food technology publications, food science research papers Pune, MIT ADT publications",
  },
  "/research/phd-admissions": {
    desc: "Ph.D. admissions in Food Technology at MIT School of Food Technology, MIT-ADT University, Pune. Apply for doctoral research in Food Science and Technology.",
    keywords: "PhD food technology Pune, MIT SoFT PhD admission, doctoral food technology MIT ADT, food science PhD India",
  },
  "/research/funded-projects": {
    desc: "Funded research projects at MIT School of Food Technology – government and industry sponsored projects in Food Science, Food Safety and Food Engineering.",
    keywords: "MIT SoFT funded projects, food technology research projects, government funded food research, MIT ADT research funding",
  },
  "/research/consultancy-training": {
    desc: "Consultancy and training services offered by MIT School of Food Technology – industry-focused expertise in food processing, quality control and food safety.",
    keywords: "MIT SoFT consultancy, food technology training, food safety consultancy Pune, MIT ADT consultancy",
  },
  "/placement/placement-cell": {
    desc: "Placement Cell at MIT School of Food Technology – dedicated support for student placements in leading food companies, FMCG, R&D and quality control sectors.",
    keywords: "MIT SoFT placement, food technology placement Pune, MIT ADT placement cell, food technology jobs",
  },
  "/placement/recruiters": {
    desc: "Top recruiters at MIT School of Food Technology – leading food companies, FMCG brands and research organizations hiring MIT-SoFT graduates.",
    keywords: "MIT SoFT recruiters, food technology companies hiring, top food companies Pune, MIT ADT placement recruiters",
  },
  "/placement/placed-students": {
    desc: "Placed students of MIT School of Food Technology – success stories of graduates placed in top food companies, research organizations and FMCG brands.",
    keywords: "MIT SoFT placed students, food technology placements, MIT ADT placed students, food technology jobs Pune",
  },
  "/placement/placement-statistics": {
    desc: "Placement statistics of MIT School of Food Technology – year-wise placement records, average packages and top recruiting companies.",
    keywords: "MIT SoFT placement statistics, food technology placement record, MIT ADT placement data, food technology salary package",
  },
  "/placement/skill-development": {
    desc: "Skill Development Programs at MIT School of Food Technology – professional training, group discussions, mock interviews and career readiness sessions.",
    keywords: "MIT SoFT skill development, food technology career training, professional skills food technology, MIT ADT skill programs",
  },
  "/placement/internship-policy": {
    desc: "Internship policy at MIT School of Food Technology – guidelines and opportunities for students to gain industry experience in food processing and research.",
    keywords: "MIT SoFT internship, food technology internship Pune, MIT ADT internship policy, food science internship",
  },
  "/alumni/alumni-report": {
    desc: "Alumni report of MIT School of Food Technology – tracking the professional journeys and achievements of MIT-SoFT graduates across the food industry.",
    keywords: "MIT SoFT alumni, food technology alumni Pune, MIT ADT alumni report, food technology graduates",
  },
  "/alumni/alumni-startup": {
    desc: "Alumni startups from MIT School of Food Technology – entrepreneurial ventures by MIT-SoFT graduates in food processing, food safety and allied sectors.",
    keywords: "MIT SoFT alumni startup, food technology entrepreneurs, MIT ADT alumni startup, food startup Pune",
  },
  "/alumni/alumni-testimonials": {
    desc: "Alumni success stories and testimonials from MIT School of Food Technology – hear from graduates about their experiences and career growth.",
    keywords: "MIT SoFT alumni testimonials, food technology success stories, MIT ADT alumni speak, food technology graduates review",
  },
  "/campus-life/facilities": {
    desc: "Campus facilities at MIT School of Food Technology – modern classrooms, pilot processing plants, well-equipped labs and comfortable residential campus.",
    keywords: "MIT SoFT facilities, food technology campus Pune, MIT ADT campus facilities, food technology college infrastructure",
  },
  "/campus-life/events": {
    desc: "Events and activities at MIT School of Food Technology – academic seminars, cultural fests, industry visits, workshops and student competitions.",
    keywords: "MIT SoFT events, food technology events Pune, MIT ADT campus events, food technology workshops",
  },
  "/campus-life/sports": {
    desc: "Sports and extracurricular activities at MIT School of Food Technology – promoting holistic development through sports, fitness and team activities.",
    keywords: "MIT SoFT sports, MIT ADT sports, food technology college sports, campus life MIT SoFT",
  },
  "/contact": {
    desc: "Contact MIT School of Food Technology – reach us for admissions, academic queries and general information. Located at MIT-ADT University, Loni Kalbhor, Pune.",
    keywords: "MIT SoFT contact, food technology college contact Pune, MIT ADT contact, MIT SoFT address, food technology admission enquiry",
  },
};

const DEFAULT_DESC = "MIT School of Food Technology (MIT-SoFT), Pune – Offering B.Tech and M.Tech programs in Food Technology at MIT-ADT University.";
const DEFAULT_KEYWORDS = "MIT SoFT, School of Food Technology, Food Technology Pune, MIT ADT University, B.Tech Food Technology, M.Tech Food Technology";

const SEOMeta = ({ title, description, keywords, path }) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const pageMeta = PAGE_META[path] || {};
  const desc = description || pageMeta.desc || DEFAULT_DESC;
  const kw = keywords || pageMeta.keywords || DEFAULT_KEYWORDS;
  const canonical = `${BASE_URL}${path || "/"}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:site_name" content="MIT-SoFT" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
};

export default SEOMeta;
