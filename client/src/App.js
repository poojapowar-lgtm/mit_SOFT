// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainRoutes from "./Routes/MainRoutes";
// import ScrollToTop from "./Components/ScrollToTop";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/header/Header";

// function App() {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Routes>
//         <Route
//           path="/*"
//           element={
//             <div className="App">
//               <Header />
//               <MainRoutes />
//               <Footer />
//             </div>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainRoutes from "./Routes/MainRoutes";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/header/Header";

//  Import Admin
import Dashboard from "./admin/pages/Dashboard";
import AdminRoute from "./admin/AdminRoute";
import Login from "./admin/pages/Login";
import AdminPanel from "./admin/pages/AdminPanel";
import News from "./admin/pages/News";
import Events from "./admin/pages/Events";
import AdminLayout from "./admin/pages/AdminLayout";
import EnquiryTable from "./admin/pages/EnquiryTable";
import Members from "./admin/pages/Members";
import StudentSpeakAdmin from "./admin/pages/StudentSpeakAdmin";
import Recruiters from "./PageContent/HomeComponent/Recruiters";
import RecruitersAdmin from "./admin/pages/RecruitersAdmin";
import FacultyAdmin from "./admin/pages/FacultyAdmin";
import ResearchAdmin from "./admin/pages/ResearchAdmin";
import MOUAdmin from "./admin/pages/MOUAdmin";
import PlacedStudentsAdmin from "./admin/pages/PlacedStudentsAdmin";
import AlumniStartupAdmin from "./admin/pages/AlumniStartupAdmin";
import ContactTable from "./admin/pages/ContactTable";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/*  PUBLIC WEBSITE */}
        <Route
          path="/*"
          element={
            <div className="App">
              <Header />
              <MainRoutes />
              <Footer />
            </div>
          }
        />

        {/*ADMIN LOGIN (NO HEADER/FOOTER) */}
        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="dashboard" element={<AdminPanel />} />
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route path="enquiry" element={<EnquiryTable />} />
          <Route path="members" element={<Members />} />
          <Route path="student-speak" element={<StudentSpeakAdmin />} />
          <Route path="recruiters" element={<RecruitersAdmin />} />
          <Route path="faculty" element={<FacultyAdmin />} />
          <Route path="research" element={<ResearchAdmin />} />
          <Route path="mou" element={<MOUAdmin />} />
          <Route path="placed-students" element={<PlacedStudentsAdmin />} />
          <Route path="alumni-startup" element={<AlumniStartupAdmin />} />
          <Route path="contact" element={<ContactTable />} />
        </Route>

      </Routes>



    </BrowserRouter>
  );
}

export default App;
