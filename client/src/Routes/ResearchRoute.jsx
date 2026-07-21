import React from "react";
import { Route } from "react-router-dom";
import Research from "../Pages/Research";
import BoardResearch from "../PageContent/Research/BoardResearch";
import MOU from "../PageContent/Research/MOU";
import Consultancy from "../PageContent/Research/Consultancy";
import ResearchPaper from "../PageContent/Research/ResearchPaper";
import Pentant from "../PageContent/Research/Pentant";
import Funded_Projects from "../PageContent/Research/Funded_Projects";
import PHD_Admissions from "../PageContent/Research/PHD_Admissions";


export const ResearchRoute = (
  <Route path="research" element={<Research />}>
    <Route index element={<BoardResearch />} />
    <Route path="board-of-research" element={<BoardResearch />} />
    <Route path="research-paper-publication" element={<ResearchPaper />} />
    <Route path="pentant-publications" element={<Pentant />} />
    <Route path="funded-projects" element={<Funded_Projects />} />
    <Route path="phd-admissions" element={<PHD_Admissions />} />
    <Route path="mou" element={<MOU />} />
    <Route path="consultancy-training" element={<Consultancy />} />
    {/* <Route path="student-research" element={<StudentResearch />} /> */}
  </Route>
);
