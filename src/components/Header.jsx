import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <p>Kasa</p>
      <Link to={`/`}>Acceuil</Link>
      <Link to={`/a-propos`}>A Propos</Link>
    </div>
  );
}
