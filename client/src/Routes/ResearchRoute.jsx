import React from "react";
import { Route } from "react-router-dom";
import Research from "../Pages/Research";
import BoardResearch from "../PageContent/Research/BoardResearch";
import Consultancy from "../PageContent/Research/Consultancy";
import ResearchPaper from "../PageContent/Research/ResearchPaper";
import Pentant from "../PageContent/Research/Pentant";
import FundedProjects from "../PageContent/Research/FundedProjects";
import PHDAdmissions from "../PageContent/Research/PHDAdmissions";


export const ResearchRoute = (
  <Route path="research" element={<Research />}>
    <Route index element={<BoardResearch />} />
    <Route path="board-of-research" element={<BoardResearch />} />
    <Route path="research-paper-publication" element={<ResearchPaper />} />
    <Route path="pentant-publications" element={<Pentant />} />
    <Route path="funded-projects" element={<FundedProjects />} />
    <Route path="phd-admissions" element={<PHDAdmissions />} />
    <Route path="consultancy-training" element={<Consultancy />} />
    {/* <Route path="student-research" element={<StudentResearch />} /> */}
  </Route>
);
