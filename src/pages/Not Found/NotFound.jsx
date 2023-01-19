import { useRouteError, Link } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="NotFound">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={`/`}>Retourner sur la page d'acceuil</Link>
    </div>
  );
}
