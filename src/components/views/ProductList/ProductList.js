import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = ({ match }) => (
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
        <div className={styles.breadcumbBar}>
          <span className={styles.breadcumb}>Home</span>
          <span className={styles.breadcumb}>&gt;</span>
          <span className={styles.breadcumb}>
            <span>{match.params.categoryId}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

ProductList.propTypes = {
  match: PropTypes.object,
};

ProductList.defaultProps = {
  match: { params: '' },
};

export default ProductList;
