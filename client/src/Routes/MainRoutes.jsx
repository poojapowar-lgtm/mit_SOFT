import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { AboutRoute } from "./AboutRoute";
import { ProgramsRoute } from "./ProgramsRoute";
import { AdmissionRoute } from "./AdmissionRoute";
import { ResearchRoute } from "./ResearchRoute";
import { AlumniRoute } from "./AlumniRoute";
import { LifeAtCampusRoute } from "./LifeAtCampusRoute";
import { PlacementRoute } from "./PlacementRoute";
import { ContactRoute } from "./ContactRoute";
import { ExaminationRoute } from "./ExaminationRoute";
import { AcademicsRoute } from "./AcademicsRoute";


const MainRoutes = () => {
  return (
    <Routes>
      {/* main nav menus */}
      <Route path="/" element={<Home />} />
      {AboutRoute}
      {ProgramsRoute}
      {AcademicsRoute}
      {AdmissionRoute}
      {ExaminationRoute}
      {ResearchRoute}
      {AlumniRoute}
      {PlacementRoute}
      {/* sub menus */}
      {LifeAtCampusRoute}
      {ContactRoute}
      {/* <Route path="contact" element={<ContactUs/>} />  */}
    </Routes>
  );
};

export default MainRoutes;
