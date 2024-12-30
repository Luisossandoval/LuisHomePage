import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Main.module.scss";
import { ComVideos } from "./ComVideos";

export const MainMyVideos = () => {
  const videoList = [
    {
      name: "video1",
      id: "KZI1Fy6QIIY",
      imgUrl: "./images/mainpage/main_videos_01.png",
    },
    {
      name: "video2",
      id: "bPwd4grojsw",
      imgUrl: "./images/mainpage/main_videos_02.png",
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
