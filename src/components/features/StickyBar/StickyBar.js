import React from 'react';
import styles from './StickyBar.module.scss';
import PropTypes from 'prop-types';
import Compared from '../Compared/ComparedContainer';
import Button from '../../common/Button/Button';

const StickyBar = ({ compare }) =>
  compare.length > 0 ? (
    <div className={styles.component}>
      {compare.map(productData => (
        <Compared key={productData.id} {...productData} />
      ))}
      <Button className={styles.button}>Compare</Button>
    </div>
  ) : (
    ''
  );

StickyBar.propTypes = {
  compare: PropTypes.array,
  imageSource: PropTypes.string,
};

export default StickyBar;
