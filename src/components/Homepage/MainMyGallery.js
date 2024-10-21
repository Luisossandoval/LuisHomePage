import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Main.module.scss";

export const MainMyGallery = () => {
  return (
    <div className={styles.main_mygallery}>
      <Container>
        <h1>My Gallery</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src='../../images/mainpage/main_gallery_01.png'
              alt='photo name'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='../../images/mainpage/main_gallery_01.png'
              alt='photo name'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='../../images/mainpage/main_gallery_01.png'
              alt='photo name'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='../../images/mainpage/main_gallery_01.png'
              alt='photo name'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='../../images/mainpage/main_gallery_01.png'
              alt='photo name'
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};
