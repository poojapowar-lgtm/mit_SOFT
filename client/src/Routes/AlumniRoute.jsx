import React from "react";
import { Route } from "react-router-dom";
import Alumni from "../Pages/Alumni";
import AlumniReport from "../PageContent/Alumni/AlumniReport";
import AlumniStartup from "../PageContent/Alumni/AlumniStartup";
import StudentSpeak from "../PageContent/Alumni/StudentSpeak";



export const AlumniRoute = (
    <Route path="alumni" element={<Alumni />}>
        <Route index element={<AlumniReport />} />
        <Route path="alumni-report" element={<AlumniReport />} />
        <Route path="alumni-testimonials" element={<StudentSpeak />} />
        <Route path="alumni-startup" element={<AlumniStartup />} />
    </Route>
);
