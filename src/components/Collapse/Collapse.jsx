import styles from './Collapse.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow_l.svg';

export default function Collapse({ title, size = 'medium', children }) {
  const [openState, setOpenState] = useState(true);

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
      <div className={styles.head}>
        {title}
        <button onClick={switchOpenState}>
          <ArrowLeftIcon />
        </button>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
};
