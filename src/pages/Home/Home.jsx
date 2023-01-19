import './Home.css';
import getLogements from '../../service/getLogements';
import { useLoaderData } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import Card from '../../components/Card/Card';

export default function Home() {
  const { logements } = useLoaderData();
  // <Link to={`/logements/${id}`}>{title}</Link>
  return (
    <div className="Home">
      <Hero />
      {logements.length ? (
        <Gallery>
          {logements.map((logement) => (
            <Card
              key={logement.id}
              to={`/logements/${logement.id}`}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </Gallery>
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
