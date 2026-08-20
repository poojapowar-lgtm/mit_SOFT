import React from "react";
import Header from "../Components/header/Header";
import Banner from "../Components/banner/Banner";
import News from "../PageContent/HomeComponent/News/News";
import NationalRank from "../PageContent/HomeComponent/NationalRank";
import LifeAtCampus from "../PageContent/HomeComponent/LifeAtCampus";
import Global from "../PageContent/HomeComponent/Global";
import Programs from "../PageContent/HomeComponent/Programs";
import Facilities from "../PageContent/HomeComponent/Facilities";
import Department from "../PageContent/HomeComponent/Department";
import StudentSpeak from "../PageContent/Alumni/StudentSpeak";
import Recruiters from "../PageContent/HomeComponent/Recruiters";
import PlacedStd from "../PageContent/HomeComponent/PlacedStd";
import Testimonials from "../PageContent/HomeComponent/Testimonials";
import SEOMeta from "../Components/SEOMeta";


const Home = () => {
  return (
    <div className="home">
      <SEOMeta
        title="MIT School of Food Technology (MIT-SoFT) | MIT-ADT University, Pune"
        description="MIT School of Food Technology (MIT-SoFT), Pune – Offering B.Tech and M.Tech programs in Food Technology. Explore admissions, placements, research, and campus life at MIT-ADT University."
        path="/"
      />
      <Banner />
      <NationalRank />
      <LifeAtCampus />
      <Global />
      <News />
      <Programs />
      <Recruiters />
      <PlacedStd />
      <Facilities />
      <Department />
      <Testimonials />
      {/* <StudentSpeak /> */}
    </div>
  );
};

export default Home;
