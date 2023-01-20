/* eslint-disable no-unused-vars */
import styles from './Logement.module.css';
import { useLoaderData } from 'react-router-dom';
import getLogementById from '../../service/getLogementById';
import TagContainer from '../../components/TagContainer/TagContainer';
import Profile from '../../components/Profile/Profile';
import Rating from '../../components/Rating/Rating';

export default function Logement() {
  const {
    id,
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = useLoaderData().logement;

  return (
    <div className={styles.logement}>
      <div className={styles.quickInfo}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.location}>{location}</p>
          <TagContainer tags={tags} />
        </div>
        <div className={styles.host}>
          <Profile host={host} />
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const logement = getLogementById(params.id);
  return { logement };
}
