import styles from './Dropdown.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow_l.svg';

export default function Dropdown({ title, content, isLarge }) {
  // TODO: make a large version for about page

  function arrayToListElement(array) {
    return (
      <ul>
        {array.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }

  const [openState, setOpenState] = useState(false);

  function switchOpenState() {
    if (openState) setOpenState(false);
    else setOpenState(true);
  }

  return (
    <div
      className={
        openState
          ? `${styles.dropdown} ${styles.open}`
          : `${styles.dropdown} ${styles.closed}`
      }
    >
      <div className={styles.head}>
        {title}
        <button onClick={switchOpenState}>
          <ArrowLeftIcon />
        </button>
      </div>
      <div className={styles.body}>
        {Array.isArray(content) ? arrayToListElement(content) : content}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
