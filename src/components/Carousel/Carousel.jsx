import styles from './Carousel.module.css';
import { useState } from 'react';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow_l.svg';
import { ReactComponent as ArrowRightIcon } from '../../icons/arrow_r.svg';

export default function Carousel({ pictures }) {
  const [slideIndex, setSlideIndex] = useState(1);

  function changeIndex(n) {
    const newIndex = slideIndex + n;
    console.log(newIndex);
    if (newIndex > pictures.length) {
      setSlideIndex(1);
    } else if (newIndex < 1) {
      setSlideIndex(pictures.length);
    } else setSlideIndex(newIndex);
  }

  return (
    <div className={styles.carousel}>
      <img src={pictures[slideIndex - 1]} alt={`Logement ${slideIndex}`} />
      <div className={styles.number}>
        {slideIndex}/{pictures.length}
      </div>
      <button className={styles.prev} onClick={() => changeIndex(-1)}>
        <ArrowLeftIcon />
      </button>
      <button className={styles.next} onClick={() => changeIndex(1)}>
        <ArrowRightIcon />
      </button>
    </div>
  );
}
