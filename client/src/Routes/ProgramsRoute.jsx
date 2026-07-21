import React from "react";
import { Route } from "react-router-dom";
import Programs from "../Pages/Programs";
import ProgramSectionRouter from "./ProgramSectionRouter";

export const ProgramsRoute = (
  <Route path="programs" element={<Programs />}>
    <Route path=":programId/:sectionId" element={<ProgramSectionRouter />} />
  </Route>
);
