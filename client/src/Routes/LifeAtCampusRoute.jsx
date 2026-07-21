import React from "react";
import { Route } from "react-router-dom";
import LifeAtCampus from "../Pages/LifeAtCampus";
import Facilities from "../PageContent/LifeAtCampus/Facilities";
import Events from "../PageContent/LifeAtCampus/Events";
import Sports from "../PageContent/LifeAtCampus/Sports";


export const LifeAtCampusRoute = (
    <Route path="campus-life" element={<LifeAtCampus />}>
        <Route index element={<Facilities />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="sports" element={<Sports />} />
        <Route path="events" element={<Events />} />
    </Route>
);
