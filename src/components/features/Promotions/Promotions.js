import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotions.module.scss';

const Promotions = ({ promotions }) => {
  const [largeContent, smallUpContent, smallDownContent] = [...promotions];
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div
              className={styles.promoLarge}
              style={{
                backgroundImage: `url('${largeContent.imageUrl}')`,
              }}
            >
              <div className={styles.promoLargeContent}>
                <h3 className={styles.heading}>{largeContent.heading}</h3>
                <span className={styles.strong}>{largeContent.textStrong}</span>
                <p className={styles.priceOff}>{largeContent.priceoff}</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='row'>
              <div className='col'>
                <div
                  className={`${styles.promoSmall} ${styles.promoSmallTop}`}
                  style={{
                    backgroundImage: `url('${smallUpContent.imageUrl}')`,
                  }}
                >
                  <div className={styles.promoSmallContent}>
                    <h3 className={styles.heading}>
                      <span className={styles.strong}>
                        {smallUpContent.textStrong}{' '}
                      </span>
                      {smallUpContent.heading}
                    </h3>
                    <p className={styles.subtitle}>{smallUpContent.subtitle}</p>
                    <p className={styles.priceOff}>{smallUpContent.priceoff}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div
                  className={`${styles.promoSmall} ${styles.promoSmallBottom}`}
                  style={{
                    backgroundImage: `url('${smallDownContent.imageUrl}')`,
                  }}
                >
                  <h3 className={styles.heading}>
                    <span className={styles.strong}>
                      {smallDownContent.textStrong}{' '}
                    </span>
                    {smallDownContent.heading}
                  </h3>
                  <p className={styles.priceOff}>{smallDownContent.priceoff}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promotions.propTypes = {
  promotions: PropTypes.array,
};

export default Promotions;
