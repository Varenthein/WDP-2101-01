import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './AdvertBox.module.scss';

const AdvertBox = ({ imageSource, name, title, description }) => {
  return (
    <div className={styles.root}>
      <img src={imageSource} alt={name} />
      <div className={styles.textBg}>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <Button className={styles.button}>Shop now</Button>
    </div>
  );
};

AdvertBox.propTypes = {
  imageSource: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  boldTitle: PropTypes.string,
  description: PropTypes.string,
};

export default AdvertBox;
