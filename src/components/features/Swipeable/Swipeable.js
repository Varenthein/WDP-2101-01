import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const Swipeable = children => {
  return <SwipeableViews enableMouseEvents>{children}</SwipeableViews>;
};

export default Swipeable;
