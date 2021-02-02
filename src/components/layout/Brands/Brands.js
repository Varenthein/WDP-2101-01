import React, { useState } from 'react';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';
import PropTypes from 'prop-types';

function Brands({ brands }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={styles.wrapper}>
            <div className={styles.arrow} onClick={() => setIndex(index - 1)}>
              <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
            </div>
            <div className={styles.brandList}>
              <Swipeable
                onLeftAction={() => setIndex(index - 1)}
                onRightAction={() => setIndex(index + 1)}
                enableMouseEvents
              >
                {brands.map(brand => (
                  <div className={styles.brands} key={brand.id} {...brand}>
                    <img src={brand.image} alt='brand-logo' />
                  </div>
                ))}
              </Swipeable>
            </div>
            <button className={styles.arrow} onClick={() => setIndex(index + 1)}>
              <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
