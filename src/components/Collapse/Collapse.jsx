import styles from './Collapse.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow_l.svg';

export default function Collapse({ title, size = 'medium', children }) {
  const [openState, setOpenState] = useState(false);

  function switchOpenState() {
    if (openState) setOpenState(false);
    else setOpenState(true);
  }

  return (
    <div
      className={classNames(
        styles.collapse,
        openState ? styles.open : styles.closed,
        styles[size]
      )}
    >
      <button className={styles.head} onClick={switchOpenState}>
        {title}
        <div className={styles.arrowIcon}>
          <ArrowLeftIcon />
        </div>
      </button>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
};
