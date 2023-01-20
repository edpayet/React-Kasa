import styles from './Footer.module.css';
import { ReactComponent as ReactLogo } from '../../icons/logo.svg';

export default function Footer() {
  return (
    <footer>
      <ReactLogo className={styles.logo} />
      <p className={styles.footerText}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
