import React from "react";
import { Route } from "react-router-dom";
import Academics from "../Pages/Academics";
import Pg_Outcomes from "../PageContent/Academics/Pg_Outcomes";
import MOU from "../PageContent/Academics/MOU";
import NEP from "../PageContent/Academics/NEP";
import VAP from "../PageContent/Academics/VAP";
import Curriculum from "../PageContent/Academics/Curriculum";
import Grievance from "../PageContent/Academics/Grievance";
import Faculty from "../PageContent/Academics/Faculty";
import LabFacilities from "../PageContent/Academics/LabFacilities";
import Achievements from "../PageContent/Academics/Achievements";



export const AcademicsRoute = (
    <Route path="academics" element={<Academics />}>
        <Route index element={<Pg_Outcomes />} />
        <Route path="programme-outcomes" element={<Pg_Outcomes />} />
        <Route path="mou" element={<MOU />} />
        <Route path="nep-2020" element={<NEP />} />
        <Route path="vap-2022" element={<VAP />} />
        <Route path="curriculum-feedback" element={<Curriculum />} />
        <Route path="student-grievance" element={<Grievance />} />
        <Route path="faculty-information" element={<Faculty />} />
        <Route path="lab-facilities" element={<LabFacilities />} />
        <Route path="achievements" element={<Achievements />} />
    </Route>
);
