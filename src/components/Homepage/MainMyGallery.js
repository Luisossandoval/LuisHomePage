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
      title: "Idomeneo",
      artist: "Wolfgang Amadeus Mozart",
    },
    {
      name: "../../images/mainpage/main_gallery_02.png",
      alt: "photo name",
      title: "L'étoile",
      artist: "Emmanuel Chabrier",
    },
    {
      name: "../../images/mainpage/main_gallery_03.png",
      alt: "photo name",
      title: "Die Zauberflöte",
      artist: "Wolfgang Amadeus Mozart",
    },
    {
      name: "../../images/mainpage/main_gallery_04.png",
      alt: "photo name",
      title: "Jenůfa",
      artist: "Leoš Janáček",
    },
    {
      name: "../../images/mainpage/main_gallery_05.png",
      alt: "photo name",
      title: "Maometto II",
      artist: "Gioachino Rossini",
    },
    {
      name: "../../images/mainpage/main_gallery_06.png",
      alt: "photo name",
      title: "Der Fliegender Holländer",
      artist: "Richard Wagner",
    },
    {
      name: "../../images/mainpage/main_gallery_07.png",
      alt: "photo name",
      title: "Macbeth",
      artist: "Giuseppe Verdi",
    },
    {
      name: "../../images/mainpage/main_gallery_08.png",
      alt: "photo name",
      title: "Tosca",
      artist: "Giacomo Puccini ",
    },
  ];
  return (
    <div className={styles.main_mygallery}>
      <Container>
        <h1>My Gallery</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {galleryList.map((gallery) => {
            return (
              <SwiperSlide>
                <div>
                  <img src={gallery.name} alt={gallery.alt} />
                </div>
                <div className={styles.gallery_name}>
                  <h4>{gallery.title}</h4>
                  <span>{gallery.artist}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};
