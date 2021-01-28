import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import GallerySlider from './GallerySliderContainer';
import Button from '../../common/Button/Button';

const Gallery = ({ products }) => {
  const imageSource = products[0];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div sm={12} lg={3}>
            <GallerySlider />
          </div>
          <div sm={12} lg={3}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={imageSource.image}
                alt='coming soon'
              />
              <div className={styles.content}>
                <div>
                  <h6>from </h6>
                  <h1>$ 50.80</h1>
                </div>
                <h1>Bedroom bed</h1>
                <Button variant='gallery' className={styles.button}>
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  products: PropTypes.array,
  saleOff: PropTypes.object,
};

export default Gallery;