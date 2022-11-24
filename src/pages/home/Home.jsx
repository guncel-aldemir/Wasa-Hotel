import React from "react";
import Header from "../../components/header/Header";
import MainRooms from "../../components/mainRooms/MainRooms";
import Opportunities from "../../components/opportunities/Opportunities";
import Footer from "../../components/footer/Footer";
import GeneralPhotos from "../../components/generalPhotos/GeneralPhotos";
const Home = () => {
  return <div className="bg-[#fbfbfb]">
    <Header/>
    <MainRooms/>
    <Opportunities/>
    <GeneralPhotos/>
    <Footer/>
  </div>;
};

export default Home;
