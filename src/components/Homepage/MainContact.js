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
        <Row>
          <Col md={5}>email: Luis</Col>
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
                  <button onClick={closePopup}>Confirm</button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
