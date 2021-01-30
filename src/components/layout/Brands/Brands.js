import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = ({ brands }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={styles.wrapper}>
          <div className={styles.arrow}>
            <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
          </div>
          <div className={styles.brandList}>
            {brands.map(brand => (
              <div className={styles.brands} key={brand.id} {...brand}>
                <img src={brand.image} alt='brand-logo' />
              </div>
            ))}
          </div>
          <div className={styles.arrow}>
            <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
