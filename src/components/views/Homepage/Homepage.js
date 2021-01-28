import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
<<<<<<< HEAD
import Gallery from '../../features/Gallery/GalleryContainer';
=======
import Promotions from './../../features/Promotions/PromotionsContainer';
>>>>>>> 476ae0cd9fca10c1805e75ebe69f9688e2491792

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Gallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
