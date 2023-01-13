import './Home.css';
import data from '../../data/accomodation';

export default function Home() {
  return (
    <div className="Home">
      <h1>Logements</h1>
      <ul>
        {data.map(
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
    </div>
  );
}
