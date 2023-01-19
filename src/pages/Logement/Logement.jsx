/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router-dom';
import getLogementById from '../../service/getLogementById';

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
    <div className="Logement">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
}

export async function loader({ params }) {
  const logement = getLogementById(params.id);
  return { logement };
}
