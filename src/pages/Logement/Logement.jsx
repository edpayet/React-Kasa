import { useParams } from 'react-router-dom';

export default function Logement() {
  const { id } = useParams();
  return (
    <div className="Logement">
      <h1>Logement {id}</h1>
    </div>
  );
}
