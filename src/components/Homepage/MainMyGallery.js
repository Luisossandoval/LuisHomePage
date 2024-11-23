import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Main.module.scss";

export const MainMyGallery = () => {
  const galleryList = [
    {
      name: "../../images/mainpage/main_gallery_01.png",
      alt: "photo name",
    },
    {
      name: "../../images/mainpage/main_gallery_02.png",
      alt: "photo name",
    },
    {
      name: "../../images/mainpage/main_gallery_03.png",
      alt: "photo name",
    },
    {
      name: "../../images/mainpage/main_gallery_04.png",
      alt: "photo name",
    },
    {
      name: "../../images/mainpage/main_gallery_01.png",
      alt: "photo name",
    },
    {
      name: "../../images/mainpage/main_gallery_02.png",
      alt: "photo name",
    },
  ];
  return (
    <div className={styles.main_mygallery}>
      <Container>
        <h1>My Gallery</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {galleryList.map((gallery) => {
            return (
              <SwiperSlide>
                <img src={gallery.name} alt={gallery.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};
