import React from "react";
import { MainBanner } from "../../components/Homepage/MainBanner";
import { MainMyGallery } from "../../components/Homepage/MainMyGallery";
import { MainAboutMe } from "../../components/Homepage/MainAboutMe";
import { MainMyVideos } from "../../components/Homepage/MainMyVideos";
import { MainContact } from "../../components/Homepage/MainContact";

const Homepage = () => {
  return (
    <div>
      <MainBanner />
      <MainMyGallery />
      <MainAboutMe />
      <MainMyVideos />
      <MainContact />
    </div>
  );
};

export default Homepage;
