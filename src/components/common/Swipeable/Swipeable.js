import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

const Swipeable = ({ children, onLeftAction, onRightAction }) => {
  return (
    <SwipeableViews
      slideStyle={{ overflow: 'visible' }}
      onChangeIndex={(index, indexLatest) => {
        return index > indexLatest ? onRightAction() : onLeftAction();
      }}
      enableMouseEvents
    >
      {children}
    </SwipeableViews>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  onLeftAction: PropTypes.func,
  onRightAction: PropTypes.func,
};

export default Swipeable;
