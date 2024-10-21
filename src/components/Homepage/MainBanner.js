import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Main.module.scss";

export const MainBanner = () => {
  return (
    <div className={styles.mainbanner_content}>
      <Container>
        <Row>
          <Col md={6} className={styles.title}>
            Luis
            <br />
            Olivares
            <br />
            Sandoval
          </Col>
          <Col md={6}>ddd</Col>
        </Row>
      </Container>
    </div>
  );
};
