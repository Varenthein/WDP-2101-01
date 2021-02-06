import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';

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
        <div className={styles.breadcrumbBar}>
          <span className={styles.breadcrumb}>Home</span>
          <span className={styles.breadcrumb}>&gt;</span>
          <span className={styles.breadcrumb}>
            <span>{match.params.categoryId}</span>
          </span>
        </div>
      </div>
      <div className={`row m-0 mt-4 ${styles.productList}`}>
        <div className='col-9'>
          <div className='row'>
            <div className={`col-4 text-uppercase ${styles.categoryName}`}>
              {match.params.categoryId}
            </div>
            <div className='col-8'>
              <div className='row justify-content-between'>
                <div className='col-7'>
                  <div className={`${styles.dropdownInput} ${styles.sortByInput}`}>
                    <label>Sort By</label>
                    <select>
                      <option value='none'>Price: Lowest first</option>
                      <option value='none'>Price: Highest first</option>
                    </select>
                  </div>
                </div>
                <div className='col-4'>
                  <div className={`${styles.dropdownInput} ${styles.showInput}`}>
                    <label>Show</label>
                    <select>
                      <option value='none'>12</option>
                      <option value='none'>8</option>
                      <option value='none'>4</option>
                    </select>
                  </div>
                </div>
                <div className='col-1'>
                  <div className={styles.view}>
                    <FontAwesomeIcon className={styles.icon} icon={faThLarge} />
                    <FontAwesomeIcon className={styles.icon} icon={faThList} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-3'>Filter by categories</div>
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
