import styles from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../icons/logo.svg';

export default function Header() {
  const links = [
    { to: `/`, title: 'Accueil' },
    { to: `/a-propos`, title: 'A Propos' },
  ];
  return (
    <header>
      <Link to={links[0].to} className={styles.logo}>
        <ReactLogo />
      </Link>
      <nav>
        {links.map(({ to, title }, index) => (
          <NavLink
            key={index}
            to={to}
            className={({ isActive, isPending }) =>
              isActive
                ? `${styles.navLink} ${styles.active}`
                : isPending
                ? `${styles.navLink} ${styles.pending}`
                : `${styles.navLink}`
            }
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
