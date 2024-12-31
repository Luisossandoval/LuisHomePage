import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Main.module.scss";

export const MainMyGallery = () => {
  const [lgShow, setLgShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const handleShow = (index) => {
    setCurrentImage(index);
    setLgShow(true);
  };

  const changeImage = (direction) => {
    setCurrentImage((prev) => {
      if (direction === "next") {
        return (prev + 1) % galleryList.length;
      } else {
        return (prev - 1 + galleryList.length) % galleryList.length;
      }
    });
  };
  const galleryList = [
    {
      name: "../../images/mainpage/main_gallery_01.png",
      ori: "../../images/mainpage/ori_gallery_01.png",
      alt: "photo name",
      title: "Idomeneo",
      artist: "Wolfgang Amadeus Mozart",
    },
    {
      name: "../../images/mainpage/main_gallery_02.png",
      ori: "../../images/mainpage/ori_gallery_02.png",
      alt: "photo name",
      title: "L'étoile",
      artist: "Emmanuel Chabrier",
    },
    {
      name: "../../images/mainpage/main_gallery_03.png",
      ori: "../../images/mainpage/ori_gallery_03.png",
      alt: "photo name",
      title: "Die Zauberflöte",
      artist: "Wolfgang Amadeus Mozart",
    },
    {
      name: "../../images/mainpage/main_gallery_04.png",
      ori: "../../images/mainpage/ori_gallery_04.png",
      alt: "photo name",
      title: "Jenůfa",
      artist: "Leoš Janáček",
    },
    {
      name: "../../images/mainpage/main_gallery_05.png",
      ori: "../../images/mainpage/ori_gallery_05.png",
      alt: "photo name",
      title: "Maometto II",
      artist: "Gioachino Rossini",
    },
    {
      name: "../../images/mainpage/main_gallery_06.png",
      ori: "../../images/mainpage/ori_gallery_06.png",
      alt: "photo name",
      title: "Der Fliegender Holländer",
      artist: "Richard Wagner",
    },
    {
      name: "../../images/mainpage/main_gallery_07.png",
      ori: "../../images/mainpage/ori_gallery_07.png",
      alt: "photo name",
      title: "Macbeth",
      artist: "Giuseppe Verdi",
    },
    {
      name: "../../images/mainpage/main_gallery_08.png",
      ori: "../../images/mainpage/ori_gallery_08.png",
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
          {galleryList.map((gallery, index) => {
            return (
              <SwiperSlide>
                <div className={styles.gallery_list}>
                  <div onClick={() => handleShow(index)}>
                    <img src={gallery.name} alt={gallery.alt} key={index} />
                  </div>
                  <div className={styles.gallery_name}>
                    <h4>{gallery.title}</h4>
                    <span>{gallery.artist}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Modal
          size='lg'
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby='example-modal-sizes-title-lg'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id='example-modal-sizes-title-lg'>
              {galleryList[currentImage].title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal_gallery'>
            <img
              src={galleryList[currentImage].ori}
              alt={galleryList[currentImage].alt}
              style={{ width: "100%" }}
            />
            <div className='modal_gallery_btn'>
              <Button
                variant='secondary'
                onClick={() => changeImage("prev")}
                disabled={currentImage === 0}
              >
                Previous
              </Button>
              <Button
                variant='primary'
                onClick={() => changeImage("next")}
                disabled={currentImage === galleryList.length - 1}
              >
                Next
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};
