import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Main.module.scss";
import { ComVideos } from "./ComVideos";

export const MainMyVideos = () => {
  const videoList = [
    {
      name: "video1",
      id: "xlzPVcccz1g",
      imgUrl: "./images/mainpage/main_video01.png",
    },
    {
      name: "video2",
      id: "R1miFTDzghI",
      imgUrl: "./images/mainpage/main_video01.png",
    },
  ];
  return (
    <div className={styles.main_myvideos}>
      <Container>
        <h1>My Videos</h1>
        <Row>
          {videoList.map((video) => {
            return (
              <Col>
                <ComVideos name={video.name} id={video.id} url={video.imgUrl} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
