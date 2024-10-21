import React from "react";
import { MainBanner } from "../../components/Homepage/MainBanner";
import { MainMyGallery } from "../../components/Homepage/MainMyGallery";
import { MainAboutMe } from "../../components/Homepage/MainAboutMe";
import { MainMyVideos } from "../../components/Homepage/MainMyVideos";

const Homepage = () => {
  return (
    <div>
      <MainBanner />
      <MainMyGallery />
      <MainAboutMe />
      <MainMyVideos />
    </div>
  );
};

export default Homepage;
