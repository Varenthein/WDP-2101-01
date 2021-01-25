import React from 'react';
import styles from './Promotions.module.scss';

const Promotions = props => {
  console.log(props);
  const url =
    'https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div
              className={styles.promoLarge}
              style={{
                backgroundImage: `url('${url}')`,
              }}
            >
              <div className={styles.promoLargeContent}>
                <h3 className={styles.heading}>guest room</h3>
                <span className={styles.strong}>sofa</span>
                <p className={styles.priceOff}>-20%</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='row'>
              <div className='col'>
                <div
                  className={`${styles.promoSmall} ${styles.promoSmallTop}`}
                  style={{
                    backgroundImage: `url('${url}')`,
                  }}
                >
                  <div className={styles.promoSmallContent}>
                    <h3 className={styles.heading}>
                      <span className={styles.strong}>office </span>
                      chair
                    </h3>
                    <p className={styles.subtitle}>collection</p>
                    <p className={styles.priceOff}>$200.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div
                  className={`${styles.promoSmall} ${styles.promoSmallBottom}`}
                  style={{
                    backgroundImage: `url('${url}')`,
                  }}
                >
                  <h3 className={styles.heading}>
                    <span className={styles.strong}>special </span>
                    collection
                  </h3>
                  <p className={styles.priceOff}>save up 45% of furniture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
