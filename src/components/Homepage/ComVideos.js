import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Main.module.scss";
import YouTube from "react-youtube";

export const ComVideos = ({ name, id, url }) => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <div onClick={() => setLgShow(true)} className={styles.video_list}>
        <img src={url} alt={name} />
        <h3>{name}</h3>
      </div>
      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube
            videoId={id}
            opts={{
              width: "560",
              height: "315",
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
