import React from "react";
import { Route } from "react-router-dom";
import Admission from "../Pages/Admission";
import Procedure from "../PageContent/Admissions/Procedure";
import Fees from "../PageContent/Admissions/Fees";
import HowApply from "../PageContent/Admissions/HowApply";
import Scholarship from "../PageContent/Admissions/Scholarship";
import FAQ from "../PageContent/Admissions/FAQ";
import Annoucement from "../PageContent/Admissions/Annoucement";
import Schedule from "../PageContent/Admissions/Schedule";
import Vacancy from "../PageContent/Admissions/Vacancy";
import Eligibility from "../PageContent/Admissions/Eligibility";


export const AdmissionRoute = (
    <Route path="admissions" element={<Admission />}>
        <Route index element={<annoucement />} />
        <Route path="annoucement" element={<Annoucement />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="eligibility" element={<Eligibility />} />
        <Route path="procedure" element={<Procedure />} />

        {/* entrance exam add at time of admission */}
        {/* <Route path="entrance" element={<Entrance />} /> */}
        <Route path="vacancy" element={<Vacancy />} />
        <Route path="scholarship" element={<Scholarship />} />
        <Route path="fee-structure" element={<Fees />} />
        <Route path="faq" element={<FAQ />} />


        {/* <Route path="merit-list" element={<MeritList />} />
        <Route path="counselling" element={<Counselling />} />
        <Route path="withdrawal" element={<Withdrawal />} /> 
        /* <Route path="apply" element={<HowApply />} /> */}


    </Route>
);
