import { useLoaderData } from 'react-router-dom';
import getLogementById from '../../service/getLogementById';

export default function Logement() {
  const logement = useLoaderData().logement;

  return (
    <div className="Logement">
      <h1>Logement {logement.id}</h1>
    </div>
  );
}

export async function loader({ params }) {
  const logement = getLogementById(params.id);
  return { logement };
}
