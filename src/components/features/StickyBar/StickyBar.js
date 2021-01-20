import React from 'react';
import styles from './StickyBar.module.scss';
import PropTypes from 'prop-types';
// import Button from '../../common/Button/Button';

const StickyBar = ({ compare, imageSource }) => (
  <div className={styles.component}>
    <img src={imageSource} className={styles.photo} />
  </div>
);

StickyBar.propTypes = {
  compare: PropTypes.array,
  imageSource: PropTypes.string,
};

export default StickyBar;
