import styles from './Profile.module.css';

export default function Profile({ host }) {
  return (
    <div className={styles.profile}>
      <p>{host.name}</p>
      <div
        className={styles.picture}
        style={{
          backgroundImage: ` url(${host.picture})`,
        }}
      ></div>
    </div>
  );
}
