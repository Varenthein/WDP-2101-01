import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.scss';

const Counter = () => {
  const days = 25;
  const hours = 10;
  const minutes = 45;
  const seconds = 30;
  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <span className={styles.value}>{days}</span>
        <span className={styles.unit}>DAYS</span>
      </div>
      <div className={styles.item}>
        <span className={styles.value}>{hours}</span>
        <span className={styles.unit}>HRS</span>
      </div>
      <div className={styles.item}>
        <span className={styles.value}>{minutes}</span>
        <span className={styles.unit}>MINS</span>
      </div>
      <div className={styles.item}>
        <span className={styles.value}>{seconds}</span>
        <span className={styles.unit}>SECS</span>
      </div>
    </div>
  );
};

Counter.propTypes = {
  dealTime: PropTypes.number,
};

export default Counter;
