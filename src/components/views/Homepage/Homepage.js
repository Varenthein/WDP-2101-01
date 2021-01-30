import React from 'react';
import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import StickyBar from '../../features/StickyBar/StickyBarContainer';
import Promotions from './../../features/Promotions/PromotionsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <StickyBar />
  </div>
);

export default Homepage;
