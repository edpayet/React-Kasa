import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../logo.svg';

export default function Header() {
  const links = [
    { to: `/`, title: 'Acceuil' },
    { to: `/a-propos`, title: 'A Propos' },
  ];
  // const navLinkClasses = `${styles.logo}`;
  return (
    <div className={styles.header}>
      <ReactLogo className={styles.logo} />
      <nav>
        {links.map(({ to, title }) => (
          <NavLink
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
    </div>
  );
}