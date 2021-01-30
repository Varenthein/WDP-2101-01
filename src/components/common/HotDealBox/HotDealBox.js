import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDealBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Counter from '../../common/Counter/Counter';

const HotDealBox = ({
  name,
  price,
  promo,
  stars,
  userRating,
  imageSource,
  oldPrice,
  isExchange,
  isFavorite,
  toggleFavorite,
  id,
}) => (
  <div className={styles.root}>
    <div className={styles.photoWrapper}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url("${imageSource}")`,
        }}
      >
        <div className={styles.addToCart}>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket} /> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.counter}>
        <Counter />
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line} />
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye}>Observe</FontAwesomeIcon>
        </Button>
        <Button
          variant='outline'
          className={isFavorite === true ? styles.favorite : 'nonclass'}
          onClick={event => `${toggleFavorite({ id })} ${event.preventDefault()}`}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          variant='outline'
          className={isExchange === true ? styles.exchange : 'nonclass'}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <del className={styles.expiredContainer}>
          {oldPrice ? <span className={styles.expiredPrice}>$ {oldPrice}</span> : null}
        </del>
        <Button className={styles.Button} variant='small' noHover>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

HotDealBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.number,
  imageSource: PropTypes.string,
  isExchange: PropTypes.bool,
  isFavorite: PropTypes.bool,
  toggleFavorite: PropTypes.func,
  id: PropTypes.string,
};
export default HotDealBox;
