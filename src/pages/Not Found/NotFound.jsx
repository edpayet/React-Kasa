import { useRouteError, Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import '../Root/root.css';
import Header from '../../components/Header/Header';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  // function showError(error) {
  //   return (
  //     <p>
  //       <i>{error.statusText || error.message}</i>
  //     </p>
  //   );
  // }

  return (
    <>
      <Header />
      <main>
        <div className={styles.notFound}>
          <h1 className={styles.errorCode}>404</h1>
          <h1 className={styles.errorMessage}>
            Oups! La page que vous demandez n'existe pas.
          </h1>
          <Link to={`/`} className={styles.redirectLink}>
            Retourner sur la page d'acceuil
          </Link>
        </div>
      </main>
    </>
  );
}
