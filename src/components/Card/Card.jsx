import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ to, title, cover }) {
  const gradientDirection = 180;
  const gradientStrength = 0.5;

  return (
    <li
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(${gradientDirection}deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, ${gradientStrength}) 100%), url(${cover})`,
      }}
    >
      <Link to={to}>
        <p>{title}</p>
      </Link>
    </li>
  );
}
