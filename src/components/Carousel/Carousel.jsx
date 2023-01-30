import styles from './Carousel.module.css';
import { useState } from 'react';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow_l.svg';
import { ReactComponent as ArrowRightIcon } from '../../icons/arrow_r.svg';

export default function Carousel({ pictures }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const previous = () => {
    setSlideIndex((prev) => {
      const newValue = prev - 1;
      return newValue < 1 ? pictures.length : newValue;
    });
  };

  const next = () => {
    setSlideIndex((prev) => {
      const newValue = prev + 1;
      return newValue > pictures.length ? 1 : newValue;
    });
  };

  return (
    <div
      className={`
        ${styles.carousel} 
        ${pictures.length > 1 ? '' : styles.oneSlide}
      `}
    >
      <img src={pictures[slideIndex - 1]} alt={`Logement ${slideIndex}`} />
      <div className={styles.number}>
        {slideIndex}/{pictures.length}
      </div>

      <button className={styles.prev} onClick={previous}>
        <ArrowLeftIcon />
      </button>
      <button className={styles.next} onClick={next}>
        <ArrowRightIcon />
      </button>
    </div>
  );
}
