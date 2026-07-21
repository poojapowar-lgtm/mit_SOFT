import React from "react";
import { Route } from "react-router-dom";
import Alumni from "../Pages/Alumni";
import AlumniReport from "../PageContent/Alumni/AlumniReport";
import AlumniStory from "../PageContent/Alumni/AlumniStory";
import AlumniStartup from "../PageContent/Alumni/AlumniStartup";



export const AlumniRoute = (
    <Route path="alumni" element={<Alumni />}>
        <Route index element={<AlumniReport />} />
        <Route path="alumni-report" element={<AlumniReport />} />
        <Route path="alumni-stories" element={<AlumniStory />} />
        <Route path="alumni-startup" element={<AlumniStartup />} />
    </Route>
);
