import React from "react";
import { Route } from "react-router-dom";
import Examinations from "../Pages/Examinations";
import ExamSchedule from "../PageContent/Examination/ExamSchedule";
import NoticePage from "../PageContent/Examination/NoticePage";



export const ExaminationRoute = (
    <Route path="examinations" element={<Examinations />}>
        <Route index element={<ExamSchedule />} />
           <Route path="examinations-schedule" element={<ExamSchedule />} />
        <Route
            path="exam-notice"
            element={<NoticePage type="examination" title="Examinations Notices" />}
        />

        <Route
            path="admission-notice"
            element={<NoticePage type="admission" title="Admissions Notices" />}
        />
    </Route>
);


