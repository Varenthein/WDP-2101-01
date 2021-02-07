import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList, faTags } from '@fortawesome/free-solid-svg-icons';

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
        <div className={`col-9`}>
          <div className={`row ${styles.header}`}>
            <div className={`col-3 p-0 text-uppercase ${styles.categoryName}`}>
              {match.params.categoryId}
            </div>
            <div className='col-9'>
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
        <div className={`col-3 ${styles.filtres}`}>
          <div className={styles.header}>
            <span className={styles.title}>Filter by categories</span>
          </div>
          <div className={styles.filtresList}>
            <ul>
              <li className={`${styles.active}`}>
                <span className={`${styles.filterName}`}>&gt; Furniture</span>
                <span className={`${styles.count}`}>3</span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>&gt; Sofa</span>
                <span className={styles.count}>4</span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>&gt; Chair</span>
                <span className={styles.count}>5</span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>&gt; Table</span>
                <span className={styles.count}>5</span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>&gt; Bedroom</span>
                <span className={styles.count}>5</span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>&gt; Furniture</span>
                <span className={styles.count}>5</span>
              </li>
            </ul>
          </div>
          <div className={styles.header}>
            <span className={styles.title}>Filter by price</span>
            <div></div>
          </div>
          <div className={styles.header}>
            <span className={styles.title}>Filter by color</span>
          </div>
          <div className={styles.filtresList}>
            <ul>
              <li className={`${styles.active}`}>
                <span className={`${styles.filterName}`}>
                  <span className={`${styles.colorFilterBox} ${styles.red}`}></span>Red
                </span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>
                  <span className={`${styles.colorFilterBox} ${styles.black}`}></span>
                  Black
                </span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>
                  <span className={`${styles.colorFilterBox} ${styles.yellow}`}></span>
                  Yellow
                </span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>
                  <span className={`${styles.colorFilterBox} ${styles.blue}`}></span>
                  Blue
                </span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>
                  <span className={`${styles.colorFilterBox} ${styles.pink}`}></span>
                  Pink
                </span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>
                  <span className={`${styles.colorFilterBox} ${styles.green}`}></span>
                  Green
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.header}>
            <span className={styles.title}>Filter by size</span>
          </div>
          <div className={styles.filtresList}>
            <ul>
              <li className={`${styles.active}`}>
                <span className={`${styles.filterName}`}>
                  <label htmlFor='S'>
                    <input type='checkbox' id='S' defaultChecked></input>S
                  </label>
                </span>
                <span className={`${styles.count}`}>3</span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>
                  <label htmlFor='M'>
                    <input type='checkbox' id='M'></input>M
                  </label>
                </span>
                <span className={styles.count}>4</span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>
                  <label htmlFor='L'>
                    <input type='checkbox' id='L'></input>L
                  </label>
                </span>
                <span className={styles.count}>5</span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>
                  <label htmlFor='XL'>
                    <input type='checkbox' id='XL'></input>XL
                  </label>
                </span>
                <span className={styles.count}>5</span>
              </li>
              <li>
                <span className={`${styles.filterName}`}>
                  <label htmlFor='XX'>
                    <input type='checkbox' id='XX'></input>XX
                  </label>
                </span>
                <span className={styles.count}>5</span>
              </li>
            </ul>
          </div>
          <div className={styles.header}>
            <span className={styles.title}>Filter by size</span>
          </div>
          <div className={`${styles.filtresList}`}>
            <ul className={`${styles.tagFilter}`}>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Table</span>
                </div>
              </li>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Chair</span>
                </div>
              </li>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Hand Bag</span>
                </div>
              </li>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Women</span>
                </div>
              </li>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Fashion</span>
                </div>
              </li>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Clothes</span>
                </div>
              </li>
            </ul>
          </div>
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
