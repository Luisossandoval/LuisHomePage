import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Main.module.scss";

export const MainBanner = () => {
  return (
    <div className={styles.mainbanner_content}>
      <Container>
        <Row>
          <Col md={6} className={styles.title}>
            <span>Luis</span>
            <span>Olivares</span>
            <span>Sandoval</span>
          </Col>
          <Col md={6}>
            <div className={styles.mainbanner_img_wrap}>
              <div className={styles.mainbanner_images}>
                <div className={`${styles.img_roll} ${styles.bn_img_01}`}>
                  <img
                    src='./images/mainpage/main_banner01.png'
                    alt="Louis's performance photos"
                  />
                </div>
                <div className={`${styles.img_roll} ${styles.bn_img_02}`}>
                  <img
                    src='./images/mainpage/main_banner02.png'
                    alt="Louis's performance photos"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
