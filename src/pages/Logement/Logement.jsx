/* eslint-disable no-unused-vars */
import styles from './Logement.module.css';
import { useLoaderData } from 'react-router-dom';
import getLogementById from '../../service/getLogementById';
import TagContainer from '../../components/TagContainer/TagContainer';
import Profile from '../../components/Profile/Profile';
import Rating from '../../components/Rating/Rating';
import Carousel from '../../components/Carousel/Carousel';
import Dropdown from '../../components/Dropdown/Dropdown';

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
      <Carousel pictures={pictures} />
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
      <div className={styles.detail}>
        <Dropdown title="Description" content={description} />
        <Dropdown title="Équipements" content={equipments} />
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const logement = getLogementById(params.id);
  return { logement };
}
