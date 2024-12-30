import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Main.module.scss";
import YouTube from "react-youtube";

export const ComVideos = ({ name, id, url }) => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <div onClick={() => setLgShow(true)} className={styles.video_list}>
        <div className={styles.thumb_img}>
          <img src={url} alt={name} />
        </div>
        <h3 className={styles.video_name}>{name}</h3>
      </div>
      <Modal
        size='xl'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube
            videoId={id}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 0,
                rel: 0,
                modestbranding: 1,
              },
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};
