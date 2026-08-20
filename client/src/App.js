import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/header/Header";
import MainRoutes from "./Routes/MainRoutes";

// Admin — lazy loaded (not part of public site)
const Login = lazy(() => import("./admin/pages/Login"));
const AdminRoute = lazy(() => import("./admin/AdminRoute"));
const AdminLayout = lazy(() => import("./admin/pages/AdminLayout"));
const AdminPanel = lazy(() => import("./admin/pages/AdminPanel"));
const News = lazy(() => import("./admin/pages/News"));
const Events = lazy(() => import("./admin/pages/Events"));
const EnquiryTable = lazy(() => import("./admin/pages/EnquiryTable"));
const Members = lazy(() => import("./admin/pages/Members"));
const StudentSpeakAdmin = lazy(() => import("./admin/pages/StudentSpeakAdmin"));
const TestimonialsAdmin = lazy(() => import("./admin/pages/TestimonialsAdmin"));
const RecruitersAdmin = lazy(() => import("./admin/pages/RecruitersAdmin"));
const FacultyAdmin = lazy(() => import("./admin/pages/FacultyAdmin"));
const ResearchAdmin = lazy(() => import("./admin/pages/ResearchAdmin"));
const MOUAdmin = lazy(() => import("./admin/pages/MOUAdmin"));
const PlacedStudentsAdmin = lazy(() => import("./admin/pages/PlacedStudentsAdmin"));
const AlumniStartupAdmin = lazy(() => import("./admin/pages/AlumniStartupAdmin"));
const ContactTable = lazy(() => import("./admin/pages/ContactTable"));

const Fallback = () => (
  <div style={{ textAlign: "center", padding: "60px 20px", color: "#006400" }}>
    Loading...
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Fallback />}>
          <Routes>
            {/* PUBLIC WEBSITE */}
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

            {/* ADMIN LOGIN */}
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
              <Route path="testimonials" element={<TestimonialsAdmin />} />
              <Route path="recruiters" element={<RecruitersAdmin />} />
              <Route path="faculty" element={<FacultyAdmin />} />
              <Route path="research" element={<ResearchAdmin />} />
              <Route path="mou" element={<MOUAdmin />} />
              <Route path="placed-students" element={<PlacedStudentsAdmin />} />
              <Route path="alumni-startup" element={<AlumniStartupAdmin />} />
              <Route path="contact" element={<ContactTable />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
