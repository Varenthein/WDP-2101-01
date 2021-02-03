import React from 'react';
//import PropTypes from 'prop-types';
//import { Col } from 'react-flexbox-grid';
import styles from './Gallery.module.scss';
import GallerySlider from './GallerySliderContainer';
import Button from '../../common/Button/Button';

const Gallery = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <GallerySlider />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className={styles.imageWrapper}>
              <img className={styles.image} src='/images/sofa.jpg' alt='Sofa'/>
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

//Gallery.propTypes = {
//};

export default Gallery;