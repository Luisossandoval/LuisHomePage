import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Main.module.scss";

export const MainContact = () => {
  const form = useRef();
  const [namePlaceholder, setNamePlaceholder] = useState("Write your name.");
  const [messagePlaceholder, setMessagePlaceholder] = useState(
    "Write the content of the email."
  );
  const [popupMessage, setPopupMessage] = useState(null); // 팝업 메시지 상태
  const [showPopup, setShowPopup] = useState(false); // 팝업 표시 여부 상태
  const [isSubmitting, setIsSubmitting] = useState(false); // 제출 중 상태

  const onSendForm = (e) => {
    e.preventDefault();
    if (isSubmitting) return; // 이미 제출 중이면 실행하지 않음

    setIsSubmitting(true); // 제출 상태 활성화

    emailjs
      .sendForm(
        "service_rita5ja",
        "template_53wei0q",
        form.current,
        "bU2qSkPVEhzdeE6gM"
      )
      .then(
        () => {
          setPopupMessage("The email has been sent successfully!");
          setShowPopup(true); // 성공 팝업 띄우기
        },
        (error) => {
          setPopupMessage("An error occurred. Please try again.");
          setShowPopup(true); // 에러 팝업 띄우기
        }
      )
      .finally(() => setIsSubmitting(false)); // 제출 상태 해제
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage(null);
    form.current.reset(); // 폼 필드 초기화
  };

  return (
    <div className={styles.main_contact}>
      <Container>
        <h3>Contact me</h3>
        <h1>My Contact</h1>
        <Row className={styles.contact_content}>
          <Col md={5} className={styles.content_profile}>
            <div className={styles.profile}>
              <div className={styles.profile_img}>
                <img
                  src='../../images/mainpage/contact_profile.png'
                  alt='Wearing a black shirt with a white jacket over it, the right hand lightly holding the right side of the jacket. Looking straight ahead with a dark black background that is dimly lit, creating a luxurious atmosphere with light glowing around the focal point.'
                />
              </div>
              <div className={styles.profile_text}>
                <div>
                  <h3>Luis Olivares Sandoval</h3>
                  <p>
                    If contact is not established, please contact me using the
                    information below.
                  </p>
                  <span>
                    <span className={styles.bold}>Email :</span>
                    olivsandtenor@gmail.com
                  </span>
                </div>
                <div className={styles.sns_content}>
                  <h3>PLEASE FOLLOW ME</h3>
                  <ul className={styles.sns_list}>
                    <li>
                      <a
                        href='https://www.youtube.com/@PianistsuandTenorluis'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          src='../../images/mainpage/sns_youtube.svg'
                          alt='This is the YouTube logo. Clicking on it will open Luis’s YouTube page.'
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.facebook.com/luis.olivaressandoval'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          src='../../images/mainpage/sns_meta.svg'
                          alt='This is the Meta logo. Clicking on it will open Luis’s Meta page.'
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className={styles.form_wrap}>
              <form className={styles.form} ref={form} onSubmit={onSendForm}>
                <label>Name</label>
                <input
                  name='name'
                  placeholder={namePlaceholder}
                  onFocus={() => setNamePlaceholder("")}
                  onBlur={() => setNamePlaceholder("Write your name.")}
                />
                <label>Email Address</label>
                <input name='mail' placeholder='Write your email address.' />
                <label>Subject</label>
                <input
                  name='subject'
                  placeholder='Write the subject of the email.'
                />
                <label>Message</label>
                <textarea
                  name='message'
                  placeholder={messagePlaceholder}
                  onFocus={() => setMessagePlaceholder("")}
                  onBlur={() =>
                    setMessagePlaceholder("Write the content of the email.")
                  }
                  rows='5'
                />

                <button
                  className={styles.btn_send}
                  type='submit'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send Email"}
                </button>
              </form>

              {/* 팝업 메시지 */}
              {showPopup && (
                <div className={styles.message_popup} style={{}}>
                  <p>{popupMessage}</p>
                  <button className={styles.popup_button} onClick={closePopup}>
                    Confirm
                  </button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
