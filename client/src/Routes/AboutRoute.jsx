import React from "react";
import { Route } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import AboutMIT from "../PageContent/About/AboutMIT";
import Leadership from "../PageContent/About/Leadership";
import SOFT from "../PageContent/About/SOFT";
import PrincipalMSG from "../PageContent/About/PrincipalMSG";
import MembersList from "../PageContent/About/MembersList";
// import Board_Body from "../PageContent/About/board_body/Board_Body";
// import Governing_Body from "../PageContent/About/board_body/Governing_Body";



export const AboutRoute = (
  <Route path="aboutus" element={<AboutUs />}>
    <Route index element={<AboutMIT />} />
    <Route path="about-mit" element={<AboutMIT />} />
    <Route path="leadership-message" element={<Leadership />} />
    <Route path="about-soft" element={<SOFT />} />
    <Route path="principal-message" element={<PrincipalMSG />} />
    <Route
      path="board-of-management"
      element={<MembersList type="board" title="Board of Management" />}
    />

    <Route
      path="governing-body"
      element={<MembersList type="governing" title="Governing Body" />}
    />
  </Route>
);
