import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Biography.module.scss";

const Biography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='detail_header'>
        <Container>
          <h2 className='detail_title'>Biography</h2>
        </Container>
      </div>
      <div className='detail_body'>
        <Container>
          <Row className={styles.detail_content}>
            <Col md={6} className={styles.profile_img}>
              <img
                src='./images/profile/profile_01.png'
                alt="Louis's performance photos"
              />
            </Col>
            <Col md={6} className={styles.profile_text}>
              <h3>Luis Olivares Sandoval - Tenor</h3>
              <p>
                Luis Olivares Sandoval was born in Calama in the north of Chile
                in South America . At the age of nineteen he joined the chorus
                of the Municipal Theater of Santiago where he sang secondary and
                main roles while studying at the music conservatory of
                Universidad de Chile and vocal technic with Carlos Beltrami and
                Nora Lopez . Luis grew up in a family that enjoyed folk music,
                especially Chilean and Mexican music,rich in rhythms, harmonies
                and poetry. At a very early age his parents noticed in him the
                special color of his voice and melodic musical abilities and
                convinced him to participate in school festivals where at his
                young age he always stood out , supporting and motivating him in
                his artistic vocation. During his adolescence Luis joined his
                school choir and was urged by the choir conductor himself to
                enter the music conservatory in Santiago de Chile, where he
                later became part of the professional choir of the opera of
                Santiago de Chile and where he remained and was able to grow on
                stage. He had the opportunity to participate as a soloist in
                many productions and to alternate with great opera figures .
                This allowed him to Win awards for the best operatic figure and
                prizes from specialized critics , obtaining the recognition of
                his colleagues and teachers .
              </p>
            </Col>
          </Row>
          <Row className={styles.detail_content}>
            <Col md={5} className={styles.profile_text}>
              <p>
                Suggested by his singing teachers and repertoire masters, Luis
                performed in one of the most important singing competitions in
                the world{" "}
                <span>
                  <a
                    href='https://www.bbc.co.uk/programmes/profiles/gc2yXpgHmTXSfv4TydQ5QT/chile-luis-olivares-sandoval'
                    target='_blank'
                    rel='noreferrer'
                  >
                    “Cardiff Singer of the World”
                  </a>
                </span>{" "}
                in Wales where he reached the grand finale having an excellent
                participation that meant the real beginning of an international
                career as an opera singer. The tenor became part of the stable
                cast of opera in the theater of the German city of Bremen, where
                he sings a large number of leading roles in operas of the
                universal repertoire . At the same time he has also been able to
                sing a wide symphonic repertoire. With an active career as a
                soloist in Europe , Luis also dedicates part of his time to
                teach , motivating and helping in the vocal development of young
                singers who venture into the fascinating art of singing .
              </p>
            </Col>
            <Col md={6} className={styles.profile_img}>
              <img
                src='./images/profile/profile_02.png'
                alt="Louis's performance photos"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Biography;
