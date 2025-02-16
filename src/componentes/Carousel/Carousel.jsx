import React from "react";
import styles from "./Carousel.module.css";
import { useState } from "react";

function Carousel({ images}) {
  const [imgCurrentIndex, setImgCurrentIndex] = useState(0);

  const nextImage = () => {
    if (imgCurrentIndex < images.length - 1) {
      setImgCurrentIndex(imgCurrentIndex + 1);
    } else {
      setImgCurrentIndex(0);
    }
  };

  const prevImage = () => {
    if (imgCurrentIndex > 0) {
      setImgCurrentIndex(imgCurrentIndex - 1);
    } else {
      setImgCurrentIndex(images.length - 1);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button onClick={prevImage} className={styles.carouselButton}>←</button>
      <img
        src={images[imgCurrentIndex]}
        alt={`Imagem ${imgCurrentIndex + 1}`}
        className={styles.carouselImage}
      />
      <button onClick={nextImage} className={styles.carouselButton}>→</button>
    </div>
  );
}

export default Carousel;
