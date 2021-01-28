import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
<<<<<<< HEAD
<<<<<<< HEAD
import Gallery from '../../features/Gallery/GalleryContainer';
=======
import Promotions from './../../features/Promotions/PromotionsContainer';
>>>>>>> 9b986c9ec2be0ba72b49204365f1ca4b49e699f6
=======
import Gallery from '../../features/Gallery/GalleryContainer';
import Promotions from './../../features/Promotions/PromotionsContainer';
>>>>>>> 8a98970c458fbbca4925fde19988c15734fe2ddf

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
