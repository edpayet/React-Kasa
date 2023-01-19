import styles from './Gallery.module.css';

export default function Gallery({ children }) {
  return <ul className={styles.gallery}>{children}</ul>;
}
