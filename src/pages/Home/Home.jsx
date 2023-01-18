import './Home.css';
import getLogements from '../../service/getLogements';
import { useLoaderData } from 'react-router-dom';

export default function Home() {
  const { logements } = useLoaderData();

  return (
    <div className="Home">
      <h1>Logements</h1>

      {logements.length ? (
        <ul>
          {logements.map(
            ({
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
            }) => (
              <li key={id}>{title}</li>
            )
          )}
        </ul>
      ) : (
        <p>
          <i>Aucun logement</i>
        </p>
      )}
    </div>
  );
}

export async function loader() {
  const logements = await getLogements();
  return { logements };
}
