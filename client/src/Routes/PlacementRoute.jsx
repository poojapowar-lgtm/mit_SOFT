import React from "react";
import { Route } from "react-router-dom";
import Placement from "../Pages/Placement";
import PlacementCell from "../PageContent/Placement/PlacementCell";
import Recruiters from "../PageContent/Placement/Recruiters";
import SkillDev from "../PageContent/Placement/SkillDev";
import Internship from "../PageContent/Placement/Internship";
import PlacementStatistics from "../PageContent/Placement/PlacementStatistics";
import PlacedStudents from "../PageContent/Placement/PlacedStudents";

export const PlacementRoute = (
    <Route path="placement" element={<Placement />}>
        <Route index element={<PlacementCell />} />
        <Route path="placement-cell" element={<PlacementCell />} />
        <Route path="recruiters" element={<Recruiters />} />
        <Route path="placed-students" element={<PlacedStudents />} />
        <Route path="placement-statistics" element={<PlacementStatistics />} />
        <Route path="skill-development" element={<SkillDev />} />
        <Route path="internship-policy" element={<Internship />} />
    </Route>
);
