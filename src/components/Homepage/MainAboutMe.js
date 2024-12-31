import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Main.module.scss";

export const MainAboutMe = () => {
  return (
    <div className={styles.main_aboutme}>
      <Container>
        <Row>
          <Col md={5}>
            <div className={styles.main_profile_img}>
              <img
                src='./images/mainpage/main_profile.png'
                alt='A spotlight shines behind Luis in a dark setting, and she stands with her arms crossed on a grand piano, wearing a black T-shirt and white jacket.'
              />
            </div>
          </Col>
          <Col md={7} className={styles.main_profile_content}>
            <div className={styles.main_profile_text}>
              <h3>VISIT MY GEOGRAPHY, HIER ME</h3>
              <h1>About Me</h1>
              <p>
                Suggested by his singing teachers and repertoire masters, Luis
                performed in one of the most important singing competitions in
                the world
                <span>
                  <a
                    href='https://www.bbc.co.uk/programmes/profiles/gc2yXpgHmTXSfv4TydQ5QT/chile-luis-olivares-sandoval'
                    target='_blank'
                    rel='noreferrer'
                  >
                    “Cardiff Singer of the World”{" "}
                  </a>
                </span>
                in Wales where he reached the grand finale having an excellent
                participation that meant the real beginning of an international
                career as an opera singer. <br />
                <br />
                The tenor became part of the stable cast of opera in the theater
                of the German city of Bremen, where he sings a large number of
                leading roles in operas of the universal repertoire . At the
                same time he has also been able to sing a wide symphonic
                repertoire. With an active career as a soloist in Europe , Luis
                also dedicates part of his time to teach , motivating and
                helping in the vocal development of young singers who venture
                into the fascinating art of singing .
              </p>
            </div>
            <div className={styles.btn_goBiography}>
              <button>Go to my biography</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
