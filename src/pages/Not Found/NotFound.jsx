import { useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="NotFound">
      <h1>404</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
