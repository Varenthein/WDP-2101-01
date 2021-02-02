import React from 'react';
import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import HotDeals from '../../features/HotDeals/HotDealsContainer';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import StickyBar from '../../features/StickyBar/StickyBarContainer';
import Promotions from './../../features/Promotions/PromotionsContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <HotDeals />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <StickyBar />
    <Feedback />
  </div>
);

export default Homepage;
