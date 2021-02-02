import React from 'react';
import PropTypes from 'prop-types';
import styles from './Compared.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Compared = ({ imageSource, removeFromCompare }) => (
  <div className={styles.component}>
    <img src={imageSource} alt='compared-product' />
    <div className={styles.imageHover}>
      <Button href='javascript:void(0)' onClick={removeFromCompare}>
        <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
      </Button>
    </div>
  </div>
);

Compared.propTypes = {
  imageSource: PropTypes.string,
  removeFromCompare: PropTypes.func,
};

export default Compared;
