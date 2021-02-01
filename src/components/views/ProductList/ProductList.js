import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container p-0'>
      <div className='row m-0'>
        <div
          className={`w-100 d-flex flex-column align-items-center justify-content-center ${styles.ad}`}
        >
          <h1 className='text-center text-uppercase'>
            Bedroom <span>Furniture</span>
          </h1>
          <h2 className='text-center text-uppercase'>
            Always <span>25%</span> off or more
          </h2>
        </div>
      </div>
      <div className='row m-0'>
        <div className={`${styles.breadcumb}`}></div>
      </div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
