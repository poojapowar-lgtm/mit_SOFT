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
import StudentSpeak from "../PageContent/HomeComponent/StudentSpeak";
import Recruiters from "../PageContent/HomeComponent/Recruiters";
import PlacedStd from "../PageContent/HomeComponent/PlacedStd";


const Home = () => {
  return (
    <div className="home">
      <Banner />
      <NationalRank/>
      <LifeAtCampus/>
      <Global/>
      <News/>
      <Programs/>
      <PlacedStd/>
      <Facilities/>
      <Department/>
      <Recruiters/>
      <StudentSpeak/>
    </div>
  );
};

export default Home;
