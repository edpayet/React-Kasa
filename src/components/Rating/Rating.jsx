import styles from './Rating.module.css';
import { ReactComponent as ReactIcon } from '../../icons/star.svg';

export default function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className={styles.rating}>
      {range.map((rangeElem) => (
        <ReactIcon
          className={parseInt(rating) >= rangeElem ? styles.full : styles.empty}
          key={rangeElem.toString()}
        />
      ))}
    </div>
  );
}
