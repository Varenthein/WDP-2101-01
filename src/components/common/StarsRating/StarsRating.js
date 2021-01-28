import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './StarsRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarsRating = ({ rating, userRating }) => {
  const [currentRating, setCurrentRating] = useState(null);
  const [hover, setHover] = useState(null);
  let fillColor = hover || currentRating || userRating ? '#d58e32' : '#000';
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ratingValue}>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setCurrentRating(ratingValue)}
            />
            <FontAwesomeIcon
              className={styles.star}
              color={
                ratingValue <= (hover || currentRating || userRating || rating)
                  ? fillColor
                  : '#d8d8d8'
              }
              icon={faStar}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

StarsRating.propTypes = {
  rating: PropTypes.number,
  userRating: PropTypes.number,
};

export default StarsRating;
