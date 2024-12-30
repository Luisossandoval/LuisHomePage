import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Main.module.scss";
import { ComVideos } from "./ComVideos";

export const MainMyVideos = () => {
  const videoList = [
    {
      name: "F.P.Tosti - L'alba separa dalla luce l'ombra",
      id: "KZI1Fy6QIIY",
      imgUrl: "./images/mainpage/main_videos_01.png",
    },
    {
      name: "P.Sorozabal - No puede ser",
      id: "bPwd4grojsw",
      imgUrl: "./images/mainpage/main_videos_02.png",
    },
    {
      name: "M.Grever Despedida",
      id: "kIR_uGhcmDI",
      imgUrl: "./images/mainpage/main_videos_03.png",
    },
    {
      name: "F.CHOPIN - Tristezza",
      id: "8_bgDR9VQJU",
      imgUrl: "./images/mainpage/main_videos_04.png",
    },
    {
      name: "Un aura amorosa",
      id: "L2iEluR_HlQ",
      imgUrl: "./images/mainpage/main_videos_05.png",
    },
    {
      name: "Domine Deus",
      id: "UIblcXHD468",
      imgUrl: "./images/mainpage/main_videos_06.png",
    },
  ];
  return (
    <div className={styles.main_myvideos}>
      <Container>
        <h1>My Videos</h1>
        <Row>
          {videoList.map((video) => {
            return (
              <Col md={6} className={styles.myvideos_content}>
                <ComVideos name={video.name} id={video.id} url={video.imgUrl} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
