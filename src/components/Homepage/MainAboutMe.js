import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Main.module.scss";

export const MainAboutMe = () => {
  return (
    <div className={styles.main_aboutme}>
      <Container>
        <Row>
          <Col md={5}></Col>
          <Col>
            <h3>VISIT MY GEOGRAPHY, HIER ME</h3>
            <h1>About Me</h1>
            <p>
              Suggested by his singing teachers and repertoire masters, Luis
              performed in one of the most important singing competitions in the
              world “Cardiff Singer of the World” in Wales where he reached the
              grand finale having an excellent participation that meant the real
              beginning of an international career as an opera singer. <br />
              <br />
              The tenor became part of the stable cast of opera in the theater
              of the German city of Bremen, where he sings a large number of
              leading roles in operas of the universal repertoire . At the same
              time he has also been able to sing a wide symphonic repertoire.
              With an active career as a soloist in Europe , Luis also dedicates
              part of his time to teach , motivating and helping in the vocal
              development of young singers who venture into the fascinating art
              of singing .
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
