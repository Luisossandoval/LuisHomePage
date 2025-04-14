import React, { useEffect, useState } from "react";
import { Container, Modal, Button, Row, Col } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./Gallery.module.scss";

const ImageWithFallback = ({ webp, fallback, alt, ...props }) => (
  <picture>
    <source srcSet={webp} type='image/webp' />
    <img src={fallback} alt={alt} loading='lazy' {...props} />
  </picture>
);

const Gallery = () => {
  const [galleryList, setGalleryList] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [lgShow, setLgShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data) => {
        setGalleryList(data);
        setVisibleData(data.slice(0, 16));
      });
  }, []);

  const fetchMoreData = () => {
    setTimeout(() => {
      const next = galleryList.slice(
        visibleData.length,
        visibleData.length + 8
      );
      setVisibleData((prev) => [...prev, ...next]);
      if (visibleData.length + next.length >= galleryList.length) {
        setHasMore(false);
      }
    }, 400);
  };

  const handleShow = (index) => {
    setCurrentImage(index);
    setLgShow(true);
  };

  const changeImage = (direction) => {
    setCurrentImage((prev) => {
      if (direction === "next") {
        return (prev + 1) % galleryList.length;
      } else {
        return (prev - 1 + galleryList.length) % galleryList.length;
      }
    });
  };

  return (
    <div>
      <div className='detail_header'>
        <Container>
          <h2 className='detail_title'>Gallery</h2>
        </Container>
      </div>

      <div className='detail_body'>
        <Container>
          <InfiniteScroll
            dataLength={visibleData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<p style={{ textAlign: "center" }}>Loading…</p>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>You’ve seen all the images!</b>
              </p>
            }
          >
            <Row>
              {visibleData.map((gallery, index) => (
                <Col md='3' xs='6' key={index} className={styles.card}>
                  <div
                    className={styles.img_content}
                    onClick={() => handleShow(galleryList.indexOf(gallery))}
                  >
                    <img
                      src={gallery.name} // PNG only
                      alt={gallery.alt}
                      loading='lazy'
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className={styles.img_info}>
                    <h4>{gallery.title}</h4>
                    <span>{gallery.artist}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </InfiniteScroll>

          <Modal
            size='lg'
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby='example-modal-sizes-title-lg'
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id='example-modal-sizes-title-lg'>
                {galleryList[currentImage]?.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal_gallery'>
              {galleryList[currentImage] && (
                <ImageWithFallback
                  webp={galleryList[currentImage].oriWebp} // WebP for modern browsers
                  fallback={galleryList[currentImage].ori} // JPG fallback
                  alt={galleryList[currentImage].alt}
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    maxHeight: "60vh", // 화면 기준 높이 제한
                    objectFit: "contain", // 이미지 왜곡 없이 맞춤
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              )}
              <div className='modal_gallery_btn'>
                <Button
                  variant='secondary'
                  onClick={() => changeImage("prev")}
                  disabled={currentImage === 0}
                >
                  Previous
                </Button>
                <Button
                  variant='primary'
                  onClick={() => changeImage("next")}
                  disabled={currentImage === galleryList.length - 1}
                >
                  Next
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </div>
  );
};

export default Gallery;
